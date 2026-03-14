ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32637").setExtent([6904.581903, 130539.917693, 703328.080093, 501926.168861]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MarsabitBoundary_2 = new ol.format.GeoJSON();
var features_MarsabitBoundary_2 = format_MarsabitBoundary_2.readFeatures(json_MarsabitBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_MarsabitBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarsabitBoundary_2.addFeatures(features_MarsabitBoundary_2);
var lyr_MarsabitBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarsabitBoundary_2, 
                style: style_MarsabitBoundary_2,
                popuplayertitle: 'Marsabit Boundary',
                interactive: true,
                title: '<img src="styles/legend/MarsabitBoundary_2.png" /> Marsabit Boundary'
            });
var format_wetlands_3 = new ol.format.GeoJSON();
var features_wetlands_3 = format_wetlands_3.readFeatures(json_wetlands_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_wetlands_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wetlands_3.addFeatures(features_wetlands_3);
var lyr_wetlands_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wetlands_3, 
                style: style_wetlands_3,
                popuplayertitle: 'wetlands',
                interactive: true,
                title: '<img src="styles/legend/wetlands_3.png" /> wetlands'
            });
var format_ProtectedAreas_4 = new ol.format.GeoJSON();
var features_ProtectedAreas_4 = format_ProtectedAreas_4.readFeatures(json_ProtectedAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_ProtectedAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProtectedAreas_4.addFeatures(features_ProtectedAreas_4);
var lyr_ProtectedAreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProtectedAreas_4, 
                style: style_ProtectedAreas_4,
                popuplayertitle: ' Protected Areas',
                interactive: true,
                title: '<img src="styles/legend/ProtectedAreas_4.png" />  Protected Areas'
            });
var format_forests_5 = new ol.format.GeoJSON();
var features_forests_5 = format_forests_5.readFeatures(json_forests_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_forests_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_forests_5.addFeatures(features_forests_5);
var lyr_forests_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_forests_5, 
                style: style_forests_5,
                popuplayertitle: 'forests',
                interactive: true,
                title: '<img src="styles/legend/forests_5.png" /> forests'
            });
var format_10kmBufferzones_6 = new ol.format.GeoJSON();
var features_10kmBufferzones_6 = format_10kmBufferzones_6.readFeatures(json_10kmBufferzones_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_10kmBufferzones_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10kmBufferzones_6.addFeatures(features_10kmBufferzones_6);
var lyr_10kmBufferzones_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10kmBufferzones_6, 
                style: style_10kmBufferzones_6,
                popuplayertitle: '10km Buffer zones',
                interactive: true,
                title: '<img src="styles/legend/10kmBufferzones_6.png" /> 10km Buffer zones'
            });
var format_Marsabitroads_7 = new ol.format.GeoJSON();
var features_Marsabitroads_7 = format_Marsabitroads_7.readFeatures(json_Marsabitroads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_Marsabitroads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marsabitroads_7.addFeatures(features_Marsabitroads_7);
var lyr_Marsabitroads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marsabitroads_7, 
                style: style_Marsabitroads_7,
                popuplayertitle: 'Marsabit roads',
                interactive: true,
                title: '<img src="styles/legend/Marsabitroads_7.png" /> Marsabit roads'
            });
var format_Healthfacilitiestypes_8 = new ol.format.GeoJSON();
var features_Healthfacilitiestypes_8 = format_Healthfacilitiestypes_8.readFeatures(json_Healthfacilitiestypes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_Healthfacilitiestypes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilitiestypes_8.addFeatures(features_Healthfacilitiestypes_8);
var lyr_Healthfacilitiestypes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilitiestypes_8, 
                style: style_Healthfacilitiestypes_8,
                popuplayertitle: 'Health facilities types',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilitiestypes_8.png" /> Health facilities types'
            });
var format_Healthfacilities_9 = new ol.format.GeoJSON();
var features_Healthfacilities_9 = format_Healthfacilities_9.readFeatures(json_Healthfacilities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_Healthfacilities_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilities_9.addFeatures(features_Healthfacilities_9);
var lyr_Healthfacilities_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilities_9, 
                style: style_Healthfacilities_9,
                popuplayertitle: 'Health facilities',
                interactive: true,
                title: '<img src="styles/legend/Healthfacilities_9.png" /> Health facilities'
            });
