var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_FutureSidewalks_3 = new ol.format.GeoJSON();
var features_FutureSidewalks_3 = format_FutureSidewalks_3.readFeatures(json_FutureSidewalks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureSidewalks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureSidewalks_3.addFeatures(features_FutureSidewalks_3);
var lyr_FutureSidewalks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureSidewalks_3, 
                style: style_FutureSidewalks_3,
                popuplayertitle: 'Future Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/FutureSidewalks_3.png" /> Future Sidewalks'
            });
var format_PrioritySidewalks_4 = new ol.format.GeoJSON();
var features_PrioritySidewalks_4 = format_PrioritySidewalks_4.readFeatures(json_PrioritySidewalks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrioritySidewalks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrioritySidewalks_4.addFeatures(features_PrioritySidewalks_4);
var lyr_PrioritySidewalks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrioritySidewalks_4, 
                style: style_PrioritySidewalks_4,
                popuplayertitle: 'Priority Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/PrioritySidewalks_4.png" /> Priority Sidewalks'
            });
var format_DoneSidewalks_5 = new ol.format.GeoJSON();
var features_DoneSidewalks_5 = format_DoneSidewalks_5.readFeatures(json_DoneSidewalks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DoneSidewalks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DoneSidewalks_5.addFeatures(features_DoneSidewalks_5);
var lyr_DoneSidewalks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DoneSidewalks_5, 
                style: style_DoneSidewalks_5,
                popuplayertitle: 'Done Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/DoneSidewalks_5.png" /> Done Sidewalks'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_FutureSidewalks_3.setVisible(true);lyr_PrioritySidewalks_4.setVisible(true);lyr_DoneSidewalks_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_GoogleRoad_2,lyr_FutureSidewalks_3,lyr_PrioritySidewalks_4,lyr_DoneSidewalks_5];
lyr_FutureSidewalks_3.set('fieldAliases', {});
lyr_PrioritySidewalks_4.set('fieldAliases', {});
lyr_DoneSidewalks_5.set('fieldAliases', {});
lyr_FutureSidewalks_3.set('fieldImages', {});
lyr_PrioritySidewalks_4.set('fieldImages', {});
lyr_DoneSidewalks_5.set('fieldImages', {});
lyr_FutureSidewalks_3.set('fieldLabels', {});
lyr_PrioritySidewalks_4.set('fieldLabels', {});
lyr_DoneSidewalks_5.set('fieldLabels', {});
lyr_DoneSidewalks_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});