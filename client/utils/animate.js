import compare from '../utils/compare';
function animate(callback, arr, setComplete) {
	animate.isAnimating = true;
	const step = 2;

	function wrappedCallback() {
		callback(arr);

		if (compare(arr[1].start, arr[1].end)) {
			animate.isAnimating = false;
			window.cancelAnimationFrame(animationFrameHandler);

			if (typeof setComplete === 'function') {
				setComplete();
			}

			return;
		}

		if (arr[0].start + step > arr[0].end) {
			arr[0].start = arr[0].end;
		} else {
			arr[0].start = arr[0].start + step;
		}

		if (arr[1].start - step < arr[1].end) {
			arr[1].start = arr[1].end;
		} else {
			arr[1].start -= step;
		}
		window.requestAnimationFrame(wrappedCallback);
	}
	const animationFrameHandler = window.requestAnimationFrame(wrappedCallback);
}

var animatedPromise = (callback, arr, resolve) =>
	new Promise(function (resolve) {
		animate(callback, arr, resolve);
	});

export { animatedPromise as animate };
