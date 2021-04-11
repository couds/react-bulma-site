import React, { useState } from 'react';
import { Container, Navbar } from 'react-bulma-components';
import Icon from 'components/icon';
import { Link, useParams } from 'react-router-dom';
import { Trans } from '@lingui/macro';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState();
  const { lang } = useParams();
  return (
    <Navbar renderAs={Container} active={showMenu}>
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to={`/${lang}`}>
          <Icon name="logo" size="medium" />
        </Navbar.Item>
        <Navbar.Item>Getting Started</Navbar.Item>
        <Navbar.Burger
          onClick={() => {
            return setShowMenu((show) => {
              return !show;
            });
          }}
        />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align="right">
          <Navbar.Item hoverable>
            <Navbar.Link>
              <Icon name="earth" />
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item to="/en" renderAs={Link}>
                <Trans>English</Trans>
              </Navbar.Item>
              <Navbar.Item to="/es" renderAs={Link}>
                <Trans>Spanish</Trans>
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default CustomNavbar;
