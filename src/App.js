import React, { Component } from 'react';
import Header from './common/header';
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './pages/detail/loadable'
import Home from './pages/home/index'
import Login from './pages/login/index'
//import { Content } from './style'
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <BrowserRouter>

          <Header />

          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </BrowserRouter>

      </Provider>

    );
  }

}


export default App
