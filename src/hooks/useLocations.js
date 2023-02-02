import { useMemo } from "react";

export const useLocations = (locations, selectedSort) => {
  const sortedLocations = useMemo(() => {
    if (selectedSort) {
      return [...locations].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return locations;
  }, [selectedSort, locations]);

  return sortedLocations;
};
