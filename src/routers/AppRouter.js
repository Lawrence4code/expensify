import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => {
  return <div> This is from my dashboard component </div>;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={ExpenseDashboardPage} />
    </BrowserRouter>
  );
};

export default AppRouter;

// <div>
//   <Header />
// </div>
// <Switch>

//   <Route path="/create" component={AddExpensePage} />
//   <Route path="/edit" component={EditExpensePage} />
//   <Route path="/help" component={HelpPage} />
//   <Route component={NotFoundPage} />
// </Switch>
