import React, {PureComponent} from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";



function getMap() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 45.421532, lng: -75.697189}}
        />
    );
}
const WrappedMap = withScriptjs(withGoogleMap(getMap));

export default function Map() {
    return (
        <div style={{width: '12rem', height: '12rem'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{height:"12rem", width:"12rem"}}/>}
                containerElement={<div style={{height:"12rem", width:"12rem"}}/>}
                mapElement={<div style={{height:"12rem", width:"12rem"}}/>}
            />

        </div>
    )
};
