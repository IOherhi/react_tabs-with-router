import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/',
              })}
              to="/"
            >
              Home
            </Link>

            <Link
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/tabs',
              })}
              to="/tabs"
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <Outlet context={tabs} />
    </>
  );
};
