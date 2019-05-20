var TalonOne = require('../src/index')

var applicationId = 216
var applicationKey = '0000111122223333'
var client = new TalonOne.IntegrationClient('http://localhost:9000', applicationId, applicationKey)

var sessionId = 'some-identifier-for-this-session'
var customerId = 'id-used-by-my-company'


client.updateCustomerProfile(customerId, {
  attributes: {
    // only include properties you want to update, null values are ignored
    Name: 'Val Kust',
  }
}, function (err, integrationState) {
  if (err) {
    console.log(err)
  } else {
    console.log(integrationState.profile)
    console.log(integrationState.session)
    console.log(integrationState.event)
  }
})


client.updateCustomerSession(sessionId, {
  // associate this session with the profile we created above
  profileId: customerId,
  // set referral ID for this session
  referral: 'somereferral-identifier',
}, function (err, integrationState) {

  if (err){
    console.log(err)
  } else {
    console.log(integrationState.profile)
    console.log(integrationState.session)
    console.log(integrationState.event)
  }
})


// sessionId, customerId, eventType, eventData, callback
client.trackEvent(sessionId, customerId, 'bought_upgrade', {}, function (err, integrationState) {
  if (err) {
    console.log(err)
  } else {
    console.log(integrationState.profile)
    console.log(integrationState.session)
    console.log(integrationState.event)
  }
})
