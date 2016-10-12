$(function(){
    var plants = [
        {name: 'Deutschland', coords: [50.0091294, 9.0371812], status: 'closed', offsets: [0, 2]},
        {name: 'Karibik', coords: [21.469114, -78.656894], status: 'closed', offsets: [0, 2]},
    ];

    var map = new jvm.Map({
        container: $('#map'),
        map: 'world_mill',
        markers: plants.map(function(h){ return {name: h.name, latLng: h.coords} }),
        zoomMax: 20,
        focusOn:     {
            lat: plants[0].coords[0],
            lng: plants[0].coords[1],
            x: 0,
            y: 0,
            scale: 2,
            animate: true
        },
        regionStyle: {

            initial: {
                fill: '#ffffff',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 1,
                "stroke-opacity":0.5
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {
            }
        },

        // labels: {
        //     markers: {
        //         render: function(index){
        //             return plants[index].name;
        //         },
        //         offsets: function(index){
        //             var offset = plants[index]['offsets'] || [0, 0];
        //
        //             return [offset[0] - 7, offset[1] + 3];
        //         }
        //     }
        // },
        series: {
            markers: [{
                attribute: 'image',
                scale: {
                    'closed': '/img/marker-s.png',
                    activeUntil2018: '/img/marker-s.png',
                    activeUntil2022: '/img/marker-s.png'
                },
//                    values: {
//                        '0': 'closed',
//                        '1': 'closed'
//                    }
                values: plants.reduce(function(p, c, i){ p[i] = c.status; return p }, {}),
            }]
        }
    });

//        console.log('lat', plants[0].coords[0]);



    setTimeout(function() {
//            map.removeAllMarkers();

        map.setFocus(
            {
                lat: plants[0].coords[0],
                lng: plants[0].coords[1],
                x: 0,
                y: 0,
                scale: 4,
                animate: true
            }
        );
    }, 1000)

    setTimeout(function() {
//            map.removeAllMarkers();

        map.setFocus(
            {
                lat: plants[1].coords[0],
                lng: plants[1].coords[1],
                x: 0,
                y: 0,
                scale: 5,
                animate: true
            }
        );
    }, 2000)
});