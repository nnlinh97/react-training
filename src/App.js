import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

class App extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/contact' component={Contact} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
