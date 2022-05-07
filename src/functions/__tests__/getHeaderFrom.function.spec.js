const HTTP = require("../../constants");

const getHeaderFrom = require("../getHeaderFrom.function");

//
//
// Mock constants
//

const MOCK = {
  KEY: "mockKey",
};

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
});
afterEach(() => {
  process.env = DEFAULT_ENV;
});

//
//
// Run tests
//

describe("GetHeaderFrom function", () => {
  it("Is a function", () => {
    expect(getHeaderFrom).toBeFunction();
  });
  it("Works", async () => {
    const headers = {
      [HTTP.HEADER.PROJECT.KEY]: MOCK.KEY,
    };
    const response = await getHeaderFrom(HTTP.HEADER.PROJECT.KEY, headers);
    expect(response).toBe(MOCK.KEY);
  });
  it("Searches in `header`", async () => {
    const event = {
      header: {
        [HTTP.HEADER.PROJECT.KEY]: MOCK.KEY,
      },
    };
    const response = await getHeaderFrom(HTTP.HEADER.PROJECT.KEY, event);
    expect(response).toBe(MOCK.KEY);
  });
  it("Searches in `headers`", async () => {
    const event = {
      headers: {
        [HTTP.HEADER.PROJECT.KEY]: MOCK.KEY,
      },
    };
    const response = await getHeaderFrom(HTTP.HEADER.PROJECT.KEY, event);
    expect(response).toBe(MOCK.KEY);
  });
  it("Returns `undefined` when not found in `headers`", async () => {
    const event = {
      header: {
        [HTTP.HEADER.PROJECT.KEY]: MOCK.KEY,
      },
      headers: {
        [HTTP.HEADER.PROJECT.KEY]: MOCK.KEY,
      },
      [HTTP.HEADER.PROJECT.KEY]: MOCK.KEY,
    };
    const response = await getHeaderFrom("bogus", event);
    expect(response).toBeUndefined();
  });
});
