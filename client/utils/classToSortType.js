const classToSortMap = {
	'js-bubble-sort': 'bubbleSort',
	'js-selection-sort': 'selectionSort',
	'js-insertion-sort': 'insertionSort',
	'js-heap-sort': 'heapSort',
	'js-quick-sort': 'quickSort',
	'js-merge-sort': 'mergeSort',
};

export default function classToSortType(className) {
	return classToSortMap[className];
}

export { classToSortMap };
