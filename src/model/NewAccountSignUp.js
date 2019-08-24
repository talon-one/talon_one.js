/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.NewAccountSignUp = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewAccountSignUp model module.
   * @module model/NewAccountSignUp
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>NewAccountSignUp</code>.
   * 
   * @alias module:model/NewAccountSignUp
   * @class
   * @param email {String} The email address associated with your account.
   * @param password {String} The password for your account.
   * @param companyName {String} 
   */
  var exports = function(email, password, companyName) {
    var _this = this;

    _this['email'] = email;
    _this['password'] = password;
    _this['companyName'] = companyName;
  };

  /**
   * Constructs a <code>NewAccountSignUp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewAccountSignUp} obj Optional instance to populate.
   * @return {module:model/NewAccountSignUp} The populated <code>NewAccountSignUp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
    }
    return obj;
  }

  /**
   * The email address associated with your account.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The password for your account.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;



  return exports;
}));


