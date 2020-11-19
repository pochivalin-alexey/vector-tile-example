const style = {
  version: 8,
  center: [37.618423, 55.751244],
  zoom: 10,
  bearing: 0,
  pitch: 0,
  sources: {
    odh_pbf: {
      type: 'vector',
      tiles: [config.odh_url],
      minzoom: 8,
      maxzoom: 16
    },
  },
  sprite: "",
  glyphs: "./fonts/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "odh_pbf",
      type: "fill",
      source: "odh_pbf",
      "source-layer": "polygons",
      minzoom: 8,
      layout: {},
      paint: {
        "fill-color": "#000000"       
      }
    },
  ],
};
