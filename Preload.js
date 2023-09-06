function preloadImages() {
    var imageUrls = [];

    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        imageUrls.push(images[i].src);
    }

    var objects = document.getElementsByTagName('object');
    for (var i = 0; i < objects.length; i++) {
        var data = objects[i].getAttribute('data');
        if (data) {
            imageUrls.push(data);
        }
    }

    var links = document.getElementsByTagName('a');
    for (var j = 0; j < links.length; j++) {
        var href = links[j].href;
        if (href && href !== '#') {
            imageUrls.push(href);
        }
    }

    var styleSheets = document.styleSheets;
    for (var k = 0; k < styleSheets.length; k++) {
        var rules = styleSheets[k].cssRules || styleSheets[k].rules;

        for (var l = 0; l < rules.length; l++) {
            var rule = rules[l];

            if (rule.style) {
                if (rule.style.backgroundImage) {
                    var matches = rule.style.backgroundImage.match(/url\(['"]?([^'")]+\.svg)['"]?\)/);
                    if (matches && matches[1]) {
                        imageUrls.push(matches[1]);
                    }
                }

                if (rule.style.listStyleImage) {
                    var listStyleImage = rule.style.listStyleImage;
                    var listStyleMatches = listStyleImage.match(/url\(['"]?([^'")]+\.svg)['"]?\)/);
                    if (listStyleMatches && listStyleMatches[1]) {
                        imageUrls.push(listStyleMatches[1]);
                    }
                }

                if (rule.style.borderImageSource) {
                    var borderImageSource = rule.style.borderImageSource;
                    var borderImageMatches = borderImageSource.match(/url\(['"]?([^'")]+\.svg)['"]?\)/);
                    if (borderImageMatches && borderImageMatches[1]) {
                        imageUrls.push(borderImageMatches[1]);
                    }
                }

                if (rule.style.cursor) {
                    var cursor = rule.style.cursor;
                    var cursorMatches = cursor.match(/url\(['"]?([^'")]+\.svg)['"]?\)/);
                    if (cursorMatches && cursorMatches[1]) {
                        imageUrls.push(cursorMatches[1]);
                    }
                }
            }
        }
    }

    var pseudoElements = document.querySelectorAll('*::before, *::after');
    for (var m = 0; m < pseudoElements.length; m++) {
        var pseudoElement = pseudoElements[m];
        var content = window.getComputedStyle(pseudoElement, '::before').content;
        if (content.indexOf('url') !== -1) {
            var matches = content.match(/url\(['"]?([^'")]+\.svg)['"]?\)/);
            if (matches && matches[1]) {
                imageUrls.push(matches[1]);
            }
        }
    }

    var elementsWithMasks = document.querySelectorAll('[mask-image]');
    for (var n = 0; n < elementsWithMasks.length; n++) {
        var maskImage = elementsWithMasks[n].getAttribute('mask-image');
        if (maskImage) {
            imageUrls.push(maskImage);
        }
    }

    var preloadedImages = [];
    var loadedCount = 0;

    function imageLoaded() {
        loadedCount++;

        if (loadedCount === imageUrls.length) {
            console.warn('The images have been preloaded!');
        }
    }

    for (var p = 0; p < imageUrls.length; p++) {
        var img = new Image();
        img.src = imageUrls[p];
        img.onload = imageLoaded;
        preloadedImages.push(img);
    }
}

preloadImages();
