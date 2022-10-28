import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";


import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline, Polygon, Circle } from 'react-leaflet'


function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  var openstreetmap = (<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

  />)


  var swisstopo = (<TileLayer url="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"

  attribution='&copy; swisstopo'></TileLayer>

  )

  var AKW = [
    {
      name: "Kernkraftwerk Mühleberg",
      kanton: "BE",
      pos:   [46.968872773 , 7.268042402]
    },
    { 
      name: "Kernkraftwerk Gösgen",
      kanton: "SO",
      pos: [47.366075562 , 7.966750757]
    },
    {
      name: "Kernkraftwerk Beznau",
      kanton: "AG",
      pos: [47.552019433 , 8.228391684]
    },
    {
      name: "Kernkraftwerk Leibstadt",
      kanton: "AG",
      pos: [47.601455367 , 8.182823992]
    }
  ];

  //var polyline = [[47.2 , 7.2],[47.4 , 7.9],[47.2 , 8.5],[47.2 , 7.2]];

  //const KKW = [{name: "Kernkraftwerk Mühleberg", positions: [46.968872773 , 7.268042402]}]
  const purpleOptions = { color: 'purple' }
return (
    <MapContainer center={[47.5349, 7.6416]} zoom={15} scrollWheelZoom={true}

      attributionControl={false}>

  {swisstopo}


  <Circle 
    center={AKW[0].pos} 
    pathOptions={purpleOptions} 
    radius={50000}
    stroke={false}
     />

  <Circle
        center={AKW[1].pos}
        pathOptions={purpleOptions}
        radius={50000}
        stroke={false}
      />

<Circle
        center={AKW[2].pos}
        pathOptions={purpleOptions}
        radius={50000}
        stroke={false}
      />

<Circle
        center={AKW[3].pos}
        pathOptions={purpleOptions}
        radius={50000}
        stroke={false}
      />
  
  
  
  <Marker position={AKW[0].pos}>
    <Popup>
      <b>{AKW[0].name}</b><br/>{AKW[0].kanton}
    </Popup>
  </Marker>
  <Marker position={AKW[1].pos}>
    <Popup>
      <b>{AKW[1].name}</b><br/>{AKW[1].kanton}
    </Popup>
  </Marker>
  <Marker position={AKW[2].pos}>
    <Popup>
      <b>{AKW[2].name}</b><br/>{AKW[2].kanton}
    </Popup>
  </Marker>
  <Marker position={AKW[3].pos}>
    <Popup>
      <b>{AKW[3].name}</b><br/>{AKW[3].kanton}
    </Popup>
  </Marker>

</MapContainer>
  );
}

export default App;
