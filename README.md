# qs-ext-picasso-emptystart
Here you can find JS code to be used as a starting point for a Qlik Sense *Picasso extension*, an extension which makes use of the open-sourced rendering engine picassojs.com by Qlik.

When you install this example and use it, it will show "Hello PicassoJS" as a static text only. That is, because it is meant to be replaced with some more exciting examples from picassojs.com or your own chart definition. 

1) Download this extension package as a ZIP and extract it to your Qlik Sense Desktop extension folder or, if on a Sense Server, import it with the QMC
2) Go to the address http://localhost:4848/dev-hub , right-click on the Extension "newpicasso", choose "Duplicate" and give it a new name e.g. "mypicasso1"
* Note that there are also some examples copied and opened in the Extenions editor, like 'sample-stack-area.js' and 'sample-range-area.js' which you can copy/place over your "mypicasso1.js" file to get a working chart instantly.
3) To start your own chart, just remove the "Hello PicassoJS" line between the down triangles ▼▼▼ and up triangles ▲▲▲ where it reads "components: [...]
4) Best place to try out the settings in a what you see it what you get manner is the "Examples" section on https://picassojs.com This will take you to  https://beta.observablehq.com (the playground page behind) 
5) When done, copy/paste your Json definitions (the settings-object and possible custom functions) into your mypicasso1.js file from this package where the inline-comments tell you. Adjust the hypercube size, number of measures and dimensions accordingly.

Screenshots:
![alt text](https://raw.githubusercontent.com/ChristofSchwarz/qs-ext-picasso-emptystart/master/Screenshot.png "Screenshot")

### Note on NPM INSTALL
This code will run out of the box and doesn't force you to install the latest picassojs javascript packages. This is because it reuses the preinstalled picasso.min.js and picasso-q.min.js which ships with the Sense installtion (both Server and Desktop). However it is *strongly recommended* to download Picasso.js and Picasso-Q-Plugin using NPM INSTALL (part of NodeJS installation). This is because the internally shipped picasso files may relocate with newer versions and they are typically months older than the current available one.

* Go to the relative root folder on Qlik Sense Desktop in a Command Prompt. In the above example the extension is here: "C:\Users\<yourid>\Documents\Qlik\Sense\Extensions\mypicasso1"
* type "npm install picassojs.com"
* type "npm install picasso-plugin-q"
* you will get a new subfolder "node_modules" with more subfolders inside

### Resources:
* To learn about PicassoJS see https://picassojs.com and https://github.com/qlik-oss/picasso.js
* A sample app is also provided in here (*.qvf) which has sample data for the sample-stack-area chart and sample-range-area chart like in the screenshot above.

