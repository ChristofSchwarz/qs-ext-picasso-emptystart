define([
// Picasso and Picasso Q plugin which is preinstalled with Qlik Sense (no download needed)
	'/resources/assets/external/picasso/dist/picasso.min.js', 
	'/resources/assets/external/picasso/plugins/q/dist/picasso-q.min.js' 
	
//	Picasso and Picasso Q plugin when you used NPM package manager from your extension root folder
//	'./node_modules/picasso.js/dist/picasso.min', // to get this run "npm install picasso.js"
//	'./node_modules/picasso-plugin-q/dist/picasso-q.min' // to get this run "npm install picasso-plugin-q"
]
,function(picasso, picassoQ ) 
{
  picasso.use(picassoQ); // register q plugin
 
	return {
		definition: { // property panel definition
		  type: 'items',
		  component: 'accordion',
		  items: {
			dimensions: {
				uses: "dimensions",
				min: 1,
				max: 2
			},
			measures: {
				uses: "measures",
				min: 2,
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
			  { qWidth: 3, qHeight: 1000 },
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
/////////////////////////////////////////////////////////////////////

// copy-paste the settings from your picassojs.com experiment

/////////////////////////////////////////////////////////////////////
				}
		    })
		}
	};

});

