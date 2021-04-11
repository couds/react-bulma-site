import React from 'react';
import {
  Heading,
  Level,
  Image,
  Card,
  Container,
  Block,
  Content,
} from 'react-bulma-components';
import { Trans } from '@lingui/macro';
import Icon from 'components/icon';
import Layout from 'components/layout';
import Banner from './components/banner';

const Main = () => {
  return (
    <>
      <Banner />
      <Container mt="4" px="5" renderAs={Block}>
        <Heading renderAs="h3" size={3}>
          <Trans>Use Bulma on your React projects with ease</Trans>
        </Heading>
        <Content>
          <Trans>
            React-Bulma-Components is a library that will allow you to easily
            use all capabilities of CSS Bulma Framework using components in a
            declarative way.
          </Trans>
        </Content>
      </Container>
      <Container renderAs={Block}>
        <Level>
          <Level.Item>
            <Card>
              <Card.Header align="left">
                <Image src="" size="square" style={{ width: 250 }} />
              </Card.Header>
              <Card.Content textAlign="center">
                <Icon name="react" color="info" className="icon-text" />
                Item
              </Card.Content>
            </Card>
          </Level.Item>
          <Level.Item>
            <Card>
              <Card.Header align="left">
                <Image size="square" style={{ width: 250 }} />
              </Card.Header>
              <Card.Content textAlign="center">
                <Heading size={6}>Item</Heading>
              </Card.Content>
            </Card>
          </Level.Item>
          <Level.Item>
            <Card>
              <Card.Header align="left">
                <Image size="square" style={{ width: 250 }} />
              </Card.Header>
              <Card.Content textAlign="center">
                <Heading size={6}>Item</Heading>
              </Card.Content>
            </Card>
          </Level.Item>
        </Level>
      </Container>
      <Layout.Footer />
    </>
  );
};

export default Main;
