/* eslint-disable import/no-unresolved */
const HTTP = require("./constants");

//
//
// Decorate with Functions
//

HTTP.formatError = require("./functions/formatError.function");
HTTP.getHeaderFrom = require("./functions/getHeaderFrom.function");

//
//
// Export
//

module.exports = HTTP;
