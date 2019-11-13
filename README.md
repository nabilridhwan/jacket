# Jacket
A script that can run from the Browser Inspect Element's console to change the website's appearance and text.

## Disclaimer
I am not responsible on how you use this tool! If it affect your work or business in any way. I am not responsible. Use it at your own discretion. Even though the changing of the text is not **persistent**. There may be some cases where other factors comes into play (on why it may be persistent). Hence, why this tool is to be used at the user's own discretion.

# Usage
To use Jacket, one must make a new instance of the class itself. One can choose to either store the instance in a variable or just make it a one-liner script.

```javascript
// Store it in a variable (note that the arguments are the constructor's argument)

let __jacket__ = new Jacket(input_img_src, input_txt, input_a_href, input_a_txt);
__jacket__.run() // Note that the .run() function applies the 'Appearance and Text' change.

// One-liner script
new Jacket(input_img_src, input_txt, input_a_href, input_a_txt).run()
```