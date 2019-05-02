import React, { Fragment } from "react";
import SearchBox from "./common/searchBox";
import SelectReact from "./common/selectReact";

export default ({
  selectedMagitude,
  onChangeMagitude,
  optionsMagList,
  selectedMagitudeType,
  onChangeMagitudeType,
  optionsMagTypeList,
  searchQuery,
  onChangeSearchQuery
}) => {
  return (
    <Fragment>
      <h5>Select/Search to filter table</h5>
      <div className="row">
        <div className="col-6">
          <SelectReact
            value={selectedMagitude}
            onChange={e => onChangeMagitude(e)}
            label="Select Magitude"
            options={optionsMagList}
          />
        </div>
        <div className="col-6">
          <SelectReact
            value={selectedMagitudeType}
            onChange={e => onChangeMagitudeType(e)}
            label="Select Magitude Type"
            options={optionsMagTypeList}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-3" />
        <div className="col-6">
          <SearchBox
            value={searchQuery}
            onChange={e => onChangeSearchQuery(e)}
            label={"Search by Location"}
          />
        </div>
        <div className="col-3" />
      </div>
    </Fragment>
  );
};
