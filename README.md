## Summary

This demo's the consumption of a public API service from USGS using react library.<br>
I have made it a mission to also demo the implemenation of custom hooks and change "mindest" from<br>
class-based components to the functional type.

## Source API - Earthquake event information

[https://earthquake.usgs.gov/fdsnws/event/1]

## About the App

Upon first page load, I have defaulted the event period dates from three days ago to today.<br>
The from/to date range can be changed via the input controls and pressing the submit button.

The table of events can be filtered by either selecting a magitude level, magnitude type or by<br>
searching on the location string. The filtered table can be sorted by clicking on any of the<br>
column headings.

The API service has limited the maximum number of returned earthquake events to 20,000 for any given period<br>
If the maximum is exceeeded then an error message will appear on the screen.

For small datasets the page size is 25 rows. The page size will dynamically increase for larger datasets.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Tests

### `npm test`

Launches the test runner in the interactive watch mode.<br>

I have included both unit and integration tests<br>
The integration test ( ./feeds/earthquakeQuery.test.js ) will attempt to check to see if the API is still<br>
in the expected form and that the feeder modules are operational.
