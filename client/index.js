import { domReady } from '../client/utils/domReady';

import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';

function attachEventListeners() {
	const bubbleSortBtn = document.querySelectorAll('js-bubble-sort-btn')[0];
	bubbleSortBtn.addEventListener('click', runBubbleSort);

	const selectionSortBtn = document.querySelectorAll(
		'js-selection-sort-btn'
	)[0];
	selectionSortBtn.addEventListener('click');
}
