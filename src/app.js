import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
  return <div> This is from my dashboard component </div>;
};

const AddExpensePage = () => {
  return <div> This is from my add expense component </div>;
};

const EditExpensePage = () => {
  return <div> This is from my edit expense component </div>;
};

const HelpPage = () => {
  return <div> This is from my help component </div>;
};

const NotFoundPage = () => {
  return (
    <div>
      404! - <Link to="/"> Go home </Link>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1> Expensify </h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        DashBoard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Page
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help Pag
      </NavLink>
    </header>
  );
};

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
