import http from "./httpService";

const apiEndpoint = "/query";
const apiFormat = "geojson";

function earthquakeUrl(queryParams) {
  return `${apiEndpoint}?format=${apiFormat}&${queryParams}`;
}

export function getEarthquakes(queryParams) {
  return http.get(earthquakeUrl(queryParams));
}
