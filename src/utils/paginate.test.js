import { paginate } from "./paginate";
const allRecords = [
  { prop1: "value1" },
  { prop2: "value2" },
  { prop3: "value3" }
];
const firstRecord = [{ prop1: "value1" }];
const secondRecord = [{ prop2: "value2" }];
const lastRecord = [{ prop3: "value3" }];

let pagesize;
let pageNumber;

test("Unit - paginate-empty recordset", () => {
  expect(paginate([])).toEqual([]);
});

test("Unit - paginate-scrolling through pages", () => {
  pagesize = 1;
  pageNumber = 1;
  expect(paginate(allRecords, pageNumber, pagesize)).toEqual(firstRecord);
  pageNumber = 2;
  expect(paginate(allRecords, pageNumber, pagesize)).toEqual(secondRecord);
  pageNumber = 3;
  expect(paginate(allRecords, pageNumber, pagesize)).toEqual(lastRecord);
});

test("Unit - paginate-changing page size", () => {
  pagesize = 1;
  pageNumber = 1;
  expect(paginate(allRecords, pageNumber, pagesize)).toEqual(firstRecord);
  pagesize = 2;
  expect(paginate(allRecords, pageNumber, pagesize)).toEqual([
    ...firstRecord,
    ...secondRecord
  ]);
  pagesize = 3;
  expect(paginate(allRecords, pageNumber, pagesize)).toEqual(allRecords);
});
