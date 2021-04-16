import React from 'react';
import { Heading, Container, Block, Columns } from 'react-bulma-components';
import { Trans } from '@lingui/macro';
import Icon from 'components/icon';
import Banner from './components/banner';
import Example from './components/example';

const Main = () => {
  return (
    <>
      <Banner />
      <Container renderAs={Block} mt="6" max breakpoint="widescreen" px={5}>
        <Container renderAs={Block}>
          <Heading renderAs="h2" size={4}>
            <Trans>
              The React wrapper for <b>Bulma</b> that we always wanted
            </Trans>
          </Heading>
          <Heading subtitle size={5}>
            <Trans>
              React-Bulma-Components is a library that will allow you to easily
              use all capabilities of CSS Bulma Framework using components in a
              declarative way.
            </Trans>
          </Heading>
        </Container>
        <Container my="6">
          <Columns textAlign="center">
            <Columns.Column>
              <Icon color="primary" name="quill" size="large" />
              <Heading size={4}>
                <Trans>Light Weight</Trans>
              </Heading>
              <Heading subtitle size={6}>
                <Trans>No external dependencies</Trans>
              </Heading>
            </Columns.Column>
            <Columns.Column>
              <Icon color="primary" name="download" size="large" />
              <Heading size={4}>
                <Trans>Easy to use</Trans>
              </Heading>
              <Heading subtitle size={6}>
                <Trans>Just import it and use it</Trans>
              </Heading>
            </Columns.Column>
            <Columns.Column>
              <Icon color="primary" name="cubes" size="large" />
              <Heading size={4}>
                <Trans>Modular</Trans>
              </Heading>
              <Heading subtitle size={6}>
                <Trans>Include only the code you use</Trans>
              </Heading>
            </Columns.Column>
            <Columns.Column>
              <Icon color="primary" name="responsive-design" size="large" />
              <Heading size={4}>
                <Trans>Responsive</Trans>
              </Heading>
              <Heading subtitle size={6}>
                <Trans>
                  Made thinking on <b>Mobile first</b>
                </Trans>
              </Heading>
            </Columns.Column>
          </Columns>
        </Container>
        <Container>
          <Example />
        </Container>
      </Container>
    </>
  );
};

export default Main;
