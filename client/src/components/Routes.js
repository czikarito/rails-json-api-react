import React, { PureComponent, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import { getUser } from '../store/auth';
import App from './App';
import Dashboard from './Dashboard';
import { PostList, PostEdit } from './Posts';
import { CategoryList, CategoryEdit } from './Categories';
import { UserList, UserEdit } from './Users';
import { Login } from './Auth';

const UserIsAuthenticated = UserAuthWrapper({ authSelector: getUser });

export class Routes extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
  };

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route path="/" component={UserIsAuthenticated(App)}>
          <IndexRoute component={Dashboard}/>
          <Route path="/posts" component={PostList}/>
          <Route path="/posts/new" component={PostEdit}/>
          <Route path="/posts/:id" component={PostEdit}/>
          <Route path="/categories" component={CategoryList}/>
          <Route path="/users" component={UserList}/>
          <Route path="/users/:id" component={UserEdit}/>
        </Route>
        <Route path="/login" component={Login}/>
      </Router>
    );
  }
}

export default Routes;
