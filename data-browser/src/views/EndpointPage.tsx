import * as React from 'react';
import {
  properties,
  Resource,
  useArray,
  useResource,
  useStore,
  useString,
  useTitle,
} from '@tomic/react';
import { useHistory } from 'react-router-dom';

import { ContainerNarrow } from '../components/Containers';
import Markdown from '../components/datatypes/Markdown';
import ResourceField from '../components/forms/ResourceField';
import { Button } from '../components/Button';
import { openURL } from '../helpers/navigation';
import ResourceCard from './ResourceCard';

type EndpointProps = {
  resource: Resource;
};

/** A View for Endpoints. */
function EndpointPage({ resource }: EndpointProps): JSX.Element {
  const title = useTitle(resource);
  const [description] = useString(resource, properties.description);
  const [parameters] = useArray(resource, properties.endpoint.parameters);
  const [results] = useArray(resource, properties.endpoint.results);
  const virtualResource = useResource(null, { newResource: true });
  const store = useStore();
  const history = useHistory();

  /** Create the URL using the variables */
  async function constructSubject(e?) {
    e && e.preventDefault();
    const url = new URL(resource.getSubject());

    await Promise.all(
      parameters.map(async propUrl => {
        const val = virtualResource.get(propUrl);
        if (val != null) {
          const fullprop = await store.getProperty(propUrl);
          url.searchParams.set(fullprop.shortname, val.toString());
        }
      }),
    );
    history.push(openURL(url.href));
  }

  return (
    <ContainerNarrow about={resource.getSubject()}>
      <h1>{title} endpoint</h1>
      {description && <Markdown text={description} />}
      <form onSubmit={constructSubject}>
        {parameters.map(param => {
          return (
            <ResourceField
              key={param}
              propertyURL={param}
              resource={virtualResource}
            />
          );
        })}
      </form>
      <Button onClick={constructSubject}>Go</Button>

      {results && results.length == 0 ? (
        <p>No hits</p>
      ) : (
        results.map(result => {
          return <ResourceCard key={result} subject={result} />;
        })
      )}
    </ContainerNarrow>
  );
}

export default EndpointPage;
