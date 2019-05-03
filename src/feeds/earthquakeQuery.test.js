import { getEarthquakes } from "./earthquakeQuery";

//Ensure that the record ID property is available within API
const recordId = "id";
// We need to make sure that these expected event properties are available within th API
const recordProperties = ["mag", "time", "place", "url", "magType"];

test("Integration - Earthquake API Status", async () => {
  jest.setTimeout(10000);
  const response = await getEarthquakes();
  expect(response.status).toEqual(200);
  const returnedRecords = response.data.features;
  const { metadata } = response.data;
  const recordCount = metadata.count;
  expect(returnedRecords.length).toEqual(recordCount);
  expect(recordCount).toBeGreaterThanOrEqual(0);
  if (recordCount >= 1) {
    expect(returnedRecords[0][recordId]).toBeTruthy();
    expect(returnedRecords[recordCount - 1].properties).toBeTruthy();
    for (let prop of recordProperties) {
      expect(returnedRecords[recordCount - 1].properties[prop]).toBeTruthy();
    }
  }
});
