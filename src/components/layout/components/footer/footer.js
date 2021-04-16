import { Trans } from '@lingui/macro';
import Link from 'components/link';
import React from 'react';
import { Columns, Container } from 'react-bulma-components';
import './footer.scss';

const CustomFooter = () => {
  return (
    <footer id="footer">
      <Container px="3">
        <Columns breakpoint="mobile">
          <Columns.Column size="4">
            <ul>
              <li>
                <Link to="/" exact activeClassName="is-active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/getting-started" activeClassName="is-active">
                  Getting Started
                </Link>
              </li>
            </ul>
          </Columns.Column>
          <Columns.Column />
          <Columns.Column display="flex" alignItems="flex-end" narrow>
            <Trans>All right reserved {new Date().getFullYear()}</Trans>
          </Columns.Column>
        </Columns>
      </Container>
    </footer>
  );
};

export default CustomFooter;
