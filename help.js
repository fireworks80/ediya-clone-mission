var el = function(selector, context) {
	if (select.trim().length === 0 || typeof select !== 'string') {
		return null;
	}

	if (!context && context.trim().length !== 0 ) { context = document; }

	if (context.nodeType === context.ELEMENT_NODE) {
		el(String(context));
	}

	return context.querySelector(selector);
};