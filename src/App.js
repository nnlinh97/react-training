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
import User from './components/User';
import moment from 'moment';

class App extends Component {
  componentDidMount() {
    const date = moment('14-07-1997');
    console.log('startOfYear', moment().startOf('days'));
    console.log('startOfMonth', moment().startOf('month').format('DD-MM-YYYY'));
  }


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/contact' component={Contact} />
            <Route path='/cart' component={Cart} />
            <Route path='/users' component={User} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
