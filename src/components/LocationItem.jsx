import React, { useState } from "react";
import axios from "axios";

const LocationItem = ({ location }) => {
  return (
    <div className="location__row">
      <p className="location__id">{location.id}</p>
      <p className="location__name">{location.name}</p>
      <p className="location__type">{location.type}</p>
      <p className="location__dimension">{location.dimension}</p>
      <div className="location__residents">
        {location.residents.map((res) => (
          <p key={res}>{res}</p>
        ))}
      </div>
      <p className="location__created">{location.created}</p>
    </div>
  );
};

export default LocationItem;
