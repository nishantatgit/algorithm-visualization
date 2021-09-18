function onDOMReady(callback) {
	if (typeof callback !== 'function') {
		throw new Error('callback is not a function');
	}
	//console.log('document.readyState', document.readyState);
	if (document.readyState === 'completed') {
		callback();
	} else {
		window.addEventListener('load', callback, false);
	}
}

export { onDOMReady };
