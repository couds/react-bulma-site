import React from 'react';
import { Columns, Hero, Content, Container } from 'react-bulma-components';
import classnames from 'classnames';

import './feature.scss';
import Section from '../section';

const Feature = ({ image, children, reverse, ...props }) => {
  return (
    <Hero
      gradient
      className={classnames('main-feature', {
        'is-reverse': reverse,
      })}
      renderAs={Section}
      {...props}
    >
      <Hero.Body>
        <Container>
          <Columns centered>
            <Columns.Column narrow className="feature-image">
              <img src={image} alt="feature" />
            </Columns.Column>
            <Columns.Column desktop={{ size: 6 }}>
              <Content>{children}</Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Feature;
