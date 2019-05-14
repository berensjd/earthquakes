import React, { useState, Fragment } from "react";
import EarthquakesTable from "./earthquakesTable";
import Pagination from "./common/pagination";
import useFetchEarthquakeData from "../hooks/useFetchEarthquakeData";
import usePagingEarthquakes from "../hooks/usePagingEarthquakes";
import EarthquakeDateRangeInput from "./earthquakeDateRangeInput";
import EarthquakeTableFilter from "./earthquakeTableFilter";
import moment from "moment";

export default props => {
  /**Declare */
  const defaultDaysFromToday = 3;
  const defaultStartDate = moment()
    .subtract(defaultDaysFromToday, "d")
    .format("YYYY-MM-DD");

  /**States */
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

  /**Custom Hooks */
  const {
    title,
    earthquakedata,
    loading,
    count,
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

  /**Events */
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
    setCurrentpage(1);
  }

  function handleSelectMagitude({ value }) {
    console.log("handleSelectMagitude()", value);
    setSelectedMagitude(value);
    setSelectedMagitudeType("");
    setSearchQuery("");
    setCurrentpage(1);
  }

  function handleSelectMagitudeType({ value }) {
    console.log("handleSelectMagitudeType()", value);
    setSelectedMagitudeType(value);
    setSelectedMagitude("");
    setSearchQuery("");
    setCurrentpage(1);
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
    setCurrentpage(1);
    event.preventDefault();
  }

  /**Render Components */

  function renderPagination() {
    return (
      <Pagination
        itemsCount={filteredcount}
        pageSize={pagesize}
        currentPage={currentpage}
        onPageChange={handlePageChange}
      />
    );
  }

  function renderEarthquakeDateRangeInput() {
    return (
      <EarthquakeDateRangeInput
        fromDate={startTimeInput}
        toDate={endTimeInput}
        onChangeFromDate={handleStartTime}
        onChangeToDate={handleEndTime}
        onSubmit={handleSubmit}
      />
    );
  }

  function renderEarthquakeTableFilter() {
    return (
      <EarthquakeTableFilter
        selectedMagitude={selectedMagitude}
        onChangeMagitude={handleSelectMagitude}
        optionsMagList={magList}
        selectedMagitudeType={selectedMagitudeType}
        onChangeMagitudeType={handleSelectMagitudeType}
        optionsMagTypeList={magTypeList}
        searchQuery={searchQuery}
        onChangeSearchQuery={handleSearch}
      />
    );
  }

  function renderEarthquakesTable() {
    return (
      <EarthquakesTable
        earthquakedata={pagedEarthquakeData}
        sortColumn={sortcolumn}
        onSort={handleSort}
      />
    );
  }

  function renderTotalEvents() {
    return (
      <p>
        Total Events: {count} Filtered Events: {filteredcount}{" "}
      </p>
    );
  }

  function renderEventsNotFound() {
    return (
      <div>
        <h2>Nothing to display</h2>
      </div>
    );
  }

  function renderPageLoading() {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }

  function renderPageTitle() {
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }

  function renderConditionalLoading() {
    return (
      <div>{loading ? renderPageLoading() : renderConditionalTable()}</div>
    );
  }

  function renderConditionalTable() {
    return filteredcount ? (
      <Fragment>
        {renderTotalEvents()}
        {renderPagination()}
        {renderEarthquakesTable()}
        {renderPagination()}
      </Fragment>
    ) : (
      renderEventsNotFound()
    );
  }

  /**Final Render */
  return (
    <Fragment>
      {renderPageTitle()}
      {renderEarthquakeDateRangeInput()}
      {renderEarthquakeTableFilter()}
      {renderConditionalLoading()}
    </Fragment>
  );
};
