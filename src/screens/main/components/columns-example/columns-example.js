import { Trans } from '@lingui/macro';
import React, { useState } from 'react';
import {
  Block,
  Button,
  Columns,
  Heading,
  Message,
} from 'react-bulma-components';
import Section from '../section';

import './columns-example.scss';

const ColumnsExample = () => {
  const [columns, setColumns] = useState(3);

  return (
    <Block px={3} className="columns-example" renderAs={Section}>
      <Heading>
        <Trans>Simple 12 columns system</Trans>
      </Heading>
      <Heading subtitle tablet={{ display: 'hidden' }}>
        <Trans>On mobile the columns stacks</Trans>
      </Heading>
      <Columns>
        {Array(columns)
          .fill(0)
          .map((_, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Columns.Column key={i}>
                <div className="column-sample">{i + 1}</div>
              </Columns.Column>
            );
          })}
      </Columns>
      {columns >= 12 && (
        <Message color="info">
          <Message.Body>
            <Trans>
              You can add more than 12 columns but we recoment to stick to 12
              columns an use nested columns for smaller one
            </Trans>
          </Message.Body>
        </Message>
      )}
      <Button.Group align="center">
        <Button
          color="brand"
          disabled={columns >= 12}
          onClick={() => {
            return setColumns((c) => {
              return c + 1;
            });
          }}
        >
          <Trans>Add Column</Trans>
        </Button>
        <Button
          color="danger"
          colorVariant="light"
          disabled={columns <= 1}
          onClick={() => {
            return setColumns((c) => {
              return c - 1;
            });
          }}
        >
          <Trans>Remove a Column</Trans>
        </Button>
      </Button.Group>
    </Block>
  );
};

export default ColumnsExample;
