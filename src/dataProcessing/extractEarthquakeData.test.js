import records, { recordCount } from "../../mock/apiEarthQuakeFeed";
import extractEarthquakeData from "./extractEarthquakeData";

const testProps = ["geoType", "geo", "magSelectionHook"];

test("Process Incoming API data", () => {
  const {
    extractedEarthquakeData,
    magList,
    magTypeList
  } = extractEarthquakeData(records);

  expect(extractedEarthquakeData.length).toEqual(recordCount);
  expect(magList.length).toBeGreaterThanOrEqual(1);
  expect(magTypeList.length).toBeGreaterThanOrEqual(1);
  for (let prop of testProps) {
    if (prop === "magSelectionHook")
      expect(
        extractedEarthquakeData[recordCount - 1][prop]
      ).toBeGreaterThanOrEqual(0);
    else expect(extractedEarthquakeData[recordCount - 1][prop]).toBeTruthy();
  }
});
