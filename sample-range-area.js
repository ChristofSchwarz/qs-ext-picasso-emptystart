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
				
// I used the room between rows ▼ ▼ ▼ and ▲ ▲ ▲ to copy/paste 
// the settings object from 
// https://beta.observablehq.com/@miralemd/picasso-js-range-area-chart
// Then I searched and replaced the labels of the Test Data array as
// follows:
// Date --> qDimensionInfo/0
// Low --> qMeasureInfo/0
// High --> qMeasureInfo/1

// ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ 

    scales: {
      y: {
        data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1'] },
        invert: true,
        expand: 0.4
      },
      t: { data: { extract: { field: 'qDimensionInfo/0' } } }
    },
    components: [{
      type: 'grid-line',
      x: 't'
    },{
      type: 'axis',
      dock: 'left',
      scale: 'y'
    },{
      type: 'axis',
      dock: 'bottom',
      scale: 't',
      formatter: {
        type: 'd3-time',
        format: '%Y-%m'
      }
    }, {
      key: 'lines',
      type: 'line',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            low: { field: 'qMeasureInfo/0' },
            high: { field: 'qMeasureInfo/1' }
          }
        }
      },
      settings: {
        coordinates: {
          major: { scale: 't' },
          minor0: { scale: 'y', ref: 'low' },
          minor: { scale: 'y', ref: 'high' }
        },
        layers: {
          curve: 'monotone',
          line: {
            show: false
          },
          area: {}
        }
      }
    }]

// ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ 

				}
		    })
		}
	};

} );
