// les scripts javascript doivent être intégrés dans la fonction suivante,
// qui s'assure que les DOM ont ét chargés
// $().ready(function() {
//     // ici le code javascript
// });



$().ready(function() {
    var data = [
    {
      type: "scatterpolar",
      name: "marathonien",
        r: [2, 3, 3, 3, 5, 5],
        theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
      fill: "toself"
    },
    {
      type: "scatterpolar",
      name: "sprinteur",
        r: [5, 4, 3, 5, 3, 5],
        theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
      fill: "toself"
    }
  ]

    var layout = {
    polar: {
      radialaxis: {
        angle: 0 // angle de l'axe des rayon 
      },
      angularaxis: {
        direction: "clockwise",
        period: 6 // 
      }
    },
    }

    Plotly.newPlot('polarCOT', data, layout)
});



$().ready(function() {
    var data = [
        {
            type: "scatterpolar",
            name: "sportif",
            r: [4, 4, 3, 4, 5, 5],
            theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
            fill: "toself"
        },
        {
            type: "scatterpolar",
            name: "sédentaire",
            r: [3, 3, 3, 3, 3, 4],
            theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
            fill: "toself"
        },
        {
            type: "scatterpolar",
            name: "obèse",
            r: [3, 1, 3, 5, 4, 1],
            theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
            fill: "toself"
        }
    ]

    var layout = {
        polar: {
            radialaxis: {
                angle: 0 // angle de l'axe radial
            },
            angularaxis: {
                direction: "clockwise",
                period: 6 // 
            }
        }
    }

    Plotly.newPlot('polarCOT2', data, layout)
});



$().ready(function() {
    var data = [
        {
            type: "scatterpolar",
            name: "sportif",
            r: [4, 4, 3, 4, 5, 5],
            theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
            fill: "toself"
        },
        {
            type: "scatterpolar",
            name: "sédentaire",
            r: [3, 3, 3, 3, 3, 4],
            theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
            fill: "toself"
        },
        {
            type: "scatterpolar",
            name: "obèse",
            r: [3, 1, 3, 5, 4, 1],
            theta: ["$$F_{iso}$$", "$$I_T$$", "$$a_0$$", "$$B$$", "$$R_{fb}$$", "$$COT^*$$"],
            fill: "toself"
        }
    ]

    var layout = {
        polar: {
            radialaxis: {
                angle: 0 // angle de l'axe radial
            },
            angularaxis: {
                direction: "clockwise",
                period: 6 // 
            }
        },
        sliders: [{
            pad: {
                t: 30
            },
            currentvalue: {
                xanchor: 'right',
                prefix: 'color: ',
                font: {
                    color: '#888',
                    size: 20
                }
            },
            steps: [{
                label: 'sportif',
                name: 'sportif',
                method: 'restyle',
                args: ['line.color', 'red']
            }, {
                label: 'sédentaire',
                method: 'restyle',
                args: ['line.color', 'green']
            }, {
                label: 'obèse',
                method: 'restyle',
                args: ['line.color', 'blue']
            }]
        }]
    }

    Plotly.newPlot('polarCOTslider', data, layout)
});



$().ready(function() {
    $("#text").html("Text added by jQuery code.");
});




$().ready(function() {
    TESTER = document.getElementById('tester');
    Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } }, {showSendToCloud:true} );

    /* Current Plotly.js version */
    console.log( Plotly.BUILD );
});




