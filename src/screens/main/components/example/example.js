import React, { useState } from 'react';
import CodeExample from 'components/code-example';
import { Block, Box, Button, Element, Form } from 'react-bulma-components';
import Icon from 'components/icon';

const exampleCode = {
  reactCode: `
<Form.Field display="flex" justifyContent="center">
  <Icon text color="brand" size="large">
    <i className="custom-logo" />
  </Icon>
  <Form.Label>React Bulma Components</Form.Label>
</Form.Field>
<Form.Field>
  <Form.Label>Name</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Username" name="name" value={form.name} onChange={update} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Form.Field>
  <Form.Label>Password</Form.Label>
  <Form.Control>
    <Form.Input placeholder="Password" name="password" type="password" value={form.password} onChange={update} />
    <Icon align="left">
      <i className="github" />
    </Icon>
  </Form.Control>
</Form.Field>
<Button.Group>
  <Button fullwidth rounded color="primary" onClick={() => console.log(form)}>Login</Button>
</Button.Group>
`,
  bulmaCode: `
<div class="field is-justify-content-center is-flex">
  <span class="icon is-large has-text-brand icon-text">
    <i class="rbc-icon custom-logo"></i>
  </span>
  <label class="label">React Bulma Components</label>
</div>
<div class="field">
  <label class="label">Name</label>
  <div class="control has-icons-left">
    <input class="input" type="text" placeholder="Username">
    <span class="icon is-left">
      <i class="rbc-icon github"></i>
    </span>
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-left">
      <i class="rbc-icon lock"></i>
    </span>
  </div>
</div>
<div class="buttons">
  <button class="is-primary is-rounded is-fullwidth button" tabindex="0">Login</button>
</div>
`,
};

const Example = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  const update = ({ target }) => {
    return setForm({ ...form, [target.name]: target.value });
  };
  return (
    <Block>
      <Box paddingless style={{ overflow: 'hidden' }}>
        <CodeExample {...exampleCode} alignment="horizontal">
          <Element
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ width: '100%', height: 552 }}
          >
            <Form.Field display="flex" justifyContent="center">
              <Icon text color="brand" name="logo" size="large" />
              <Form.Label style={{ lineHeight: '3em' }}>
                React Bulma Components
              </Form.Label>
            </Form.Field>
            <Form.Field>
              <Form.Label>Name</Form.Label>
              <Form.Control iconType={Icon}>
                <Form.Input
                  placeholder="Username"
                  name="name"
                  value={form.name}
                  onChange={update}
                />
                <Icon name="github" align="left" />
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Label>Password</Form.Label>
              <Form.Control iconType={Icon}>
                <Form.Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={update}
                />
                <Icon name="lock" align="left" />
              </Form.Control>
            </Form.Field>
            <Button.Group>
              <Button
                fullwidth
                rounded
                color="primary"
                onClick={() => {
                  return console.log(form);
                }}
              >
                Login
              </Button>
            </Button.Group>
          </Element>
        </CodeExample>
      </Box>
    </Block>
  );
};

export default Example;
