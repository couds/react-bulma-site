import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import reportWebVitals from 'reportWebVitals';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
} from 'react-router-dom';
import './index.scss';
import Layout from 'components/layout';
import { en, es } from 'make-plural/plurals';

i18n.loadLocaleData({
  en: { plurals: en },
  es: { plurals: es },
});

const Main = lazy(() => {
  return import('screens/main');
});

const GettingStarted = lazy(() => {
  return import('screens/getting-started');
});

const App = () => {
  const [messages, setMessages] = useState();
  const { lang } = useParams();

  useEffect(() => {
    import(`locales/${lang}/messages`).then((locale) => {
      i18n.load(lang, locale.messages);
      i18n.activate(lang);
      setMessages(locale.messages);
    });
  }, [lang]);

  if (!messages) {
    return <div />;
  }
  return (
    <I18nProvider i18n={i18n}>
      <Layout>
        <Suspense fallback={<div />}>
          <Switch>
            <Route path="/:lang/" exact>
              <Main />
            </Route>
            <Route path="/:lang/getting-started" component={GettingStarted} />
          </Switch>
        </Suspense>
      </Layout>
    </I18nProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/:lang(es|en)/">
          <App />
        </Route>
        <Route path="*">
          <Redirect to="/en" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
