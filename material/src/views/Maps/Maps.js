import React from "react";

const Maps = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "-15.814102";
    let lng = "-47.905177";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    //TODO: modificar para cara point
    const contentString =
      '<div class="info-window-content"><h2>Material Dashboard React</h2>' +
      "<p>A premium Admin for React, Material-UI, and React Hooks.</p></div>";

    //loop
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(-15.812669, -47.911263),
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    //loop
    const marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(-15.808543, -47.900929),
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });

    const infowindow2 = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker2, "click", function () {
      infowindow2.open(map, marker2);
    });

    //loop
    const marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(-15.819192, -47.909624),
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });

    const infowindow3 = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker3, "click", function () {
      infowindow3.open(map, marker3);
    });
  });
  return (
    <>
      <div style={{ height: `100vh` }} ref={mapRef}></div>
    </>
  );
};

export default Maps;
