function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = Number.POSITIVE_INFINITY;
		let minIndex = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				minIndex = j;
			}
		}
		arr[minIndex] = arr[i];
		arr[i] = min;
	}
	return arr;
}
