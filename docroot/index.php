<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="http://openlayers.org/en/v3.18.2/css/ol.css" type="text/css">
    <link rel="stylesheet" href="css/styles.css" />
    <script src="http://openlayers.org/en/v3.18.2/build/ol.js" type="text/javascript"></script>
    <title>OpenLayers 3 example</title>
</head>
<body>
<div id="map" class="map"></div>
<script type="text/javascript">
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 4
        })
    });
</script>
</body>
</html>