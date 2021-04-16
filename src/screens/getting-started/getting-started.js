import { Trans } from '@lingui/macro';
import React from 'react';
import { Block, Container, Element, Heading } from 'react-bulma-components';

import './getting-started.scss';

const GettingStarted = () => {
  return (
    <Element px="3" id="getting-started">
      <Block name="getting-started" mt={5} renderAs={Container}>
        <Heading renderAs="h1" textColor="brand" className="title">
          <Trans>Getting Started with React Bulma Components</Trans>
        </Heading>
      </Block>
      <Block>Test</Block>
    </Element>
  );
};

export default GettingStarted;
