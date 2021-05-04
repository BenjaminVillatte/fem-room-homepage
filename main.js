import './css/reset.css'
import './css/style.css'

import Slider from './js/Slider'

document.addEventListener('DOMContentLoaded', function() {

  /** MENU **/

  document.querySelector('.toggle-nav').addEventListener('click', function(e) {

    document.querySelector('body').classList.toggle('menu-opened');

  });

  const slider = new Slider([
    '.slider-illustration .item',
    '.slider-text .item'
  ])

});
