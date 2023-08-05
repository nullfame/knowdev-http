/* eslint-disable global-require */

//
//
// Mock constants
//

//
//
// Mock modules
//

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

describe("FormatError function", () => {
  it("Works", async () => {
    const formatError = require("../formatError.function");
    const response = await formatError();
    console.log("response :>> ", response);
    expect(response.statusCode).toBe(200);
  });
});
