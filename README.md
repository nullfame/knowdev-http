# KnowDev HTTP 🌐

## 📋 Usage

``` bash
npm install --save @knowdev/http
```

## 📖 Reference

### Constants 💬

### Functions 🛠

#### formatError(error:ProjectError)

Returns an object with a numeric `status` and and object `data` suitable for a JSON:API-complaint HTTP response

#### getHeaderFrom(headerKey:string, searchObject:object)

Case-insensitive search inside `searchObject` for `headerKey`.  Also looks in `header` and `headers` child object of `searchObject`, if `headerKey` not found at top-level.

## 🚀 Deployment

`npm publish --access=public`

## 📝 Changelog

| Version | Change |
| ------- | ------ |
| 1.2.0   | Catch errors thrown by `getHeaderFrom()`, minor upgrades and cleanup |
| 1.1.3   | Add `HTTP.HEADER.SIGNATURE.ED25519`, `HTTP.HEADER.SIGNATURE.TIMESTAMP` |
| 1.1.2   | Add `HTTP.CODE.UNAUTHORIZED`, `HTTP.HEADER.PROJECT.SECRET` |
| 1.1.1   | Add `getHeaderFrom()` function (`1.1.0` had broken export) |
| 1.0.0   | Initial release of constants only |

## 🛣 Roadmap

### Wishlist 🌠

## 📜 License

All rights reserved. Safe for use around pets.
