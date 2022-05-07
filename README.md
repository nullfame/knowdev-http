# KnowDev HTTP 🌐

## 📋 Usage

``` bash
npm install --save @knowdev/http
```

## 📖 Reference

### Constants 💬

### Functions 🛠

#### getHeaderFrom(headerKey:string, searchObject:object)

Case-insensitive search inside `searchObject` for `headerKey`.  Also looks in `header` and `headers` child object of `searchObject`, if `headerKey` not found at top-level.

## 🚀 Deployment

`npm publish --access=public`

## 📝 Changelog

| Version | Change |
| ------- | ------ |
| 1.1.1   | Add `getHeaderFrom()` function (`1.1.0` had broken export) |
| 1.0.0   | Initial release of constants only |

## 🛣 Roadmap

### Wishlist 🌠

## 📜 License

All rights reserved. Safe for use around pets.
