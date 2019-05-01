import React, { Fragment } from "react";

export default ({
  fromDate,
  toDate,
  onChangeFromDate,
  onChangeToDate,
  onSubmit
}) => {
  return (
    <Fragment>
      <h5>Please enter period from/to dates</h5>
      <form onSubmit={e => onSubmit(e)}>
        <div className="row">
          <div className="form-group col-3">
            <label htmlFor="fromDate">From Date</label>
            <input
              type="text"
              name="fromDate"
              className="form-control my-3"
              placeholder="Format: YYYY-MM-DD"
              value={fromDate}
              onChange={e => onChangeFromDate(e.currentTarget.value)}
            />
          </div>

          <div className="form-group col-3">
            <label htmlFor="toDate">To Date</label>
            <input
              type="text"
              name="toDate"
              className="form-control my-3"
              placeholder="Format: YYYY-MM-DD"
              value={toDate}
              onChange={e => onChangeToDate(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <hr />
    </Fragment>
  );
};
