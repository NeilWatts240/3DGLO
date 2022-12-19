'use strict';

import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import toggleCommandPics from "./modules/toggleCommandPics";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";
import formValidation from "./modules/formValidation";

countTimer('29 november 2022');
toggleMenu();
togglePopUp();
tabs();
slider();
toggleCommandPics();
calc(100);
sendForm();
formValidation();