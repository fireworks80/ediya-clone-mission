var el = function(selector, context) {
	if (selector.trim().length === 0 || typeof selector !== 'string') {
		return null;
	}

	context = !context ? document : context.nodeType === 1 ? context : el(String(context));

	return context.querySelector(selector);
};

var els = function(selector, context) {
	if (selector.trim().length === 0 || typeof selector !== 'string') {
		return null;
	}

	context = !context ? document : context.nodeType === 1 ? context : el(String(context));

	return context.querySelectorAll(selector);
}