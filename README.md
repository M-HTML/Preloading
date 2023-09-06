# 🌐 Preloading
Preloads HTML and CSS based images for faster load times by caching them in the browser. (Used on MHTML V4)

# ❓ Explanation
This script works by collecting image URLs (also files) from various sources within a web page and then preloading those images to ensure they are cached in the browser for faster display when they are later used in the webpage's content. 

# ✨ Features
- **Image Source Collection:** Collects image URLs from various sources on a web page, including HTML elements, CSS styles, pseudo-elements, and elements with mask images.

- **Supported Image Types:** It works for preloading various image types, such as SVGs, JPEGs, PNGs, GIFs, and other raster image types.

- **HTML Elements:** Collects image URLs from **<​img​>** and **<​object​>** elements and includes SVGs referenced in these elements.

- **Hyperlinks:** Includes image URLs from **<​a​>** (hyperlink) elements with non-empty href attributes.

- **CSS Styles:** The code checks for common CSS properties (e.g., background-image, list-style-image, border-image-source, cursor) and collects image URLs based on these styles for referenced HTML elements.

- **Pseudo-Elements:** It identifies and collects image URLs from pseudo-elements (::before and ::after) if they contain url references in their content properties.

- **Mask Images:** Collects image URLs from elements with the mask-image attribute.

- **Callback:** It includes a callback function (imageLoaded) that gets executed when all images have finished preloading.

- **Logging:** It logs a message to the console when all images have been preloaded (Used for debugging).

# ⚠ Flaws
**1.** Preloading caches an image instead of downloading to improve performance rather than redownloading an image each time.

**2.** The browser could be using a cached version of an image until that version expires.

**3.** The server the website is hosting could have an exceeding cache duration.

**4.** Only use this for higher priority images/sites with fewer images.

**All of these factors can lead to the browser having an oudated image or slower page loading.**
