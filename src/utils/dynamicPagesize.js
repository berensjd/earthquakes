export default totalRecords => {
  const maxPages = 20;
  const maxRecordsPerPage = 1000;
  const tryRecordsPerPage = [25, 50, 100, 200, 300, 500];

  for (let current of tryRecordsPerPage) {
    if (totalRecords / current <= maxPages) return current;
  }
  return maxRecordsPerPage;
};
