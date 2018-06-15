# Cookbook to Picasso Qlik Sense Extensions
Here you can find JS code to be used as a starting point for a Qlik Sense *Picasso extension*, an extension which makes use of the open-sourced rendering engine picassojs.com by Qlik.

When you install this example and use it, it will show "Hello PicassoJS" as a static text only. That is, because it is meant to be replaced with some more exciting examples from picassojs.com or your own chart definition. 

1) Download this extension package as a ZIP and extract it to your Qlik Sense Desktop extension folder or, if on a Sense Server, import it with the QMC
2) Go to the address http://localhost:4848/dev-hub , right-click on the Extension "newpicasso", choose "Duplicate" and give it a new name e.g. "mypicasso1"
* Note that there are also some examples copied and opened in the Extenions editor, like 'sample-stack-area.js' and 'sample-range-area.js' which you can copy/place over your "mypicasso1.js" file to get a working chart instantly.
* here is my video Part 1 where I explain the steps so far https://youtu.be/KRADE-GXCf4
3) To start your own chart, just remove the "Hello PicassoJS" line between the down triangles ▼▼▼ and up triangles ▲▲▲ where it reads "components: [...]
4) Best place to try out the settings in a what you see it what you get manner is the "Examples" section on https://picassojs.com This will take you to  https://beta.observablehq.com (the playground page behind) 
5) When done, copy/paste your Json definitions (the settings-object and possible custom functions) into your mypicasso1.js file from this package where the inline-comments tell you. Adjust the hypercube size, number of measures and dimensions accordingly.
* here is my video Part 2, where I explain the process https://youtu.be/ZYjmO-oAFyM

Screenshots:
![alt text](https://raw.githubusercontent.com/ChristofSchwarz/qs-ext-picasso-emptystart/master/Screenshot.png?4 "Screenshot")

### Note on NPM INSTALL (Updated for April-2018 release)
This code will run out of the box as I bundled a version of both, picasso.js and picasso-plugin-q into this extension (subfolder node_modules). I do no longer load the interal versions of picasso.js preinstalled with Qlik Sense and you don't have to uncomment /comment rows in the extension. I recommend to download the latest versions of Picasso.js and Picasso-Q-Plugin using NPM INSTALL (part of NodeJS installation). 

* Go to the relative root folder on Qlik Sense Desktop in a Command Prompt. In the above example the extension is here: "C:\Users\yourid\Documents\Qlik\Sense\Extensions\mypicasso1"
* type "npm install picasso.js"
* type "npm install picasso-plugin-q"
* you will get updated versions below subfolder "node_modules" and more version informations.

### Resources:
* To learn about PicassoJS see https://picassojs.com and https://github.com/qlik-oss/picasso.js
* A sample app is also provided in here (*.qvf) which has sample data for the sample-stack-area chart and sample-range-area chart like in the screenshot above.

