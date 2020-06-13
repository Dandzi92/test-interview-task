import React from 'react';
import Layout from './components/Layout/index';
import Main from './components/Main/index';
import { Provider } from 'react-redux';
import './styles/main.scss';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
};

export default App;
