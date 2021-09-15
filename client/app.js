import { animate } from './utils/animate';

import Konva from 'konva';
import { onDOMReady } from './utils/domReady';

const positionArray = [];
const shapeArray = [];
// create layer

const BAR_WIDTH = 20;
const MARGIN = 5;

let layer = new Konva.Layer();

function testKonva() {
	// create stage
	const boundingClientRect = document
		.getElementById('main')
		.getBoundingClientRect();

	const { height: stageHeight } = boundingClientRect;

	const array = [
		220, 190, 250, 200, 40, 320, 60, 90, 100, 370, 10, 380, 110, 120, 130, 230,
		400, 280, 140, 160, 150, 80, 310, 170, 270, 180, 210, 20, 340, 30, 240, 260,
		290, 300, 70, 330, 350, 390, 360, 50,
	];

	const stageWidth = array.length * BAR_WIDTH + (array.length - 1) * MARGIN;
	let stage = new Konva.Stage({
		container: 'main',
		width: stageWidth,
		height: stageHeight,
	});

	console.log('stage ', stage);

	console.log('layer ', layer);

	stage.add(layer);
	drawArray(layer, array);

	bubbleSort(array);
}

async function bubbleSort(array, sortFunction) {
	function defaultSortFunction(a, b) {
		return a - b;
	}

	if (Object.prototype.toString.call(array) !== '[object Array]') {
		throw new TypeError(array + ' is of invalid type');
	}

	var len = array.length;

	if (len === 0 || len === 1) {
		return array;
	}

	sortFunction = sortFunction || defaultSortFunction;

	for (var i = len - 1; i > 0; i--) {
		var swapped = false;
		for (var j = 0; j < i; j++) {
			if (sortFunction(array[j], array[j + 1]) > 0) {
				await animate(animationCallback, [
					{
						shape: shapeArray[j],
						start: positionArray[j].x,
						end: positionArray[j].x + BAR_WIDTH + MARGIN,
					},
					{
						shape: shapeArray[j + 1],
						start: positionArray[j + 1].x,
						end: positionArray[j + 1].x - MARGIN - BAR_WIDTH,
						reverse: true,
					},
				]);

				var tmp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = tmp;

				tmp = positionArray[j + 1];
				positionArray[j + 1] = positionArray[j];
				positionArray[j] = tmp;

				tmp = positionArray[j].x;
				positionArray[j].x = positionArray[j + 1].x;
				positionArray[j + 1].x = tmp;

				tmp = shapeArray[j + 1];
				shapeArray[j + 1] = shapeArray[j];
				shapeArray[j] = tmp;
				swapped = true;
			}
		}

		// shapeArray[j].fill('#0C63A1');

		if (!swapped) {
			break;
		}
	}

	return array;
}

function animationCallback(arr) {
	for (let i = 0; i < arr.length; i++) {
		let { shape, start } = arr[i];
		shape.x(start);
	}

	layer.draw();
}

onDOMReady(testKonva);

function drawArray(layer, array) {
	array.forEach((v, i, a) => {
		let x = i * (BAR_WIDTH + MARGIN);
		let tmpRect = new Konva.Rect({
			x: x,
			y: layer.hitCanvas.height,
			width: BAR_WIDTH,
			height: -v,
			fill: '#D93B48',
			stroke: 'transparent',
			strokeWidth: 1,
		});
		layer.add(tmpRect);
		positionArray[i] = { x: x, y: layer.hitCanvas.height };
		shapeArray[i] = tmpRect;
	});

	layer.draw();
}
