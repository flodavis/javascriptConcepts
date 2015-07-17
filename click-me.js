function applyInstances(name, template) {
	var instances = document.querySelectorAll('.' + name);

	[].forEach.call(instances, function(instance) {
		var clone = template.cloneNode(true);
		// adding shadow dom
		var root = instance.createShadowRoot();
		instance.appendChild(clone);
	});
}

function createWidgetTemplate() {
	var template = document.createFragment();
	var div = document.createElement('div');
	div.textContent = 'MY WIDGET';

	var button = document.createElement('button');
	button.textContent = 'CLICK ME';
	template.appendChild(div);
	template.appendChild(button);

	return template;
}

var widgetTemplate = createWidgetTemplate();
applyInstances('my-widget', widgetTemplate);

// styling textContent
var style = document.createElement('style');
style.textContent = 'div {' + 'background-color:#000;' + 'color:#fff' + '}';