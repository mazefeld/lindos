$(function () {
  var plants = [
    {name: 'Deutschland', coords: [50.0091294, 9.0371812], status: 'closed', offsets: [0, 2]},
    {name: 'Karibik', coords: [21.469114, -78.656894], status: 'closed', offsets: [0, 2]},
  ];

  var map = new jvm.Map({
    container: $('#map'),
    map: 'world_mill',
    markers: plants.map(function (h) {
      return {name: h.name, latLng: h.coords}
    }),
    zoomMax: 20,
    focusOn: {
            lat: plants[0].coords[0],
            lng: plants[0].coords[1],
//      x: 0.5,
//      y: 0.5,
      scale: 10,
      animate: false
    },

    series: {
      markers: [{
        attribute: 'image',
        scale: {
          'closed': '/img/marker-m.png',
        },
        values: plants.reduce(function (p, c, i) {
          p[i] = c.status;
          return p
        }, {}),
      }]
    },
    onViewportChange: function (e, label, x, y, z) {
//      console.log('Scale:', label ,x ,y);
    }
  });

//    setTimeout(function() {
//        map.setFocus(
//            {
//                lat: plants[1].coords[0],
//                lng: plants[1].coords[1],
//                scale: 5,
//                animate: true
//            }
//        );
//    }, 5000);

  setTimeout(function () {
    console.log(map);

    map.moveTo({
        dest: [plants[1].coords[0], plants[1].coords[1]]
      });
  }, 1000)
});