import React, { useState } from "react";

const LocationItem = ({ location }) => {
  const residents = location.residents;
  return (
    <div className="location__row">
      <p className="location__id">{location.id}</p>
      <p className="location__name">{location.name}</p>
      <p className="location__type">{location.type}</p>
      <p className="location__dimension">{location.dimension}</p>
      <div className="location__residents">
        {residents.length ? (
          residents.map((res) => <p key={res}>{res}</p>)
        ) : (
          <div className="location__residents_miss">
            <p>NO residents yet</p>
          </div>
        )}
      </div>
      <p className="location__created">{location.created}</p>
    </div>
  );
};

export default LocationItem;
