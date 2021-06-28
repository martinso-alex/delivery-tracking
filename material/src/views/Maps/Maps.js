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

    const apiUrl = `http://localhost:8080/api/order`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        res.map((order) => {
          let coordinates = order.user.location.coordinates;

          new google.maps.Marker({
            position: new google.maps.LatLng(coordinates[0], coordinates[1]),
            map: map,
            animation: google.maps.Animation.DROP,
            title: order.user.name,
          });
        });
      });
  });
  return (
    <>
      <div style={{ height: `100vh` }} ref={mapRef}></div>
    </>
  );
};

export default Maps;
