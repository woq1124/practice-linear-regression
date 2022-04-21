import { initCanvas } from './canvas.js';

function run() {
  const canvas = document.querySelector('#canvas');
  initCanvas(canvas);
}

document.addEventListener('DOMContentLoaded', run);
