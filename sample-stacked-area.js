define([
// Picasso and Picasso Q plugin from the preinstalled Qlik Sense location (usually way older 
// than the current picassojs.com (this works out of the box, no NPM INSTALL needed, but
// no guarantee that below asset locations will remain the same in later Sense versions. Use  
// this only as a first quick try or if you cannot use NPM INSTALL as instructed next ...
	
	'/resources/assets/external/picasso/dist/picasso.min.js', 
	'/resources/assets/external/picasso/plugins/q/dist/picasso-q.min.js' 
	
// Picasso and Picasso Q plugin after you used NPM package manager from within your extension  
// root folder. If you did so, the below relative subfolders with *.min.js files inside
// should have been created.
	
//	'./node_modules/picasso.js/dist/picasso.min', // to get this run "npm install picasso.js"
//	'./node_modules/picasso-plugin-q/dist/picasso-q.min' // to get this run "npm install picasso-plugin-q"
]
,function(picasso, picassoQ) 
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
				min: 2,  // adjust this as needed
				max: 2
			},
			measures: {
				uses: "measures",
				min: 1,  // adjust this as needed
				max: 1
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
				
// I used the room between rows ▼ ▼ ▼ and ▲ ▲ ▲ to copy/paste 
// the settings object from 
// https://beta.observablehq.com/@miralemd/picasso-js-stacked-area-chart
// Then I searched and replaced the labels of the Test Data array as
// follows:
// Month --> qDimensionInfo/0
// Year --> qDimensionInfo/1
// Sales --> qMeasureInfo/0

// ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ 
    collections: [{
      key: 'stacked',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            line: { field: 'qDimensionInfo/1' },
            end: { field: 'qMeasureInfo/0' }
          }
        },
        stack: {
        	stackKey: d => d.value,
          	value: d => d.end.value
        }
      }
    }],
    scales: {
      y: {
        data: {
          collection: {
            key: 'stacked'
          }
        },
        invert: true,
        expand: 0.2,
        min: 0
      },
      t: { data: { extract: { field: 'qDimensionInfo/0' } } },
      color: { data: { extract: { field: 'qDimensionInfo/1' } }, type: 'color' }
    },
    components: [{
      type: 'axis',
      dock: 'left',
      scale: 'y'
    },{
      type: 'axis',
      dock: 'bottom',
      scale: 't'
    }, {
      key: 'lines',
      type: 'line',
      data: {
        collection: 'stacked'
      },
      settings: {
        coordinates: {
          major: { scale: 't' },
          minor0: { scale: 'y', ref: 'start' },
          minor: { scale: 'y', ref: 'end' },
          layerId: { ref: 'line' }
        },
        layers: {
          curve: 'monotone',
          line: {
            show: false
          },
          area: {
            fill: { scale: 'color', ref: 'line' }
          }
        }
      }
    }]		
// ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 

				}
		    })
		}
	};

});