var format_towns_10 = new ol.format.GeoJSON();
var features_towns_10 = format_towns_10.readFeatures(json_towns_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource_towns_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_towns_10.addFeatures(features_towns_10);
var lyr_towns_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_towns_10, 
                style: style_towns_10,
                popuplayertitle: 'towns',
                interactive: true,
                title: '<img src="styles/legend/towns_10.png" /> towns'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_MarsabitBoundary_2.setVisible(true);lyr_wetlands_3.setVisible(true);lyr_ProtectedAreas_4.setVisible(true);lyr_forests_5.setVisible(true);lyr_10kmBufferzones_6.setVisible(true);lyr_Marsabitroads_7.setVisible(true);lyr_Healthfacilitiestypes_8.setVisible(true);lyr_Healthfacilities_9.setVisible(true);lyr_towns_10.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_OSMStandard_1,lyr_MarsabitBoundary_2,lyr_wetlands_3,lyr_ProtectedAreas_4,lyr_forests_5,lyr_10kmBufferzones_6,lyr_Marsabitroads_7,lyr_Healthfacilitiestypes_8,lyr_Healthfacilities_9,lyr_towns_10];
lyr_MarsabitBoundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_': 'ID_', 'COUNTY_NAM': 'COUNTY_NAM', 'CONST_CODE': 'CONST_CODE', 'CONSTITUEN': 'CONSTITUEN', 'COUNTY_COD': 'COUNTY_COD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_wetlands_3.set('fieldAliases', {'KENWETLAND': 'KENWETLAND', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WETLANDS_': 'WETLANDS_', 'WETLANDS_I': 'WETLANDS_I', 'CLASS': 'CLASS', 'CLASSTX': 'CLASSTX', 'NAME': 'NAME', 'DESCRIP': 'DESCRIP', });
lyr_ProtectedAreas_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PARK_POL_': 'PARK_POL_', 'PARK_POL_I': 'PARK_POL_I', 'NUMBER': 'NUMBER', 'AREANAME': 'AREANAME', 'ISO3': 'ISO3', 'SIZE': 'SIZE', 'YEAR': 'YEAR', 'IUCNCAT': 'IUCNCAT', 'LON': 'LON', 'LAT': 'LAT', 'CNTRYNAME': 'CNTRYNAME', 'DESIGNATE': 'DESIGNATE', 'IUCNUM': 'IUCNUM', });
lyr_forests_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FORESTS_': 'FORESTS_', 'FORESTS_ID': 'FORESTS_ID', 'LU': 'LU', 'CFACTOR': 'CFACTOR', });
lyr_10kmBufferzones_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Facility_N': 'Facility_N', 'Type': 'Type', 'Owner': 'Owner', 'County': 'County', 'Sub_County': 'Sub_County', 'Division': 'Division', 'Location': 'Location', 'Sub_Locati': 'Sub_Locati', 'Constituen': 'Constituen', 'Nearest_To': 'Nearest_To', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Marsabitroads_7.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'KENROAD_': 'KENROAD_', 'KENROAD_ID': 'KENROAD_ID', });
lyr_Healthfacilitiestypes_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Facility_N': 'Facility_N', 'Type': 'Type', 'Owner': 'Owner', 'County': 'County', 'Sub_County': 'Sub_County', 'Division': 'Division', 'Location': 'Location', 'Sub_Locati': 'Sub_Locati', 'Constituen': 'Constituen', 'Nearest_To': 'Nearest_To', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Healthfacilities_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Facility_N': 'Facility_N', 'Type': 'Type', 'Owner': 'Owner', 'County': 'County', 'Sub_County': 'Sub_County', 'Division': 'Division', 'Location': 'Location', 'Sub_Locati': 'Sub_Locati', 'Constituen': 'Constituen', 'Nearest_To': 'Nearest_To', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_towns_10.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TOWN_NAME': 'TOWN_NAME', 'TOWN_ID': 'TOWN_ID', 'TOWN_TYPE': 'TOWN_TYPE', });
lyr_MarsabitBoundary_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_': 'TextEdit', 'COUNTY_NAM': 'TextEdit', 'CONST_CODE': 'TextEdit', 'CONSTITUEN': 'TextEdit', 'COUNTY_COD': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_wetlands_3.set('fieldImages', {'KENWETLAND': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WETLANDS_': 'TextEdit', 'WETLANDS_I': 'TextEdit', 'CLASS': 'TextEdit', 'CLASSTX': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIP': 'TextEdit', });
lyr_ProtectedAreas_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PARK_POL_': 'TextEdit', 'PARK_POL_I': 'TextEdit', 'NUMBER': 'Range', 'AREANAME': 'TextEdit', 'ISO3': 'TextEdit', 'SIZE': 'TextEdit', 'YEAR': 'TextEdit', 'IUCNCAT': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'CNTRYNAME': 'TextEdit', 'DESIGNATE': 'TextEdit', 'IUCNUM': 'Range', });
lyr_forests_5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'FORESTS_': 'TextEdit', 'FORESTS_ID': 'TextEdit', 'LU': 'TextEdit', 'CFACTOR': 'TextEdit', });
lyr_10kmBufferzones_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Facility_N': 'TextEdit', 'Type': 'TextEdit', 'Owner': 'TextEdit', 'County': 'TextEdit', 'Sub_County': 'TextEdit', 'Division': 'TextEdit', 'Location': 'TextEdit', 'Sub_Locati': 'TextEdit', 'Constituen': 'TextEdit', 'Nearest_To': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Marsabitroads_7.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'KENROAD_': 'TextEdit', 'KENROAD_ID': 'TextEdit', });
lyr_Healthfacilitiestypes_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Facility_N': 'TextEdit', 'Type': 'TextEdit', 'Owner': 'TextEdit', 'County': 'TextEdit', 'Sub_County': 'TextEdit', 'Division': 'TextEdit', 'Location': 'TextEdit', 'Sub_Locati': 'TextEdit', 'Constituen': 'TextEdit', 'Nearest_To': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Healthfacilities_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Facility_N': 'TextEdit', 'Type': 'TextEdit', 'Owner': 'TextEdit', 'County': 'TextEdit', 'Sub_County': 'TextEdit', 'Division': 'TextEdit', 'Location': 'TextEdit', 'Sub_Locati': 'TextEdit', 'Constituen': 'TextEdit', 'Nearest_To': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_towns_10.set('fieldImages', {'fid': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TOWN_NAME': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN_TYPE': 'TextEdit', });
lyr_MarsabitBoundary_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ID_': 'inline label - always visible', 'COUNTY_NAM': 'inline label - always visible', 'CONST_CODE': 'inline label - always visible', 'CONSTITUEN': 'inline label - always visible', 'COUNTY_COD': 'inline label - visible with data', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_wetlands_3.set('fieldLabels', {'KENWETLAND': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'WETLANDS_': 'inline label - always visible', 'WETLANDS_I': 'inline label - always visible', 'CLASS': 'inline label - always visible', 'CLASSTX': 'inline label - always visible', 'NAME': 'inline label - always visible', 'DESCRIP': 'inline label - always visible', });
lyr_ProtectedAreas_4.set('fieldLabels', {'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'PARK_POL_': 'inline label - always visible', 'PARK_POL_I': 'inline label - always visible', 'NUMBER': 'inline label - always visible', 'AREANAME': 'inline label - always visible', 'ISO3': 'inline label - always visible', 'SIZE': 'inline label - always visible', 'YEAR': 'inline label - always visible', 'IUCNCAT': 'inline label - always visible', 'LON': 'inline label - always visible', 'LAT': 'inline label - always visible', 'CNTRYNAME': 'inline label - always visible', 'DESIGNATE': 'inline label - always visible', 'IUCNUM': 'inline label - always visible', });
lyr_forests_5.set('fieldLabels', {'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'FORESTS_': 'inline label - always visible', 'FORESTS_ID': 'inline label - always visible', 'LU': 'inline label - always visible', 'CFACTOR': 'inline label - always visible', });
lyr_10kmBufferzones_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Facility_N': 'inline label - always visible', 'Type': 'inline label - always visible', 'Owner': 'inline label - always visible', 'County': 'inline label - always visible', 'Sub_County': 'inline label - always visible', 'Division': 'inline label - always visible', 'Location': 'inline label - always visible', 'Sub_Locati': 'inline label - always visible', 'Constituen': 'inline label - always visible', 'Nearest_To': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Marsabitroads_7.set('fieldLabels', {'FNODE_': 'inline label - always visible', 'TNODE_': 'inline label - always visible', 'LPOLY_': 'inline label - always visible', 'RPOLY_': 'inline label - always visible', 'LENGTH': 'inline label - always visible', 'KENROAD_': 'inline label - always visible', 'KENROAD_ID': 'inline label - always visible', });
lyr_Healthfacilitiestypes_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Facility_N': 'inline label - always visible', 'Type': 'inline label - always visible', 'Owner': 'inline label - always visible', 'County': 'inline label - always visible', 'Sub_County': 'inline label - always visible', 'Division': 'inline label - always visible', 'Location': 'inline label - always visible', 'Sub_Locati': 'inline label - always visible', 'Constituen': 'inline label - always visible', 'Nearest_To': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Healthfacilities_9.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'Facility_N': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Owner': 'inline label - always visible', 'County': 'inline label - visible with data', 'Sub_County': 'inline label - always visible', 'Division': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Sub_Locati': 'inline label - visible with data', 'Constituen': 'inline label - visible with data', 'Nearest_To': 'header label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_towns_10.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', 'TOWN_NAME': 'inline label - always visible', 'TOWN_ID': 'inline label - always visible', 'TOWN_TYPE': 'inline label - always visible', });
lyr_towns_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});