import React from 'react';
import bemCssModules from 'bem-css-modules';

import Logo from '../../media/pictures/logo.svg';
import Banner from '../../media/pictures/banner.svg';

import { default as HeaderStyles } from './Header.module.scss';

const style = bemCssModules(HeaderStyles);

var objToday = new Date(),
  weekday = new Array(
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + '').charAt(0)))) return 'th';
    a = parseInt((a + '').charAt(1));
    return 1 == a ? 'st' : 2 == a ? 'nd' : 3 == a ? 'rd' : 'th';
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? '0' + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour =
    objToday.getHours() > 12
      ? objToday.getHours() - 12
      : objToday.getHours() < 10
      ? '0' + objToday.getHours()
      : objToday.getHours(),
  curMinute =
    objToday.getMinutes() < 10
      ? '0' + objToday.getMinutes()
      : objToday.getMinutes(),
  curSeconds =
    objToday.getSeconds() < 10
      ? '0' + objToday.getSeconds()
      : objToday.getSeconds(),
  curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM';
var today =
  curHour +
  ':' +
  curMinute +
  ':' +
  curSeconds +
  ' ' +
  curMeridiem +
  ' ' +
  dayOfWeek +
  ' ' +
  dayOfMonth +
  ' of ' +
  curMonth +
  ' ' +
  curYear;
/*
function displayClock() {
  var display = new Date().toLocaleTimeString();
  let time = display;
  setTimeout(displayClock, 1000);
}
*/

//var display = new Date().toLocaleTimeString();

const Header = () => {
  return (
    <div className={style('wrapper')}>
      <div className={style('logo')}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={style('banner')}>
        <img src={Banner} alt="Banner" />
      </div>
      <div className={style('date')}>
        {/*display*/}
        {today}
      </div>
    </div>
  );
};

export default Header;
