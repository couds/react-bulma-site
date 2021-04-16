import { Trans } from '@lingui/macro';
import React from 'react';
import { Columns, Element, Heading } from 'react-bulma-components';
import wip from 'assets/images/happy-cat.png';

import './getting-started.scss';

const GettingStarted = () => {
  return (
    <Element px="3" id="getting-started">
      <Columns textAlign="center" my={5} centered>
        <Columns.Column size="7">
          <Heading>
            <Trans>Sorry this page its still on develpment</Trans>
          </Heading>
          <Heading size={5}>
            <Trans>
              Meanwhile check out{' '}
              <a href="https://couds.github.io/react-bulma-components/">
                Storybook
              </a>{' '}
              for more details
            </Trans>
          </Heading>
          <img
            src={wip}
            height="256"
            alt="work in process"
            style={{ height: 256 }}
          />
        </Columns.Column>
      </Columns>
    </Element>
  );
};

export default GettingStarted;
