import React, { useEffect, useState } from 'react';
import { Button, Container, Element, Navbar } from 'react-bulma-components';
import Icon from 'components/icon';
import { useParams, Link as RouterLink, useLocation } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import Link from 'components/link';

import './navbar.scss';
import classNames from 'classnames';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState();
  const [hasShadow, setHasShadow] = useState(false);
  const { lang } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  useState(() => {
    const listener = () => {
      setHasShadow(window.scrollY > 75);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const regex = new RegExp(`^/${lang}`);

  return (
    <Navbar
      className={classNames({
        'has-dropshadow': hasShadow,
      })}
      color="brand"
      id="navbar"
      active={showMenu}
      fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs={Link} to="/">
            <Icon name="home" />
            <Element renderAs="span" ml={2}>
              <Trans>React Bulma Components</Trans>
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
              <Trans>Getting Started</Trans>
            </Navbar.Item>
            <Navbar.Item desktop={{ display: 'hidden' }} renderAs="span">
              <Button.Group align="center">
                <Button
                  color="ghost"
                  to={pathname.replace(regex, '/en')}
                  renderAs={RouterLink}
                >
                  <Trans>English</Trans>
                </Button>
                <Button
                  color="ghost"
                  to={pathname.replace(regex, '/es')}
                  renderAs={RouterLink}
                >
                  <Trans>Spanish</Trans>
                </Button>
              </Button.Group>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container touch={{ display: 'hidden' }} align="right">
            <Navbar.Item
              renderAs={Link}
              to="/storybook"
              exact
              activeClassName="is-active"
            >
              <Icon name="storybook" />
            </Navbar.Item>
            <Navbar.Item
              href="https://github.com/couds/react-bulma-components"
              target="_blank"
              rel="noopener"
            >
              <Icon name="github" />
            </Navbar.Item>
            <Navbar.Item hoverable>
              <Navbar.Link textTransform="uppercase">
                <Icon
                  name="earth"
                  color="white"
                  style={{ marginRight: '0.5rem' }}
                />
                <span>{lang}</span>
              </Navbar.Link>
              <Navbar.Dropdown right>
                <Navbar.Item
                  textAlign="right"
                  to={pathname.replace(regex, '/en')}
                  active={lang === 'en'}
                  renderAs={RouterLink}
                >
                  <Trans>English</Trans>
                </Navbar.Item>
                <Navbar.Item
                  to={pathname.replace(regex, '/es')}
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
