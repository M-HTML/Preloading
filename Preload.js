        function preloadImages() {
            var images = document.getElementsByTagName('img');
            var imageUrls = [];

            for (var i = 0; i < images.length; i++) {
                imageUrls.push(images[i].src);
            }

            var styleSheets = document.styleSheets;
            for (var j = 0; j < styleSheets.length; j++) {
                var rules = styleSheets[j].cssRules || styleSheets[j].rules;

                for (var k = 0; k < rules.length; k++) {
                    var rule = rules[k];

                    if (rule.style && rule.style.backgroundImage) {
                        var matches = rule.style.backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
                        if (matches && matches[1]) {
                            imageUrls.push(matches[1]);
                        }
                    }
                }
            }

            var preloadedImages = [];
            var loadedCount = 0;

            function imageLoaded() {
                loadedCount++;

                if (loadedCount === imageUrls.length) {
                    console.warn('the images have been preloaded!');
                }
            }

            for (var m = 0; m < imageUrls.length; m++) {
                var img = new Image();
                img.src = imageUrls[m];
                img.onload = imageLoaded;
                preloadedImages.push(img);
            }
        }

        preloadImages();
