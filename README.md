# talon_one

## Getting started

### Installation

```
npm install talon_one --save
```

## Examples

```javascript
var TalononeApi = require('talonone_api');

var defaultClient = TalononeApi.ApiClient.instance;

// Configure API key authorization: api_key_v1
var api_key_v1 = defaultClient.authentications['api_key_v1'];
api_key_v1.apiKey = 'dbc644d33aa74d582bd9479c59e16f970fe13bf34a208c39d6c7fa7586968468';
api_key_v1.apiKeyPrefix = 'ApiKey-v1';
defaultClient.basePath = 'http://localhost:9000';

var api = new TalononeApi.IntegrationApi();

var opts = {
  body: new TalononeApi.NewCustomerProfile()
};

opts.body['attributes'] = {
  Email: "helloworld@yahoo.de"
}

api.updateCustomerProfile('exampleprofileid', opts).then(
  function(data) {
    console.log(JSON.stringify(data));
  },
  function(error) {
    console.error(error);
  }
);
```

## Docs

For more details on authorization refer to the [Talon.One docs](https://developers.talon.one/Integration-API/Authentication)