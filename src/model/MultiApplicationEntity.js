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
    root.TalonOne.MultiApplicationEntity = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MultiApplicationEntity model module.
   * @module model/MultiApplicationEntity
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>MultiApplicationEntity</code>.
   * @alias module:model/MultiApplicationEntity
   * @class
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
   */
  var exports = function(applicationIds) {
    var _this = this;

    _this['applicationIds'] = applicationIds;
  };

  /**
   * Constructs a <code>MultiApplicationEntity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiApplicationEntity} obj Optional instance to populate.
   * @return {module:model/MultiApplicationEntity} The populated <code>MultiApplicationEntity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicationIds')) {
        obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * The IDs of the applications that are related to this entity.
   * @member {Array.<Number>} applicationIds
   */
  exports.prototype['applicationIds'] = undefined;



  return exports;
}));


