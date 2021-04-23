import { Trans } from '@lingui/macro';
import Link from 'components/link';
import React from 'react';
import { Columns, Container } from 'react-bulma-components';
import './footer.scss';

const CustomFooter = () => {
  return (
    <footer id="footer">
      <Container px="3">
        <Columns>
          <Columns.Column size="4">
            <ul>
              <li>
                <Link to="/" exact activeClassName="is-active">
                  <Trans>Home</Trans>
                </Link>
              </li>
              <li>
                <Link to="/getting-started" activeClassName="is-active">
                  <Trans>Getting Started</Trans>
                </Link>
              </li>
              <li>
                <a
                  href="https://couds.github.io/react-bulma-components/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Trans>Storybook</Trans>
                </a>
              </li>
            </ul>
          </Columns.Column>
          <Columns.Column />
          <Columns.Column
            textColor="brand"
            touch={{ display: 'block', textAlign: 'center' }}
            desktop={{ display: 'flex' }}
            alignItems="flex-end"
            narrow
          >
            <Trans>© {new Date().getFullYear()}. All Rights Reserved.</Trans>
          </Columns.Column>
        </Columns>
      </Container>
    </footer>
  );
};

export default CustomFooter;
