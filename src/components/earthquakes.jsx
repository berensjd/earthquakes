import React, { useState, useEffect, Fragment } from "react";
import { getEarthquakes } from "../feeds/earthquakeQuery";
import extractEarthquakeData from "../dataProcessing/extractEarthquakeData";
import EarthquakesTable from "./earthquakesTable";
import Pagination from "./common/pagination";
import paging from "../dataProcessing/pagingEarthquakeData";

import dateTime from "date-time";

export default props => {
  const [starttime, setStarttime] = useState("2014-01-02");
  const [endtime, setEndtime] = useState("2014-01-03");
  const [pagesize, setPagesize] = useState(100);
  const [currentpage, setCurrentpage] = useState(1);
  const [sortcolumn, setSortcolumn] = useState({ path: "place", order: "asc" });

  const { title, earthquakedata, count, filteredcount, loading } = useFetchData(
    {
      starttime,
      endtime,
      pagesize,
      currentpage,
      sortcolumn
    }
  );

  function handlePageChange(page) {
    setCurrentpage(page);
  }

  function handleSort(sortColumn) {
    console.log({ sortColumn });
    setSortcolumn(sortColumn);
  }

  return (
    <Fragment>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {loading ? (
          <div> loading </div>
        ) : filteredcount ? (
          <Fragment>
            <EarthquakesTable
              earthquakedata={earthquakedata}
              sortColumn={sortcolumn}
              onSort={handleSort}
            />

            <Pagination
              itemsCount={filteredcount}
              pageSize={pagesize}
              currentPage={currentpage}
              onPageChange={handlePageChange}
            />
          </Fragment>
        ) : (
          <div>Nothing to Display</div>
        )}
      </div>
    </Fragment>
  );
};

function useFetchData({
  starttime,
  endtime,
  pagesize,
  currentpage,
  sortcolumn
}) {
  const [earthquakedata, setEarthquakedata] = useState(null);
  const [count, setCount] = useState(0);
  const [filteredcount, setFilteredcount] = useState(0);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getEarthquakes(
        `starttime=${starttime}&endtime=${endtime}`
      );
      const { features: data, metadata } = result.data;

      const {
        extractedEarthquakeData,
        magList,
        magTypeList
      } = extractEarthquakeData(data);

      console.log({ extractedEarthquakeData, magList, magTypeList });
      const { filteredCount, pagedData } = paging({
        extractedEarthquakeData,
        pagesize,
        currentpage,
        sortcolumn
      });

      setEarthquakedata(pagedData);
      setCount(metadata.count);
      setFilteredcount(filteredCount);
      setTitle(
        `${metadata.title} - Report generated as at ${dateTime({
          date: new Date(metadata.generated),
          local: true,
          showTimeZone: true
        })}`
      );
      setLoading(false);
    }

    fetchData();
  }, [starttime, endtime, currentpage, sortcolumn, pagesize]);

  return { earthquakedata, count, filteredcount, loading, title };
}

function usePaging(earthquakedata, pagesize, currentpage, sortcolumn) {
  const [data, setData] = useState(earthquakedata);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const { count, earthquakedata } = paging({
      data,
      pagesize,
      currentpage,
      sortcolumn
    });
    setData(earthquakedata);
    setCount(count);
  }, [currentpage, sortcolumn, data, pagesize]);
  return { count, data };
}
