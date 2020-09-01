import { UI } from './constants';

import p5 from 'p5';

const s = ( p ) => {

  let x = 100; 
  let y = 100;

  p.setup = function() {
    p.createCanvas(1664, 710);
    p.background(UI.THEMES.DEFAULT.COLORS.PRIMARY);
    p.fill(UI.THEMES.DEFAULT.COLORS.SECONDARY);
    p.circle(400 + i,400,100,100);
    p.redraw();
  }
    
  };

  p.draw = function() {
    // x = (x + 1)%1665;
   
    // p.stroke('transparent');
    // p.circle(x,y,50,50);
    // p.circle(x + 220,y+150,20,20);
  };

  function helloWorld(){
    console.log('p.redraw', p.redraw);
  }

 
};

let myp5 = new p5(s);