import React from "react";
import Table from "./common/table";

export default props => {
  const { earthquakedata, onSort, sortColumn } = props;
  return (
    <Table
      columns={getColumns()}
      data={earthquakedata}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

function getColumns() {
  return [
    {
      path: "place",
      label: "Location",
      content: earthquake => (
        <a href={earthquake.url} target="_blank" rel="noopener noreferrer">
          {earthquake.place}
        </a>
      )
    },
    { path: "timeFormatted", label: "Event Time" },
    { path: "mag", label: "Magitude" }
  ];
}
