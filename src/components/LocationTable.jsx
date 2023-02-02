import React from "react";
import LocationItem from "./LocationItem";

const LocationTable = ({ locations, onClick }) => {
  if (!locations.length) {
    return <p>Locations not found</p>;
  }

  return (
    <>
      <div
        onClick={(event) => {
          const target = event.target.innerText;
          if (["type", "name", "dimension"].includes(target)) {
            onClick(event.target.innerText);
          }
        }}
        className="location__titles"
      >
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
