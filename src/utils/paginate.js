import _ from "lodash";

export function paginate(items, pageNumber = 1, pageSize = 25) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _.drop(items, startIndex).slice(0, pageSize);
}
