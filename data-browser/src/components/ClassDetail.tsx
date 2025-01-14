import React from 'react';
import { properties, Resource, useString } from '@tomic/react';
import ResourceInline from '../views/ResourceInline';
import { Detail } from './Detail';

type Props = {
  resource: Resource;
};

/** Renders the is-a Class for some resource */
export function ClassDetail({ resource }: Props): JSX.Element {
  const [klass] = useString(resource, properties.isA);

  return (
    <React.Fragment>
      {klass && (
        <Detail>
          {'is a '}
          <ResourceInline subject={klass} />
        </Detail>
      )}
    </React.Fragment>
  );
}
