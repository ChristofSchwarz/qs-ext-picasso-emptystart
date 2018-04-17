define([
/* 
Picasso and Picasso Q plugin in this extension are likely outdated already. To
get the latest version after unzipping the extension, run the below commands from the
relative extension root folder in a Command Prompt:
npm install picasso.js
npm install picasso-plugin-q
*/
	'./node_modules/picasso.js/dist/picasso', 
	'./node_modules/picasso-plugin-q/dist/picasso-q' 
]
,function(picasso, picassoQ ) 
{
  picasso.use(picassoQ); // register q plugin
 
// Use room between the comment rows ▼ ▼ ▼ and ▲ ▲ ▲ to copy/paste 
// possible custom functions (e.g. "box" or "label" or similar).
// While they were defined like 'box = function({ .... })' on 
// observablehq.com, you need to put a "var" in front after pasting 
// them in here such as 'var box = function ({ ... })'

// ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ 

// ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 

	return {
		definition: { // property panel definition
			type: 'items',
			component: 'accordion',
			items: {
				dimensions: {
					uses: "dimensions"
					,min: 0  // adjust this as needed
					//,max: 2
				},
				measures: {
					uses: "measures"
					,min: 0  // adjust this as needed
					//,max: 2
				},
				sorting: {
					uses: "sorting"
				},	  
				addons: {
					uses: "addons"
				},
				appearance: {
					uses: "settings",
					items: {
						section1: {
							type: "string",
							ref: "customprop1",
							label: "Custom Settings",
							expression: "optional",
							defaultValue: "Hello PicassoJS"
						}
					}
				},
				about: {
					component: "items",
					label: "About",
					type: "items",
					items: {
						authorText: {
							label: "by Christof Schwarz",
							component: "text"
						}
					}
				}
			},
		},
		initialProperties: {
			qHyperCubeDef: { // basic hypercube setup
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [
				  { qWidth: 3, qHeight: 1000 },  // adjust as needed
				],
				qSuppressZero: false,
				qSuppressMissing: true,
			}
		},
		paint: function ($element, layout) {
			if (!this.chart) { // instantiate picasso chart on first time render
				this.chart = picasso.chart({
				  element: $element[0],
				  data: []
				})
			}
			
			this.chart.update({
				data: [{ // pass in hypercube
				  type: 'q',
				  key: 'qHyperCube',
				  data: layout.qHyperCube
				}],
				settings: {
				
// Use room between the comment rows ▼ ▼ ▼ and ▲ ▲ ▲ to copy/paste 
// your Picasso settings. Make sure you copy only the settings part
// without the opening and closing {} curly brackets.
// Then search for the labels of the Test Data array used on
// observablehq.com and replace it with the qHypercube syntax e.g.
// Date --> qDimensionInfo/0
// Low --> qMeasureInfo/0
// High --> qMeasureInfo/1

// ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ 
	components: [{ type: 'text', text: layout.customprop1}]
// ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 

				}
		    })
		}
	};

});

