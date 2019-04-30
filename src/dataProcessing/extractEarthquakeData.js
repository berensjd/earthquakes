import _ from "lodash";
import dateTime from "date-time";

export default data => {
  let magList = [];
  let magTypeList = [];
  const extractedEarthquakeData = data.map(item => {
    let extractedProperties = _.pick(item.properties, [
      "place",
      "time",
      "url",
      "mag",
      "magType"
    ]);
    extractedProperties.id = item.id;
    extractedProperties.timeFormatted = dateTime({
      date: new Date(extractedProperties.time),
      local: true,
      showTimeZone: true
    });
    extractedProperties.geoType = item.geometry.type;
    extractedProperties.geo = item.geometry.coordinates;
    extractedProperties.magSelectionHook = Math.trunc(extractedProperties.mag);
    magList.push(extractedProperties.magSelectionHook);
    magTypeList.push(extractedProperties.magType);
    return extractedProperties;
  });
  magList = _.sortBy(magList);
  magList = _.sortedUniqBy(magList, Math.floor);
  magTypeList = _.sortBy(magTypeList);
  magTypeList = _.sortedUniqBy(magTypeList);
  magTypeList = _.compact(magTypeList);

  return { extractedEarthquakeData, magList, magTypeList };
};
