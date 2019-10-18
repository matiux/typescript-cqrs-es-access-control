`docker-compose --file docker/docker-compose.yml run -u node nodejs /bin/ash`

`./node_modules/.bin/jest --config ./test/jest-e2e.json building-controller.e2e.spec.ts`

package.json
```json
  "_moduleAliases": {
    "@common": "dist/access-control/common",
    "@building": "dist/access-control/building",
    "@": "dist/access-control"
  }
```

tsconfig.json
```json
    "paths": {
      "@common/*": ["src/access-control/common/*"],
      "@building/*": ["src/access-control/building/*"],
      "@/*": ["src/access-control/*"],
    }
```