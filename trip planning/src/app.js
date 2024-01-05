import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import BestPrices from './components/Women';
import Men from './components/Men';
import Clothes from './components/Clothes';
import Accessories from './components/Accessories';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';
import About from './components/about/about.jsx';
import Places from './components/Places/places.jsx';
import Contact from './components/Contact/contact.jsx';
import LoginPage from './components/loginpage/loginpage.jsx';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route path="/BestPrices" component={BestPrices}  />
        <Route path="/Hotels" component={Men} />
        <Route path="/Safety" component={Clothes}  />
        <Route path="/Packages" component={Accessories} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/places" component={Places} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
