import axios from "axios";
import React, { useEffect, useMemo, useState, CSSProperties } from "react";
import LocationTable from "./components/LocationTable";
import Select from "./components/UI/Select";
import { useLocations } from "./hooks/useLocations";
import { useFetch } from "./hooks/useFetch";
import { usePagination } from "./hooks/usePagination";
import "./styles/App.scss";
import ClipLoader from "react-spinners/ClipLoader";

import LocationsService from "./API/LocationsService";
import { getPagesCount } from "./utils/pages";
import Pagination from "./components/UI/Pagination";

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const sortedLocations = useLocations(locations, selectedSort);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const showLocations = sortedLocations.filter(
    (location, index) => index >= limit * (page - 1) && index < limit * page
  );

  const [isLoading, setIsLoading] = useState(false);

  const [fetchLocations, isLocationsLoading, locationsError] = useFetch(
    async (limit) => {
      setIsLoading(true);
      // !!! use setTimeout just to show Loader
      setTimeout(async () => {
        const response = await LocationsService.getAll();
        setLocations(response.data.results);
        //const response = await LocationsService.getMultipleLocations(limit, page);
        //setLocations(response.data);
        const totalLocations = response.data.results.length;
        console.log(response);
        setTotalPages(getPagesCount(totalLocations, limit));
        console.log(totalLocations, "---", limit);
        setIsLoading(false);
      }, 1000);
    }
  );

  useEffect(() => {
    fetchLocations(limit);
  }, []);

  const changePage = (page, limit) => {
    setPage(page);
    setLimit(limit);
    setTotalPages(getPagesCount(locations.length, limit));
    console.log(totalPages, page, "---", limit);
  };

  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  };

  return (
    <>
      {isLoading ? (
        <ClipLoader
          color={"#d36969"}
          loading={isLoading}
          cssOverride={override}
          size={150}
        />
      ) : (
        <div className="App">
          <div>
            <div className="filters">
              <Select
                value={selectedSort}
                onChange={(sort) => setSelectedSort(sort)}
                defaultValue={"Sorting by"}
                options={[
                  { value: "type", name: "Type" },
                  { value: "name", name: "Name" },
                  { value: "dimension", name: "Dimension" },
                ]}
              />
              <Select
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue={"Items/page:"}
                options={[
                  { value: 5, name: "5" },
                  { value: 10, name: "10" },
                  { value: 15, name: "15" },
                ]}
              />
            </div>
            {locationsError && <div>ERROR: {locationsError}</div>}
            <LocationTable locations={showLocations} />
            {locations > limit && (
              <Pagination
                onChange={changePage}
                page={page}
                totalPages={totalPages}
                limit={limit}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
