import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header';
import Content from './components/content';
import FormProducts from './components/products/form';
import ListProducts from './components/products/list';
import VisualizeProduct from './components/products/visualize';
import NotFound from './components/notfound';

import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:5000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Header/>
          <Container>
            <Switch>
              <Route path="/" exact={true}><Content/></Route>
              <Route path="/products/" exact={true}>
                <ListProducts/>
              </Route>
              <Route path="/products/new"><FormProducts/></Route>
              <Route path="/products/edit/:idProduct">
                <FormProducts/>
              </Route>
              <Route path="/products/:idProduct">
                <VisualizeProduct/>
              </Route>
              <Route path="*"><NotFound/></Route>
            </Switch>
          </Container>
        </Router>
        <p className='App-intro'>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;