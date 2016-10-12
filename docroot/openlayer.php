<!doctype html>
<html>
<head>
    <title>Vector Examples</title>
    <link rel="stylesheet" href="lib/openlayers3/build/ol.css" type="text/css" />
    <link rel="stylesheet" href="../assets/css/samples.css" type="text/css" />
    <link rel="stylesheet" href="css/styles.css" />
    <div id="map" class="map"></div>
</head>
<body>
<div id="map" class="map"></div>
<script src="lib/openlayers3/build/ol.js"></script>
<script>
    // create a vector source that loads a GeoJSON file
    var vectorSource = new ol.source.GeoJSON({
        projection: 'EPSG:3857',
        url: '../assets/data/countries.geojson'
    });

    // a vector layer to render the source
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    var center = ol.proj.transform([0, 0], 'EPSG:4326', 'EPSG:3857');

    var view = new ol.View({
        center: center,
        zoom: 5
    });

    // the vector layer gets added like a raster layer
    var map = new ol.Map({
        target: 'map',
        layers: [vectorLayer],
        view: view
    });
</script>
</body>
</html>