const TalononeApi = require('../src/index');

var defaultClient = TalononeApi.ApiClient.instance;
defaultClient.basePath = 'http://localhost:9000';
var manager_auth = defaultClient.authentications['manager_auth'];
manager_auth.apiKeyPrefix = 'Bearer';

var apiInstance = new TalononeApi.ManagementApi();

var opts = {
  body: new TalononeApi.LoginParams('demo@talon.one', 'Demo1234')
};
apiInstance
  .createSession(opts)
  .then(
    function(data) {
      manager_auth.apiKey = data.token;
    },
    function(error) {
      console.error(error);
    }
  )
  .then(() => {
    var applicationId = 1; // Number

    apiInstance.getRuleset(applicationId, 1, 1).then(function(data) {
      console.log(JSON.parse(JSON.stringify(data)));
    }, function(error) {
      console.error(error);
    });;
  }).then(() => {

  }).catch((error) => {
    console.log(error)
  })
