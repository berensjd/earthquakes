import React, { useState, Fragment } from "react";
import SearchBox from "./common/searchBox";
import SelectReact from "./common/selectReact";
import EarthquakesTable from "./earthquakesTable";
import Pagination from "./common/pagination";
import useFetchEarthquakeData from "../hooks/useFetchEarthquakeData";
import usePagingEarthquakes from "../hooks/usePagingEarthquakes";
import EarthquakeDateRangeInput from "./earthquakeDateRangeInput";
import moment from "moment";

export default props => {
  const defaultDaysFromToday = 3;
  const defaultStartDate = moment()
    .subtract(defaultDaysFromToday, "d")
    .format("YYYY-MM-DD");
  const defaultEndDate = moment().format("YYYY-MM-DD");
  const [starttime, setStarttime] = useState(defaultStartDate);
  const [endtime, setEndtime] = useState(defaultEndDate);
  const [startTimeInput, setStartTimeInput] = useState(starttime);
  const [endTimeInput, setEndtimeTimeInput] = useState(endtime);
  const [selectedMagitude, setSelectedMagitude] = useState("");
  const [selectedMagitudeType, setSelectedMagitudeType] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const [sortcolumn, setSortcolumn] = useState({ path: "place", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");

  const {
    title,
    earthquakedata,
    loading,
    magList,
    magTypeList
  } = useFetchEarthquakeData([starttime, endtime]);

  const { pagedEarthquakeData, filteredcount, pagesize } = usePagingEarthquakes(
    [
      earthquakedata,
      currentpage,
      sortcolumn,
      searchQuery,
      selectedMagitude,
      selectedMagitudeType
    ]
  );

  function handlePageChange(page) {
    console.log("handlePageChange()", page);
    setCurrentpage(page);
  }

  function handleSort(sortColumn) {
    console.log("handleSort()", sortColumn);
    setSortcolumn(sortColumn);
  }
  function handleSearch(searchQuery) {
    console.log("handleSearch()", searchQuery);
    setSearchQuery(searchQuery);
    setSelectedMagitude("");
    setSelectedMagitudeType("");
  }

  function handleSelectMagitude({ value }) {
    console.log("handleSelectMagitude()", value);
    setSelectedMagitude(value);
    setSelectedMagitudeType("");
    setSearchQuery("");
  }

  function handleSelectMagitudeType({ value }) {
    console.log("handleSelectMagitudeType()", value);
    setSelectedMagitudeType(value);
    setSelectedMagitude("");
    setSearchQuery("");
  }

  function handleStartTime(starttime) {
    console.log("handleStartTime()", starttime);
    setStartTimeInput(starttime);
  }

  function handleEndTime(endtime) {
    console.log("handleEndTime()", endtime);
    setEndtimeTimeInput(endtime);
  }

  function handleSubmit(event) {
    setEndtime(endTimeInput);
    setStarttime(startTimeInput);
    event.preventDefault();
  }

  return (
    <Fragment>
      <div>
        <h3>{title}</h3>
      </div>
      <EarthquakeDateRangeInput
        fromDate={startTimeInput}
        toDate={endTimeInput}
        onChangeFromDate={handleStartTime}
        onChangeToDate={handleEndTime}
        onSubmit={handleSubmit}
      />
      <div className="row">
        <div className="col-6">
          <SelectReact
            value={selectedMagitude}
            onChange={handleSelectMagitude}
            label="Select Magitude"
            options={magList}
          />
        </div>
        <div className="col-6">
          <SelectReact
            value={selectedMagitudeType}
            onChange={handleSelectMagitudeType}
            label="Select Magitude Type"
            options={magTypeList}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="col-6">
          <SearchBox value={searchQuery} onChange={handleSearch} />
        </div>
        <div className="col-3" />
      </div>

      <div>
        {loading ? (
          <div> loading </div>
        ) : filteredcount ? (
          <Fragment>
            <EarthquakesTable
              earthquakedata={pagedEarthquakeData}
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
