var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_FutureSidewalks_1 = new ol.format.GeoJSON();
var features_FutureSidewalks_1 = format_FutureSidewalks_1.readFeatures(json_FutureSidewalks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureSidewalks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureSidewalks_1.addFeatures(features_FutureSidewalks_1);
var lyr_FutureSidewalks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureSidewalks_1, 
                style: style_FutureSidewalks_1,
                popuplayertitle: 'Future Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/FutureSidewalks_1.png" /> Future Sidewalks'
            });
var format_PrioritySidewalks_2 = new ol.format.GeoJSON();
var features_PrioritySidewalks_2 = format_PrioritySidewalks_2.readFeatures(json_PrioritySidewalks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrioritySidewalks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrioritySidewalks_2.addFeatures(features_PrioritySidewalks_2);
var lyr_PrioritySidewalks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrioritySidewalks_2, 
                style: style_PrioritySidewalks_2,
                popuplayertitle: 'Priority Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/PrioritySidewalks_2.png" /> Priority Sidewalks'
            });
var format_DoneSidewalks_3 = new ol.format.GeoJSON();
var features_DoneSidewalks_3 = format_DoneSidewalks_3.readFeatures(json_DoneSidewalks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DoneSidewalks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DoneSidewalks_3.addFeatures(features_DoneSidewalks_3);
var lyr_DoneSidewalks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DoneSidewalks_3, 
                style: style_DoneSidewalks_3,
                popuplayertitle: 'Done Sidewalks',
                interactive: true,
                title: '<img src="styles/legend/DoneSidewalks_3.png" /> Done Sidewalks'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_FutureSidewalks_1.setVisible(true);lyr_PrioritySidewalks_2.setVisible(true);lyr_DoneSidewalks_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_FutureSidewalks_1,lyr_PrioritySidewalks_2,lyr_DoneSidewalks_3];
lyr_FutureSidewalks_1.set('fieldAliases', {});
lyr_PrioritySidewalks_2.set('fieldAliases', {});
lyr_DoneSidewalks_3.set('fieldAliases', {});
lyr_FutureSidewalks_1.set('fieldImages', {});
lyr_PrioritySidewalks_2.set('fieldImages', {});
lyr_DoneSidewalks_3.set('fieldImages', {});
lyr_FutureSidewalks_1.set('fieldLabels', {});
lyr_PrioritySidewalks_2.set('fieldLabels', {});
lyr_DoneSidewalks_3.set('fieldLabels', {});
lyr_DoneSidewalks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});