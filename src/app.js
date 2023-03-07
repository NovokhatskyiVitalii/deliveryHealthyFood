import './sass/style.scss';

import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import timer from './modules/timer';
import modal from './modules/modal';
import {openModal} from './modules/modal';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calc();
    timer('.timer', '2023-07-25');
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
});
