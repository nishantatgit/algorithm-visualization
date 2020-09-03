// import { UI } from './constants';

// import p5 from 'p5';

// var drawing = {};
// var x = 100;
// const s = function (p) {
//   console.log('initializing instance .........', p);
//   x = 100; 
//   let y = 100;

//   p.setup = function() {
//     x += 1;
//     p.createCanvas(1664, 710);
//     p.background(UI.THEMES.DEFAULT.COLORS.PRIMARY);
//     p.fill(UI.THEMES.DEFAULT.COLORS.SECONDARY);
    
//   }
    
  

//   p.draw = function() {
//     console.log('x -> ',x);
//     p.circle(400 + x,400,100,100);
//   //   console.log('this ', this);
//   //   // x = (x + 1)%1665;
   
//   //   // p.stroke('transparent');
//   //   // p.circle(x,y,50,50);
//   //   // p.circle(x + 220,y+150,20,20);
//   };

//   drawing.redraw = p.redraw
//   drawing.loop = p.loop
//   drawing.noLoop = p.noLoop;
 
// };

// console.log('drawing before instansiation .....' , drawing);
// let myp5 = new p5(s);
// drawing.redraw = drawing.redraw.bind(myp5);
// drawing.noLoop = drawing.noLoop.bind(myp5);
// console.log('drawing after instansiation ......' , drawing);
// drawing.noLoop();
// console.log('drawing.noLoop', drawing.noLoop());

// function abc(){
//   for(var i = 0 ; i < 1000; i++){
    
//     console.log('calling drawing.redraw')
//     x = x + 1;
//     drawing.redraw();
//   }
// }

// if(document.readyState === 'completed'){
//   abc();
// }
//  else {
//   window.addEventListener('load', abc , false);
// }

import Konva from 'konva';
import  { onDOMReady } from './utils/domReady';

function testKonva(){

  const WIDTH = window.innerWidth - 10;
  const HEIGHT = window.innerHeight - 100;
  // create stage
  let stage = new Konva.Stage({
    container: 'main',
    width: WIDTH,
    height: HEIGHT
  });

   // create layer
  let layer = new Konva.Layer();

  let canvas = layer.getCanvas();

  canvas.setPixelRatio(1);
  console.log('canvas ', canvas);

  const array = [100, 150, 250, 340, 200, 50, 320, 87, 43, 89, 213, 423, 54, 435, 100, 333, 250];

  console.log('drawing array');
  drawArray(layer,array);

  console.log('Konva ',Konva);
  // add layer to stage
  stage.add(layer);
}

console.log('testKonva ',testKonva);

onDOMReady(testKonva);


function drawArray(layer,array){
  const WIDTH = window.innerWidth - 10;
  const HEIGHT = window.innerHeight - 100;

  const canvas = layer.getCanvas();
  console.log('canvas ', canvas);
  console.log('width ', canvas.getWidth);
  const totalAvailableWidth = WIDTH;
  const totalAvailableHeight = HEIGHT;
  const length = array.length;

  console.log('totalAvailableWidth',totalAvailableWidth);
  const barWidth = (totalAvailableWidth - 100 - length*25) / length;

  array.forEach((v,i,a) => {
    let x = i*barWidth + i*25 + 50
    let tmpRect = new Konva.Rect({
      x : x,
      y : totalAvailableHeight,
      width: barWidth,
      height: -v,
      fill: '#D93B48',
      stroke: 'transparent',
      strokeWidth: 1,
    });
    layer.add(tmpRect);
  });
}

