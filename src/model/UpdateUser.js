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
    root.TalonOne.UpdateUser = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateUser model module.
   * @module model/UpdateUser
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>UpdateUser</code>.
   * 
   * @alias module:model/UpdateUser
   * @class
   * @param email {String} The email address associated with your account.
   */
  var exports = function(email) {
    var _this = this;

    _this['email'] = email;









  };

  /**
   * Constructs a <code>UpdateUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateUser} obj Optional instance to populate.
   * @return {module:model/UpdateUser} The populated <code>UpdateUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
      if (data.hasOwnProperty('policy')) {
        obj['policy'] = ApiClient.convertToType(data['policy'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('releaseUpdate')) {
        obj['releaseUpdate'] = ApiClient.convertToType(data['releaseUpdate'], 'Boolean');
      }
      if (data.hasOwnProperty('latestFeature')) {
        obj['latestFeature'] = ApiClient.convertToType(data['latestFeature'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['Number']);
      }
      if (data.hasOwnProperty('applicationNotificationSubscriptions')) {
        obj['applicationNotificationSubscriptions'] = ApiClient.convertToType(data['applicationNotificationSubscriptions'], Object);
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
   * Your name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Your old password.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Your new password.
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;
  /**
   * a blob of acl json
   * @member {String} policy
   */
  exports.prototype['policy'] = undefined;
  /**
   * New state (\"deactivated\" or \"active\") for the user. Only usable by admins for the user.
   * @member {module:model/UpdateUser.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Update the user via email
   * @member {Boolean} releaseUpdate
   */
  exports.prototype['releaseUpdate'] = undefined;
  /**
   * The latest feature you've been notified.
   * @member {String} latestFeature
   */
  exports.prototype['latestFeature'] = undefined;
  /**
   * Update
   * @member {Array.<Number>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * @member {Object} applicationNotificationSubscriptions
   */
  exports.prototype['applicationNotificationSubscriptions'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "deactivated"
     * @const
     */
    "deactivated": "deactivated",
    /**
     * value: "active"
     * @const
     */
    "active": "active"  };


  return exports;
}));


