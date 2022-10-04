import React from 'react';
import { Link, Router } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';

import { default as NavigationStyles } from './Navigation.module.scss';

const style = bemCssModules(NavigationStyles);

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={style('__navList')}>
          <li className={style('__login')}>
            <button>Login</button>
          </li>
          <li className={style('button__edit')}>
            <button>Edit Profile</button>
          </li>
          <li className={style('__searchingBar')}>
            <input value="Searching Bar" />
            <select>
              <option>Opcja 1</option>
              <option>Opcja 2</option>
              <option>Opcja 3</option>
              <option>Opcja 4</option>
              <option>Opcja 5</option>
            </select>
          </li>
          <li className={style('button__find')}>
            <button>Find</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
