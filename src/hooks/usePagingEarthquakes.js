import { useState, useEffect } from "react";
import paging from "../dataProcessing/pagingEarthquakeData";

export default function usePaging([
  earthquakedata,
  currentpage,
  sortcolumn,
  searchQuery,
  selectedMagitude,
  selectedMagitudeType
]) {
  const pagesize = 500;
  const [pagedEarthquakeData, setPagedEarthquakedata] = useState([]);
  const [filteredcount, setFilteredcount] = useState(0);

  useEffect(() => {
    console.log(currentpage, sortcolumn);

    const { filteredCount, pagedData } = paging({
      earthquakedata,
      selectedMagitude,
      selectedMagitudeType,
      pagesize,
      currentpage,
      searchQuery,
      sortcolumn
    });

    setPagedEarthquakedata(pagedData);

    setFilteredcount(filteredCount);
  }, [
    earthquakedata,
    currentpage,
    sortcolumn,
    searchQuery,
    selectedMagitude,
    selectedMagitudeType
  ]);
  return { pagedEarthquakeData, filteredcount, pagesize };
}
