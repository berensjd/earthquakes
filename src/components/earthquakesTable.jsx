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
    { path: "place", label: "Location" },
    { path: "timeFormatted", label: "Event Time" },
    { path: "mag", label: "Magitude" }
  ];
}
