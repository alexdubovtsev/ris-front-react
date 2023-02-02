import React, { useState } from "react";
import LocationItem from "./LocationItem";

const LocationTable = ({ locations, title }) => {
  if (!locations.length) {
    return <p>Locations not found</p>;
  }
  return (
    <>
      <div className="location__titles">
        <p>id</p>
        <p>name</p>
        <p>type</p>
        <p>dimension</p>
        <p>residents</p>
        <p>created</p>
      </div>
      <div className="location__items">
        {locations.map((location) => (
          <LocationItem key={location.id} location={location} />
        ))}
      </div>
    </>
  );
};

export default LocationTable;
