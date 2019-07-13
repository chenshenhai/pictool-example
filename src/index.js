import Pictool from 'pictool';


var src = './image/lena.jpg';
var Sandbox = Pictool.browser.Sandbox;
var sandbox = new Sandbox(src);
var dom = document.querySelector('#display');

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

console.log(Pictool);