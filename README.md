# File Upload Service

A Node and Express REST service for uploading and downloading files, built to
run as a registered service inside a Eureka service-discovery setup.

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| `POST` | `/upload` | Upload a single file (multipart form data) |
| `GET` | `/files` | List stored files with their download URLs |
| `GET` | `/files/:name` | Download one file |

## How it works

Multer handles the multipart parsing and writes into `resources/static/assets/uploads`,
with a file size limit applied in the upload middleware. On startup the service
registers itself with Eureka through `eureka-helper.js`, so an API gateway can
route to it by service name.

## Stack

Node.js · Express · Multer · CORS · `eureka-js-client`

## Running locally

```bash
npm install
node server.js
```

Eureka registration expects a registry reachable at the host configured in
`eureka-helper.js`.
