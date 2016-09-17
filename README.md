# image-wall

Turn this:

![](https://raw.githubusercontent.com/vedsmith92/image-wall/master/before.jpg)

Into this:

![](https://raw.githubusercontent.com/vedsmith92/image-wall/master/after.jpg)

## Example

[See demo here](https://rawgit.com/vedsmith92/image-wall/master/test/index.html)

## About Image-Wall

0. Require jQuery >= 1.12.4
0. Sequentially image order.
0. Auto re-render when window resize (full responsive) or image loaded.
0. Support any/custom data attributes.
0. Support CSS (with media queries).

## Getting started

### Installation

Bower

```
$ bower install image-wall
```

### Usage

Include files:

```
<link href="/path-to/image-wall.css" rel="stylesheet">
<script src="/path-to/jquery.js"></script><!-- jQuery is required -->
<script src="/path-to/image-wall.js"></script>
```

Call Method:

```
$(function() {
	$('.image-wall').imageWall();
});
```

HTML:

```
<div class="image-wall">
	<img src="IMAGE-URL-01" data-custom-attribute="CUSTOM ATTRIBUTE 01 HERE!">
	<img src="IMAGE-URL-02" data-custom-attribute="CUSTOM ATTRIBUTE 02 HERE!">
	<img src="IMAGE-URL-03" data-custom-attribute="CUSTOM ATTRIBUTE 03 HERE!">
	...
</div>
```

Example CSS Styles:

```
body {
	margin: 0;
	padding: 0;
	background-color: #000;
}

.image-wall .row {
	height: 200px;
}

.image-wall, .image-wall .row .column {
	padding: 8px;
}

.image-wall .row a {
	border-radius: 2px;
	background-color: #111;
}

.image-wall .row a:hover {
	opacity: 0.5;
}

@media (max-width: 1024px) {
	.image-wall, .image-wall .row .column {
		padding: 4px;
	}

	.image-wall .row {
		height: 100px;
	}
}

```

### Methods

Call this to re-render the wall:

```
$('.image-wall').imageWall();
```

## Browser support

- Chrome 53+
- Firefox 48+
- Internet Explorer 11+
- Edge 14+
- Opera 10+
- Safari 9.1+

As a jQuery plugin, you also need to see the jQuery Browser Support.

## License

[MIT](http://opensource.org/licenses/MIT) © [Ved Smithiprechawongse](https://github.com/vedsmith92)