import Pictool from 'pictool';

const imgSrc = './assets/image/test.jpg';
const Sandbox = Pictool.browser.Sandbox;
const sandbox = new Sandbox(imgSrc);
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
