import { animate } from './utils/animate';
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

const positionArray = [];
const shapeArray = [];
  // create layer

let layer = new Konva.Layer();
function testKonva(){

  const WIDTH = window.innerWidth - 10;
  const HEIGHT = window.innerHeight - 100;
  // create stage
  let stage = new Konva.Stage({
    container: 'main',
    width: WIDTH,
    height: HEIGHT
  });

 

  let canvas = layer.getCanvas();

  //canvas.setPixelRatio(1);
  
  const array = [ 
                    61,	206,	397,	21,	264,	96,	312,	167,	431,	36,
                    406,	377,	55,	163,	344,	267,	63,	406, 449,	165,
                    218,	415,	314,	114,	183,	141,	305,	81,	381,	18,
                    79,	6,	168,	299,	423,	94,	259,	358,	101,	103,
                    2,	33,	401,	250,	364,	145,	279,	150,	374,	430 ,
                    137,	412,	236,	119,	7,	287,	290,	74,	402,	246,
                    41,	97,	53,	313,	126,	395,	124,	386,	288,	284,
                    31,	17,	327,	39,	336,	139,	40,	262,	130,	405,
                    383,	326,	65,	20,	445,	59,	52,	156,	39,	345,
                    344,	29,	322,	416,	196,	196,	2,	123,	249,	79,
                    213,	438,	432,	199,	159,	43,	19,	166,	213,	354,
                    280,	433,	187,	399,	325,	121,	65,	380,	227,	309,
                    76,	36,	124,	422,	247,	428,	449,	412,	129,	81,
                    438,	254,	14,	176,	96,	419,	273,	242,	85,	189,
                    58,	361,	168,	393,	288,	77,	269,	308,	12,	159,
                    246,	257,	438,	205,	145	
                ]; 
  
  drawArray(layer,array);
  // add layer to stage
  stage.add(layer);

  bubbleSort(array);
  
}

async function bubbleSort(array, sortFunction){
  function defaultSortFunction(a,b){
    return a-b;
  }

  function animationEndCallback(){
    animationEnded = true;
  }

  var animationEnded;
  
  if(Object.prototype.toString.call(array) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type');
  }

  var len = array.length;

  if(len === 0 || len === 1) {
    return array;
  }

  sortFunction = sortFunction || defaultSortFunction;

  for(var i = len - 1; i > 0; i--){
    var swapped = false;
    for(var j = 0; j < i; j++){
      if(sortFunction(array[j],array[j+1]) > 0){
        
        
        await animate(animationCallback,[
            { shape : shapeArray[j], start: positionArray[j].x, end : positionArray[j+1].x},
            { shape : shapeArray[j+1], start: positionArray[j+1].x, end : positionArray[j].x, reverse: true}
        ],animationEndCallback);

        var tmp = array[j+1];
        array[j+1] = array[j]
        array[j] = tmp;

         tmp = positionArray[j+1];
         positionArray[j+1] = positionArray[j]
         positionArray[j] = tmp;

         tmp = positionArray[j].x;
         positionArray[j].x = positionArray[j+1].x;
         positionArray[j+1].x = tmp;

         tmp = shapeArray[j+1];
         shapeArray[j+1] = shapeArray[j]
         shapeArray[j] = tmp;
        swapped = true;
      }
    }

    shapeArray[j].fill('#0C63A1');

    if(!swapped){
      break;
    }
  }

  return array;
}

function animationCallback(arr){ 
  for(let i = 0; i< arr.length; i++){
    let {
      shape,
      start,
      end,
      reverse
    } = arr[i];

    if((!reverse && start < end) || (reverse && start > end )){
      shape.x(start);
    }
  }

  layer.draw();

  for(let i = 0; i< arr.length; i++){
    let {
      shape,
      start,
      end,
      reverse
    } = arr[i];
    if((!reverse && start < end) || (reverse && start > end )){
      shape.x(start);
    }
  }   
}

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
  const barWidth = (totalAvailableWidth - 100 - length*5) / length;
  array.forEach((v,i,a) => {
    let x = i*barWidth + i*5 + 50
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

    positionArray[i] = { x: x, y : totalAvailableHeight };
    shapeArray[i] = tmpRect;
  });

  
   //animate(animationCallback,[{shape: shapeArray[0], start: 100, end: 1200},{shape: shapeArray[1], start: 700, end: 200, reverse : true}]);
}





function rect({x,y,width,height,fill,stroke,strokeWidth}){

}

