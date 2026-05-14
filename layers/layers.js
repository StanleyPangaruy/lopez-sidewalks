var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTraffic_2 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_5 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_FutureSidewalks_6 = new ol.format.GeoJSON();
var features_FutureSidewalks_6 = format_FutureSidewalks_6.readFeatures(json_FutureSidewalks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureSidewalks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureSidewalks_6.addFeatures(features_FutureSidewalks_6);
var lyr_FutureSidewalks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureSidewalks_6, 
                style: style_FutureSidewalks_6,
                popuplayertitle: 'Future Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/FutureSidewalks_6.png" /> Future Sidewalks'
            });
var format_PrioritySidewalks_7 = new ol.format.GeoJSON();
var features_PrioritySidewalks_7 = format_PrioritySidewalks_7.readFeatures(json_PrioritySidewalks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrioritySidewalks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrioritySidewalks_7.addFeatures(features_PrioritySidewalks_7);
var lyr_PrioritySidewalks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrioritySidewalks_7, 
                style: style_PrioritySidewalks_7,
                popuplayertitle: 'Priority Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/PrioritySidewalks_7.png" /> Priority Sidewalks'
            });
var format_DoneSidewalks_8 = new ol.format.GeoJSON();
var features_DoneSidewalks_8 = format_DoneSidewalks_8.readFeatures(json_DoneSidewalks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DoneSidewalks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DoneSidewalks_8.addFeatures(features_DoneSidewalks_8);
var lyr_DoneSidewalks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DoneSidewalks_8, 
                style: style_DoneSidewalks_8,
                popuplayertitle: 'Done Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/DoneSidewalks_8.png" /> Done Sidewalks'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleTraffic_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_GoogleLabels_4.setVisible(true);lyr_GoogleRoad_5.setVisible(true);lyr_FutureSidewalks_6.setVisible(true);lyr_PrioritySidewalks_7.setVisible(true);lyr_DoneSidewalks_8.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleHybrid_1,lyr_GoogleTraffic_2,lyr_GoogleSatellite_3,lyr_GoogleLabels_4,lyr_GoogleRoad_5,lyr_FutureSidewalks_6,lyr_PrioritySidewalks_7,lyr_DoneSidewalks_8];
lyr_FutureSidewalks_6.set('fieldAliases', {});
lyr_PrioritySidewalks_7.set('fieldAliases', {});
lyr_DoneSidewalks_8.set('fieldAliases', {});
lyr_FutureSidewalks_6.set('fieldImages', {});
lyr_PrioritySidewalks_7.set('fieldImages', {});
lyr_DoneSidewalks_8.set('fieldImages', {});
lyr_FutureSidewalks_6.set('fieldLabels', {});
lyr_PrioritySidewalks_7.set('fieldLabels', {});
lyr_DoneSidewalks_8.set('fieldLabels', {});
lyr_DoneSidewalks_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});