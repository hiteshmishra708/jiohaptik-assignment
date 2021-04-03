import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Layout from './components/Layouts/Layout';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Login/Register';
import { Div, Spinner } from './components/Common/Common';
import { connect } from "react-redux";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import * as actions from './actions/action';
import { action_types } from './actions/constants';
import { getToken } from './components/Validator/Validator';

class App extends Component {

  componentDidMount() {
    this.props.updateReducer(action_types.LOADER, false);
  }

  render() {
    return (
      <Div className="App">
        {this.props.showLoader && (<Spinner />)}
        <Div cName="d-common-app">
          <Header />
          <Div cName="content">
            {getToken() && this.props.auth && this.props.auth.access_token ? (
              <Switch>
                <Layout>
                  <Route path="/" exact component={Home} />
                  <Redirect from='*' to='/' />
                </Layout>
                <Redirect from='*' to='/' />
              </Switch>
            ) : (
                <Switch>
                  <Layout>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Redirect from='*' to='/login' />
                  </Layout>
                </Switch>
              )}
          </Div>
          <Footer />
        </Div>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.store.auth,
    showLoader: state.store.loader
  };
};
export default connect(
  mapStateToProps,
  actions
)(withRouter(App));