$().ready(function() {
   var data = [
    {
      type: "scatterpolar",
      name: "angular categories",
      r: [5, 4, 2, 4, 5],
      theta: ["a", "b", "c", "d", "a"],
      fill: "toself"
    },
    {
      type: "scatterpolar",
      name: "radial categories",
      r: ["a", "b", "c", "d", "b", "f", "a"],
      theta: [1, 4, 2, 1.5, 1.5, 6, 5],
      thetaunit: "radians",
      fill: "toself",
      subplot: "polar2"
    },
    {
      type: "scatterpolar",
      name: "angular categories (w/ categoryarray)",
      r: [5, 4, 2, 4, 5],
      theta: ["a", "b", "c", "d", "a"],
      fill: "toself",
      subplot: "polar3"
    },
    {
      type: "scatterpolar",
      name: "radial categories (w/ category descending)",
      r: ["a", "b", "c", "d", "b", "f", "a", "a"],
      theta: [45, 90, 180, 200, 300, 15, 20, 45],
      fill: "toself",
      subplot: "polar4"
    },
    {
      type: "scatterpolar",
      name: "angular categories (w/ extra category)",
      r: [5, 4, 2, 4, 5, 5],
      theta: ["b", "c", "d", "e", "a", "b"],
      fill: "toself"
    }
  ]

var layout = {
    polar: {
      domain: {
        x: [0, 0.46],
        y: [0.56, 1]
      },
      radialaxis: {
        angle: 45
      },
      angularaxis: {
        direction: "clockwise",
        period: 6
      }
    },
    polar2: {
      domain: {
        x: [0, 0.46],
        y: [0, 0.44]
      },
      radialaxis: {
        angle: 180,
        tickangle: -180
      }
    },
    polar3: {
      domain: {
        x: [0.54, 1],
        y: [0.56, 1]
      },
      sector: [150, 400],
      radialaxis: {
        angle: -45
      },
      angularaxis: {
        categoryarray: ["d", "a", "c", "b"]
      }
    },
    polar4: {
      domain: {
        x: [0.54, 1],
        y: [0, 0.44]
      },
      radialaxis: {
        categoryorder: "category descending"
      },
      angularaxis: {
        thetaunit: "radians",
        dtick: 0.3141592653589793
      }
    }
  }

Plotly.newPlot('polardiv', data, layout)
});








$().ready(function() {
    Plotly.plot('linearglideranimation', {
 data: [{
   x: [1, 2, 3],
   y: [2, 1, 3],
   line: {
     color: 'red',
     simplify: false,
   }
 }],
 layout: {
   sliders: [{
     pad: {t: 30},
     x: 0.05,
     len: 0.95,
     currentvalue: {
       xanchor: 'right',
       prefix: 'color: ',
       font: {
         color: '#888',
         size: 20
       }
     },
     transition: {duration: 500},
     // By default, animate commands are bound to the most recently animated frame:
     steps: [{
       label: 'red',
       method: 'animate',
       args: [['red'], {
         mode: 'immediate',
         frame: {redraw: false, duration: 500},
         transition: {duration: 500}
       }]
     }, {
       label: 'green',
       method: 'animate',
       args: [['green'], {
         mode: 'immediate',
         frame: {redraw: false, duration: 500},
         transition: {duration: 500}
       }]
     }, {
       label: 'blue',
       method: 'animate',
       args: [['blue'], {
         mode: 'immediate',
         frame: {redraw: false, duration: 500},
         transition: {duration: 500}
       }]
     }]
   }],
   updatemenus: [{
     type: 'buttons',
     showactive: false,
     x: 0.05,
     y: 0,
     xanchor: 'right',
     yanchor: 'top',
     direction: 'left',
     pad: {t: 60, r: 20},
     buttons: [{
       label: 'Play',
       method: 'animate',
       args: [null, {
         fromcurrent: true,
         frame: {redraw: false, duration: 1000},
         transition: {duration: 500}
       }]
     }, {
       label: 'Pause',
       method: 'animate',
       args: [[null], {
         mode: 'immediate',
         frame: {redraw: false, duration: 0}
       }]
     }]
   }]
 },
 // The slider itself does not contain any notion of timing, so animating a slider
 // must be accomplished through a sequence of frames. Here we'll change the color
 // and the data of a single trace:
 frames: [{
   name: 'red',
   data: [{
     y: [2, 1, 3],
     'line.color': 'red'
   }]
 }, {
   name: 'green',
   data: [{
     y: [3, 2, 1],
     'line.color': 'green'}]
 }, {
   name: 'blue',
   data: [{
     y: [1, 3, 2],
     'line.color': 'blue'}]
 }]
}, {showSendToCloud: true});

});







$().ready(function() {
    Plotly.plot('linearglider', [{
        x: [1, 2, 3],
        y: [2, 1, 3]
    }], {
        sliders: [{
            pad: {
                t: 30
            },
            currentvalue: {
                xanchor: 'right',
                prefix: 'color: ',
                font: {
                    color: '#888',
                    size: 20
                }
            },
            steps: [{
                label: 'red',
                method: 'update',
                args: ['line.color', 'red'],
            }, {
                label: 'green',
                method: 'restyle',
                args: ['line.color', 'green']
            }, {
                label: 'blue',
                method: 'restyle',
                args: ['line.color', 'blue']
            }]
        }]
    }, {showSendToCloud: true});
});
