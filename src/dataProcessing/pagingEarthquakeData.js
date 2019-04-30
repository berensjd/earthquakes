import _ from "lodash";
import { paginate } from "../utils/paginate";

export default paging => {
  const {
    pagesize,
    currentpage,
    extractedEarthquakeData: allData,
    selectedMagitude,
    searchQuery,
    sortcolumn
  } = paging;
  let filtered = allData;

  if (searchQuery)
    filtered = allData.filter(item =>
      item.place.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  else if (selectedMagitude)
    filtered = allData.filter(
      item => item.magSelectionHook === selectedMagitude
    );
  const sorted = _.orderBy(filtered, [sortcolumn.path], [sortcolumn.order]);
  const pagedData = paginate(sorted, currentpage, pagesize);
  return { filteredCount: filtered.length, pagedData };
};
