import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div>
      <h2 className="text-center pt-5 ">Find us on Google Map!!!</h2>
      <p className="text-center pb-5">Very Easy to find us.Just google our Address on google map.</p>
      <div className="pb-5" style={{ height: '80vh', width: '100%' }}>

        <GoogleMapReact

          bootstrapURLKeys={`{ key: ${process.env.DB_PASS} }`}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;