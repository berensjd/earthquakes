import dynamicPagesize from "./dynamicPagesize";

test("Unit - dynamicPagesize", () => {
  expect(dynamicPagesize(0)).toBe(25);
  expect(dynamicPagesize(20000)).toBe(1000);
  expect(dynamicPagesize(null)).toBe(25);
  expect(dynamicPagesize("")).toBe(25);
});
