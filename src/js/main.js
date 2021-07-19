import Sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

   const newSlider = new Sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
   newSlider.startAnimation()

});