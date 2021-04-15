import React, { useState } from 'react';
import { Button, Container, Element, Navbar } from 'react-bulma-components';
import Icon from 'components/icon';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import Link from 'components/link';

import './navbar.scss';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState();
  const { lang } = useParams();
  return (
    <Navbar id="navbar" active={showMenu}>
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            <Icon name="home" />
            <Element renderAs="span" ml={2}>
              React Bulma Components
            </Element>
          </Navbar.Item>
          <Navbar.Burger
            onClick={() => {
              return setShowMenu((show) => {
                return !show;
              });
            }}
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item
              renderAs={Link}
              to="/getting-started/"
              exact
              activeClassName="is-active"
            >
              Getting Started
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container align="right">
            <Navbar.Item desktop={{ display: 'hidden' }}>
              <Button.Group align="center">
                <Button color="ghost">
                  <Trans>English</Trans>
                </Button>
                <Button color="ghost">
                  <Trans>Spanish</Trans>
                </Button>
              </Button.Group>
            </Navbar.Item>
            <Navbar.Item hoverable touch={{ display: 'hidden' }}>
              <Navbar.Link textTransform="uppercase">
                <Icon name="earth" color="white" />
                <span>{lang}</span>
              </Navbar.Link>
              <Navbar.Dropdown right>
                <Navbar.Item
                  textAlign="right"
                  to="/en"
                  active={lang === 'en'}
                  renderAs={RouterLink}
                >
                  <Trans>English</Trans>
                </Navbar.Item>
                <Navbar.Item
                  to="/es"
                  active={lang === 'es'}
                  renderAs={RouterLink}
                >
                  <Trans>Spanish</Trans>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
