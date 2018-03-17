# qs-ext-picasso-emptystart
Here you can find JS code to be used as a starting point for a Qlik Sense *Picasso extension*, an extension which makes use of the open-sourced rendering engine picassojs.com by Qlik.

When you install this example and use it, it will show "Hello PicassoJS" as a static text only. That is, because it is meant to be replaced with some more exciting examples from picassojs.com or your own chart definition. 

1) Download this extension package as a ZIP and extract it to your Qlik Sense Desktop extension folder or, if on a Sense Server, import it with the QMC
2) Go to the address http://localhost:4848/dev-hub , right-click on the Extension "newpicasso", choose "Duplicate" and give it a new name e.g. "mypicasso1"
* Note that there are also some examples copied and opened in the Extenions editor, like 'sample-stack-area.js' and 'sample-range-area.js' which you can copy/place over your "mypicasso1.js" file to get a working chart instantly.
3) To start your own chart, just remove the "Hello PicassoJS" line between the down triangles ▼▼▼ and up triangles ▲▲▲ where it reads "components: [...]
4) Best place to try out the settings in a what you see it what you get manner is the "Examples" section on https://picassojs.com This will take you to  https://beta.observablehq.com (the playground page behind) 
5) When done, copy/paste your Json definitions into the newpicasso.js file from this package
6) Watch for the inline-comments which tell you where to paste what.

This is contained in the sample:

![alt text](https://raw.githubusercontent.com/ChristofSchwarz/qs-ext-picasso-emptystart/master/Screenshot.png "Screenshot")

### Resources:
* To learn about PicassoJS see https://picassojs.com and https://github.com/qlik-oss/picasso.js
* Although this code will run out of the box, always use the latest version of Picasso.js and Picasso-Q-Plugin using NPM INSTALL, check the inline-comments in the .js file!
* A sample app is also provided in here (*.qvf) 

