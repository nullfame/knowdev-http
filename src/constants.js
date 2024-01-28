//
//
// Constants
//

const HTTP = {
  ALLOW: {
    ANY: "*",
  },
  CODE: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    FOUND: 302,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    GONE: 410,
    TEAPOT: 418,
    INTERNAL_ERROR: 500,
    BAD_GATEWAY: 502,
    UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
  },
  CONTENT: {
    ANY: "*/*",
    HTML: "text/html",
    JSON: "application/json",
    TEXT: "text/plain",
  },
  HEADER: {
    ACCEPT: "Accept",
    ACCEPT_ENCODING: "Accept-Encoding",
    ALLOW: {
      HEADERS: "Access-Control-Allow-Headers",
      METHODS: "Access-Control-Allow-Methods",
      ORIGIN: "Access-Control-Allow-Origin",
    },
    AMAZON: {
      CF_ID: "X-Amz-Cf-Id",
      CLOUDFRONT_COUNTRY: "CloudFront-Viewer-Country",
      CLOUDFRONT_DESKTOP: "CloudFront-Is-Desktop-Viewer",
      CLOUDFRONT_MOBILE: "CloudFront-Is-Mobile-Viewer",
      CLOUDFRONT_PROTOCOL: "CloudFront-Forwarded-Proto",
      CLOUDFRONT_SMARTTV: "CloudFront-Is-SmartTV-Viewer",
      CLOUDFRONT_TABLET: "CloudFront-Is-Tablet-Viewer",
      TRACE_ID: "X-Amzn-Trace-Id",
    },
    CACHE_CONTROL: "Cache-Control",
    CONTENT_TYPE: "Content-Type",
    COOKIE: {
      REQUEST: "Cookie",
      RESPONSE: "Set-Cookie",
    },
    FORWARDED: {
      FOR: "X-Forwarded-For",
      PORT: "X-Forwarded-Port",
      PROTOCOL: "X-Forwarded-Proto",
    },
    HOST: "Host",
    POSTMAN: {
      TOKEN: "Postman-Token",
    },
    POWERED_BY: "X-Powered-By",
    PROJECT: {
      ACCOUNT: "X-Project-Account",
      CALLER: "X-Project-Caller",
      ENVIRONMENT: "X-Project-Environment",
      KEY: "X-Project-Key",
      HANDLER: "X-Project-Handler",
      INVOCATION: "X-Project-Invocation",
      ROOT_INVOCATION: "X-Project-Root-Invocation",
      SECRET: "X-Project-Secret",
      SESSION: "X-Project-Session",
      VERSION: "X-Project-Version",
    },
    SIGNATURE: {
      ED25519: "X-Signature-Ed25519",
      TIMESTAMP: "X-Signature-Timestamp",
    },
    USER_AGENT: "User-Agent",
    VIA: "Via",
  },
  METHOD: {
    DELETE: "DELETE",
    HEAD: "HEAD",
    GET: "GET",
    OPTIONS: "OPTIONS",
    POST: "POST",
    PUT: "PUT",
  },
  RESPONSE: {},
};

//
//
// Export
//

module.exports = HTTP;
