# Jacket
A script that can run from the Browser Inspect Element's console to change the website's appearance and text.

## Disclaimer
I am not responsible on how you use this tool! If it affect your work or business in any way. I am not responsible. Use it at your own discretion. Even though the changing of the text is not **persistent**. There may be some cases where other factors comes into play (on why it may be persistent). Hence, why this tool is to be used at the user's own discretion.

# Usage
To use Jacket, one must make a new instance of the class itself. One can choose to either store the instance in a variable or just make it a one-liner script.

```javascript
// Paste the script (from Jacket.js) into the Inspect Element's console then click enter. It should show 'undefined', you are all set!

// Store it in a variable (note that the arguments are the constructor's argument)

let __jacket__ = new Jacket();
__jacket__.run(input_img_src, input_txt, input_a_href, input_a_txt) // Note that the .run() function applies the 'Appearance and Text' change.

// One-liner script
new Jacket().run(input_img_src, input_txt, input_a_href, input_a_txt)

// Example method (Changes all text to 'HACKED' and the other)
new Jacket().example()
```

# API Docs
-   `.run(input_img_src, input_txt, input_a_href, input_a_txt)`
    -   input_img_src (String or Boolean [Only `false`])
        -   The image source link which replaces the `<img src=""></img>` 'src' part of the image tag. The argument must either be a static image link served over HTTPS or a `false` if replacing images is not necessary.

    -   input_txt (String)
        -   Changes the text contents of all text-based elements (h1, h2, h3, h4, h5, h6, span, p)

    -   input_a_href (String)
        -   Changes the href link of an anchor tag `<a href=""></a>`.

    -   input_a_txt_ (String)
        -   Changes the text display of an anchor tag `<a href="https://...">'TEXT CONTENTS HERE</a>`. It replaces the part 'TEXT CONTENTS HERE'.

-   `.example()`
    -   Changes all the text elements to 'HACKED!'