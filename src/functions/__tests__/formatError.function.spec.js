const { InternalError } = require("@knowdev/errors");
const { matchers } = require("jest-json-schema");
const formatError = require("../formatError.function");

//
//
// Configuration
//

expect.extend(matchers);

const jsonApiErrorSchema = {
  type: "object",
  properties: {
    errors: {
      type: "array",
      items: {
        type: "object",
        properties: {
          status: { type: "number" },
          title: { type: "string" },
          detail: { type: "string" },
        },
        required: ["status", "title"],
      },
    },
  },
  required: ["errors"],
};

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
  it("Works", () => {
    const response = formatError(new InternalError());
    expect(response).toBeObject();
    expect(response.status).toBeNumber();
    expect(response.data).toMatchSchema(jsonApiErrorSchema);
  });
});
