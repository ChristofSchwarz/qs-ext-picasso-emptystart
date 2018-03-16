define([
// Picasso and Picasso Q plugin from the preinstalled Qlik Sense location (usually way older 
// than the current picassojs.com (however: no NPM download needed)
// No guarantee that below asset locations will remain with newer Sense versions. Use this 
// only as a first quick try or if you cannot use NPM INSTALL as instructed next ...
	
	'/resources/assets/external/picasso/dist/picasso.min.js', 
	'/resources/assets/external/picasso/plugins/q/dist/picasso-q.min.js' 
	
// Picasso and Picasso Q plugin after you used NPM package manager from your extension root folder
// then the below relative subfolders with *.min.js files should have been created.
	
//	'./node_modules/picasso.js/dist/picasso.min', // to get this run "npm install picasso.js"
//	'./node_modules/picasso-plugin-q/dist/picasso-q.min' // to get this run "npm install picasso-plugin-q"
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
				uses: "dimensions",
				min: 1,  // adjust this as needed
				max: 2
			},
			measures: {
				uses: "measures",
				min: 2,  // adjust this as needed
				max: 2
			},
			sorting: {
				uses: "sorting"
			},	  
			data: {
			  uses: 'data'
			},
			settings: {
			  uses: 'settings'
			},
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

// ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 

				}
		    })
		}
	};

});

