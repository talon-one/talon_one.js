'use strict'

const TalononeApi = require('talon_one')
const defaultClient = TalononeApi.ApiClient.instance
const api = new TalononeApi.ManagementApi()
const util = require('util')

const manager_auth = defaultClient.authentications['manager_auth']

const setBearerToken = function(res) {
  manager_auth.apiKey = res['token']
  // every request to the management api is authenticated via an Authorization header with the prefix `Bearer`.
  manager_auth.apiKeyPrefix = 'Bearer'
}

defaultClient.basePath = 'http://localhost:9000'

var opts = {
  body: {
    // user login credentials.
    email: 'demo@talon.one',
    password: 'demo1234'
  }
}

api
  // 1. create a new session.
  .createSession(opts, (err, data) => {
    if (err) {
      console.log(err)
    }
  })
  // 2. use the token returned as `Authentication: Bearer XXXXXXXXXXXX`.
  .then((res, err) => {
    setBearerToken(res)
  })
  // 3. start requests to the management api.
  .then((res, err) => {
    // this data is relative to your application.
    api.getRulesets(217, 177, {}).then(res => {
      console.log(util.inspect(res['data'], { showHidden: false, depth: null }))
    })
  })
  // .then((res, err) => {
  //   api.destroySession()
  // })
  .catch(err => {
    console.log(err)
  })