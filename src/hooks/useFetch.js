import { useState } from "react";

export const useFetch = (callback) => {
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args) => {
    try {
      setDataLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setDataLoading(false);
    }
  };

  return [fetching, dataLoading, error];
};
