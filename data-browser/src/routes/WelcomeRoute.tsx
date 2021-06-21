import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerNarrow } from '../components/Containers';
import AtomicLink, { LinkView } from '../components/Link';

export const Welcome: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <ContainerNarrow>
      <h1>Atomic Data</h1>
      <p>
        <em>
          The easiest way to <b>create</b>, <b>share</b> and <b>model</b> linked data.
        </em>
      </p>
      <p>
        Atomic Data is a proposed standard for modeling and exchanging linked data. It uses links to connect pieces of data, and therefore
        makes it easier to connect datasets to each other - even when these datasets exist on separate machines. It aims to help realize a
        more decentralized internet that encourages data ownership and interoperability.
      </p>
      <p>
        Atomic Data is especially suitable for knowledge graphs, distributed datasets, semantic data, p2p applications, decentralized apps,
        and data that is meant to be shared. It is designed to be highly extensible, easy to use, and to make the process of domain specific
        standardization as simple as possible. Check out{' '}
        <b>
          <AtomicLink href='https://docs.atomicdata.dev/'>the docs</AtomicLink>
        </b>{' '}
        for more information about Atomic Data.
      </p>
      <h2>About this app</h2>
      <p>
        You&apos;re looking at <AtomicLink href='https://github.com/joepio/atomic-data-browser'>atomic-data-browser</AtomicLink>, an
        open-source client for viewing and editing data. Please add an issue if you encouter problems or have a feature request. Expect bugs
        and issues, because this stuff is pretty beta.
      </p>
      <p>
        The back-end of this app is <AtomicLink href='https://github.com/joepio/atomic'>atomic-server</AtomicLink>, which you can think of
        as an open source, web-native database.
      </p>
      <p>
        You can edit app settings, such as current user and theme color at{' '}
        <LinkView onClick={() => history.push('/settings')}>/settings</LinkView>.
      </p>
      <p>
        Check out the keyboard shortcuts at <LinkView onClick={() => history.push('/shortcuts')}>/shortcuts</LinkView>.
      </p>
      <h2>Things to visit</h2>
      <ul>
        <li>
          <AtomicLink subject='https://atomicdata.dev/collections/collection'>List of lists</AtomicLink>
        </li>
        <li>
          <AtomicLink subject='https://atomicdata.dev/collections/class'>List of Classes</AtomicLink>
        </li>
        <li>
          <AtomicLink subject='https://atomicdata.dev/collections/property'>List of Properties</AtomicLink>
        </li>
      </ul>
      <h2>Run your own server</h2>
      <p>
        The easiest way to run an <AtomicLink href='https://github.com/joepio/atomic'>atomic-server</AtomicLink> is by using Docker:
      </p>
      <p>
        <code>docker run -p 80:80 -p 443:443 -v atomic-storage:/atomic-storage joepmeneer/atomic-server</code>
      </p>
      <p>
        ...and visit <AtomicLink subject='http://localhost'>localhost</AtomicLink>.
      </p>
      <h2>Build a react front-end app</h2>
      <p>
        Use the{' '}
        <AtomicLink href='https://codesandbox.io/s/atomic-data-react-template-4y9qu?file=/src/MyResource.tsx'>
          atomic-data-react-template
        </AtomicLink>{' '}
        on codesandbox to build a front-end app!
      </p>
      <h2>Join the community</h2>
      <p>
        Atomic Data is open and fully powered by volunteers. We&apos;re looking for people who want to help discuss various design
        challenges and work on implmenentations. If you have any questions, or want to help out, feel free to join our{' '}
        <AtomicLink href='https://discord.gg/a72Rv2P'>Discord</AtomicLink>!
      </p>
    </ContainerNarrow>
  );
};
