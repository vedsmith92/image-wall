# Jquery Image Wall

Turn this:

![](https://raw.githubusercontent.com/vedsmith92/image-wall/master/before.jpg)

To this:

![](https://raw.githubusercontent.com/vedsmith92/image-wall/master/after.jpg)

## Supports

0. Auto re-render when window resize (full responsive) or image loaded.
0. Support custom data attributes.
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
	<img src="IMAGE-URL" data-custom-attribute="CUSTOM ATTRIBUTE HERE!">
	...
</div>
```

Rendered  HTML:

```
<div class="image-wall">
	<div class="row">
		<div class="column" style="flex: 2;">
			<a style="background-image: url(IMAGE-URL);" data-index="0">
				<img src="IMAGE-URL" data-custom-attribute="CUSTOM ATTRIBUTE HERE!">
			</a>
		</div>
		...
	</div>
	...
</div>
```

### Methods

Call this to re-render the wall:

```
$('.image-wall').imageWall();
```

## Example

[See demo here](https://rawgit.com/vedsmith92/image-wall/master/test/index.html)

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