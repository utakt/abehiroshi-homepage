# abehiroshi-homepage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 備忘録
#### Azure Storage(v2)の静的サイトをAzure CDNで利用する
Azure CDN > エンドポイント > 配信元を以下のように設定
- 配信元の種類 → カスタムの配信元
- 配信元のホスト名 → Azure Storageの静的サイトのホスト
- 配信元のホストヘッダー → Azure Storageの静的サイトのホスト
- 配信元のホストパス → 設定なしでもよい

#### jsとcssをまとめてWebpackバンドルする
Vue Cliだと以下
https://filosophy.org/code/bundling-vue-css-and-js-into-a-single-output-file/