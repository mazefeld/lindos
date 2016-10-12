<html>
<head>
    <title>JQVMap - World Map</title>
    <!-- Styles -->
    <style>
        #chartdiv {
            width: 100%;
            height: 500px;
        }
    </style>


    <!-- Resources -->
    <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
    <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>
    <script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js"></script>
    <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
    <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
    <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all"/>

    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

    <!-- Chart code -->
    <script>
        var map = AmCharts.makeChart("chartdiv", {

            "type": "map",
            "theme": "light",
            "projection": "miller",

            "dataProvider": {
                "map": "worldHigh",
                "getAreasFromMap": true
            },
            "areasSettings": {
                "autoZoom": true,
                "selectedColor": "#CC0000"
            },
            "smallMap": {}
        });
    </script>

    <!-- HTML -->
    <div id="chartdiv" class="map"></div>
</body>
</html>