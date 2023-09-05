function preloadImages() {
    var imageUrls = [];

    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        imageUrls.push(images[i].src);
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

            if (rule.style && rule.style.backgroundImage) {
                var matches = rule.style.backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
                if (matches && matches[1]) {
                    imageUrls.push(matches[1]);
                }
            }
        }
    }

    var tables = document.getElementsByTagName('table');
    for (var m = 0; m < tables.length; m++) {
        var tableImages = tables[m].getElementsByTagName('img');
        for (var n = 0; n < tableImages.length; n++) {
            imageUrls.push(tableImages[n].src);
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
