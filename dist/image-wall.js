(new function() {

	var element;
	
	$.fn.imageWall = function(options) {

		element = $(this);

		element.find('img').unbind('load');
		element.find('img').bind('load', function() {
			update(1000);
		});

		update();
		$(window).resize(function() {
			update(200);
		});

	};

	var grid = {
		width: null,
		height: null,
		row: []
	};

	var updateDelay;
	var update = function(delay) {
		if(!delay) return _update();
		if(updateDelay) clearTimeout(updateDelay);
		updateDelay = setTimeout(_update, delay);
	};

	var _update = function() {

		var currentScrollTop = $(window).scrollTop();

		// first setup
		// get image-wall's container width & height

		element.append('<div class="row dummy-row" />')

		grid = {
			width: $('.image-wall .row').outerWidth(),
			height: $('.image-wall .row').outerHeight(),
			row: [],
		};

		element.find('.row.dummy-row').remove();

		// first alignment grid

		alignmentGrid();

		// fix if last row not full

		if(grid.row.length > 0) {
			while(grid.row[grid.row.length - 1].width < grid.width * 0.8) {
				var r = grid.row.length - 1;

				if(grid.row[r] ? grid.row[r].photos.length > 0 : false) {

					var i = gridRowIndex_MinWidth();
					grid.row[i].maxWidth = Math.max(grid.row[i].width, grid.row[i].maxWidth) + grid.row[i + 1].photos[0].width;
		
					for(var _i=i + 1; _i<grid.row.length; _i++) {
						grid.row[_i] = {};
					}

					alignmentGrid();

				}

			}
		}

		// render to page

		element.html('');
		for(var r=0; r<grid.row.length; r++) {
			
			var row = $('<div class="row"></div>').appendTo(element);
			for(var c=0; c<grid.row[r].photos.length; c++) {
				row.append('\
					<div class="column" style="flex: ' + Math.max(1, Math.round(grid.row[r].photos[c].width / grid.row[r].width * 12)) + ';">\
						<a style="background-image: url(' + grid.row[r].photos[c].element.attr('src') + ');" data-index="' + grid.row[r].photos[c].index + '">\
							' + grid.row[r].photos[c].element[0].outerHTML + '\
						</a>\
					</div>\
				');
			}

		}

		element.find('img').unbind('load');
		element.find('img').each(function() {
			if(this.complete) return;
			$(this).bind('load', function() {
				update(1000);
			});
		});

		$(window).scrollTop(currentScrollTop);

	};

	var alignmentGrid = function() {

		if(grid.row.length > 0) {
			for(var r=0; r<grid.row.length; r++) {
				grid.row[r].width = 0;
				grid.row[r].photos = [];
			}
		}

		var r = 0;
		element.find('img').each(function(index) {

			if(!grid.row[r]) {
				grid.row[r] = {};
			}

			if(!grid.row[r].width) {
				grid.row[r].width = 0;
			}

			if(!grid.row[r].photos) {
				grid.row[r].photos = [];
			}

			if(!grid.row[r].maxWidth) {
				grid.row[r].maxWidth = grid.width;
			}

			var targetWidth = $(this)[0].naturalWidth ? ($(this)[0].naturalWidth / $(this)[0].naturalHeight * grid.height) : grid.height;

			grid.row[r].width += targetWidth;
			grid.row[r].photos.push({
				index: index,
				width: targetWidth,
				element: $(this)
			});

			if(grid.row[r].width > grid.row[r].maxWidth) {
				r++;
			}

		});

		while(true) {
			if(grid.row.length == 0) break;
			if(grid.row[grid.row.length - 1]) {
				if(!grid.row[grid.row.length - 1] || !grid.row[grid.row.length - 1].photos || grid.row[grid.row.length - 1].photos.length == 0) {
					grid.row.pop();
				} else {
					break;
				}
			} else {
				break;
			}
		}

	};

	var gridRowIndex_MinWidth = function() {

		var i = 0;
		for(var r=0; r<grid.row.length - 1; r++) {
			if(grid.row[r].width < grid.row[i].width) {
				i = r;
			}
		}

		return i;
		
	};
});