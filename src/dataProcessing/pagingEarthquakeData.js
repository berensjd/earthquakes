import _ from "lodash";
import { paginate } from "../utils/paginate";
import dynamicPageSize from "../utils/dynamicPagesize";

export default paging => {
  const {
    currentpage,
    earthquakedata: allData,
    selectedMagitude,
    selectedMagitudeType,
    searchQuery,
    sortcolumn
  } = paging;
  let filtered = allData;
  console.log({ searchQuery, selectedMagitude, selectedMagitudeType });
  if (searchQuery && searchQuery.length >= 1)
    filtered = allData.filter(item =>
      item.place.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  else if (selectedMagitude !== "")
    filtered = allData.filter(
      item => item.magSelectionHook === selectedMagitude
    );
  else if (selectedMagitudeType !== "")
    filtered = allData.filter(item => item.magType === selectedMagitudeType);

  const sorted = _.orderBy(filtered, [sortcolumn.path], [sortcolumn.order]);
  const filteredCount = filtered ? filtered.length : 0;
  const pagesize = dynamicPageSize(filteredCount);
  const pagedData = paginate(sorted, currentpage, pagesize);
  return { filteredCount, pagedData, pagesize };
};
