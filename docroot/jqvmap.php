<html>
<head>
    <title>JQVMap - World Map</title>
    <link href="lib/jqvmap/dist/jqvmap.css" media="screen" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/styles.css" />

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="lib/jqvmap/dist/jquery.vmap.js"></script>
    <script type="text/javascript" src="lib/jqvmap/dist/maps/jquery.vmap.world.js" charset="utf-8"></script>

    <script src="assets/data/jvectormap-world-mill.js"></script>

    <script type="text/javascript">
        jQuery(document).ready(function() {
            jQuery('#map').vectorMap({
                map: 'world_mill',
                borderColor: '#818181',
                borderOpacity: 1,
                borderWidth: 0.1,
                color: '#f4f3f0',
                enableZoom: true,
                hoverColor: '#c9dfaf',
                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors: ['#b6d6ff', '#005ace'],
                selectedColor: '#c9dfaf',
                selectedRegions: null,
                showTooltip: true,
                onRegionClick: function(element, code, region)
                {
//                    var message = 'You clicked "'
//                        + region
//                        + '" which has the code: '
//                        + code.toUpperCase();
//
//                    alert(message);
                }
            });
        });
    </script>
</head>
<body>
<div id="map" class="map"></div>
</body>
</html>