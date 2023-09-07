// replace with your own API key
// const API_KEY = 'eyJpIjoyNTcsImMiOjE2Njc0ODU2MjN9.c_UlvdpHGTI_Jb-TNMYlDYuIkCLJaUpi911RdlwPsAY';
const API_KEY = '6V2G4CDq1T7n1Aw_KHtg2Zj5QUiPwvk-EJeMM1RxEwI';
// 6V2G4CDq1T7n1Aw_KHtg2Zj5QUiPwvk-EJeMM1RxEwI


/*
We create the map with one tile layer and set its initial coordinates and zoom.
See https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html
See https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html
See https://openlayers.org/en/latest/apidoc/module-ol_View-View.html
*/
const map = new ol.Map({
	layers: [
		new ol.layer.Tile({
			source: new ol.source.TileJSON({
				url: `https://api.mapy.cz/v1/maptiles/basic/tiles.json?apikey=${API_KEY}`,
			}),
		}),
	],
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([14.8981184, 49.8729317]),
		zoom: 16,
	}),
});

/*
We also require you to include our logo somewhere over the map.
We create our own map control implementing a documented interface,
that shows a clickable logo.
See https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html
*/
class LogoControl extends ol.control.Control {
  constructor(opt_options) {
    const options = opt_options || {};
    const element = document.createElement('div');

    element.className = 'logocontrol ol-unselectable ol-control';
    element.innerHTML = '<a href="http://mapy.cz/" target="_blank"><img src="https://api.mapy.cz/img/api/logo.svg" ></a>';

    super({
      element: element,
      target: options.target,
    });
  }
}

// finally we add our LogoControl to the map
map.addControl(new LogoControl());

