import Pictool from 'pictool';

const imgSrc = './assets/image/test.jpg';

// example: Pictool.browser.util.getImageBySrc
Pictool.browser.util.getImageBySrc(imgSrc).then(function(img) {
  document.getElementById('J_Example_02').appendChild(img);
}).catch((err) => {
  console.log(err);
});

// example: Pictool.browser.util.getImageDataBySrc
Pictool.browser.util.getImageDataBySrc(imgSrc).then(function(imgData) {
  document.getElementById('J_Example_03').innerHTML = `
    <code>
      ${JSON.stringify(imgData)}
    </code>
  `;
}).catch((err) => {
  console.log(err);
});

// example: Pictool.browser.util.compressImage
Pictool.browser.util.getImageBySrc(imgSrc).then(function(img) {
  const compressImgSrc = Pictool.browser.util.compressImage(img, { type: 'image/jpeg',  encoderOptions: 0.1})
  document.getElementById('J_Example_04').innerHTML = `<img src="${compressImgSrc}">`;
}).catch((err) => {
  console.log(err);
});

// example: Pictool.browser.util.imageData2Base64
Pictool.browser.util.getImageDataBySrc(imgSrc).then(function(imgData) {
  const base64 = Pictool.browser.util.imageData2Base64(imgData)
  document.getElementById('J_Example_05').innerHTML = `<img src="${base64}">`;
}).catch((err) => {
  console.log(err);
});


// example: Pictool.browser.Sandbox
const sandbox = new Pictool.browser.Sandbox(imgSrc);

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
  document.getElementById('J_Example_06').innerHTML = `<img src="${base64}" />`;
}).catch(function(err) {
  console.log(err);
});

