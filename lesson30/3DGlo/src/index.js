'use strict';

import calculator from './modules/calculator';
import countTimer from './modules/countTimer';
import replacePhoto from './modules/replacePhoto';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import smoothScrollToService from './modules/smoothScrollToService';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import validateCalcInput from './modules/validateCalcInput';
import validateUserForm from './modules/validateUserForm';

//таймер
countTimer('16 jul 2021 23:59:59');
    
//toggleMenu
toggleMenu();

//popup
togglePopUp();

// smooth scroll
smoothScrollToService();

//табы
tabs();

//slider
slider();

//change photo on mouse move
replacePhoto();

//calculator -> validate digits input
validateCalcInput();

//validateUserForm
validateUserForm();

//Calculator
calculator(100);

//send-ajax-form
sendForm();
