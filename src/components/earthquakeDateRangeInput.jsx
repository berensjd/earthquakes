import React, { Fragment } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import moment from "moment";

export default ({
  fromDate,
  toDate,
  onChangeFromDate,
  onChangeToDate,
  onSubmit
}) => {
  return (
    <Fragment>
      <h5>
        Please select period from/to dates then press Submit for a new selection
      </h5>
      <form onSubmit={e => onSubmit(e)}>
        <div className="row">
          <div className="form-group col-3">
            <label htmlFor="fromDate">From Date</label>
            <DayPickerInput
              placeholder={fromDate}
              onDayChange={day =>
                onChangeFromDate(moment(day).format("YYYY-MM-DD"))
              }
            />
          </div>

          <div className="form-group col-3">
            <label htmlFor="toDate">To Date</label>
            <DayPickerInput
              placeholder={toDate}
              onDayChange={day =>
                onChangeToDate(moment(day).format("YYYY-MM-DD"))
              }
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
