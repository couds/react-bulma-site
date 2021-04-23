import React, { useState } from 'react';
import CodeExample from 'components/code-example';
import { Block, Box, Button, Element, Form } from 'react-bulma-components';
import Icon from 'components/icon';

const exampleCode = {
  reactCode: `
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
      <Box paddingless style={{ overflow: 'hidden', minHeight: 457 }}>
        <CodeExample
          codeMaxHeight={481}
          {...exampleCode}
          alignment="horizontal"
        >
          <Element
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{ height: '100%' }}
          >
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
