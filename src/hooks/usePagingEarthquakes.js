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
  //const pagesize = 500;
  const [pagedEarthquakeData, setPagedEarthquakedata] = useState([]);
  const [filteredcount, setFilteredcount] = useState(0);
  const [pagesize, setPagesize] = useState(0);

  useEffect(() => {
    console.log(currentpage, sortcolumn);

    const { filteredCount, pagedData, pagesize } = paging({
      earthquakedata,
      selectedMagitude,
      selectedMagitudeType,
      currentpage,
      searchQuery,
      sortcolumn
    });

    console.log(pagesize);
    setPagedEarthquakedata(pagedData);

    setFilteredcount(filteredCount);
    setPagesize(pagesize);
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
