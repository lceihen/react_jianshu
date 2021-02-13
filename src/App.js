import React, { Component } from 'react';
import Header from './common/header';
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './pages/detail/index'
import Home from './pages/home/index'
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>

      </Provider>

    );
  }
}

export default App;
