import Pictool from 'pictool';

const src = './image/lena.jpg';
const Sandbox = Pictool.browser.Sandbox;
const sandbox = new Sandbox(src);
const dom = document.querySelector('#J_Example_01');

sandbox.queueProcess([
  {
    process: 'sobel',
    options: {},
  },
  {
    process: 'invert',
    options: {},
  }
]).then(function(base64) {
  dom.innerHTML = `<img src="${base64}" />`;
}).catch(function(err) {
  console.log(err);
});