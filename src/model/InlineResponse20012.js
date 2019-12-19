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
    define(['ApiClient', 'model/ApplicationCustomer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApplicationCustomer'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.InlineResponse20012 = factory(root.TalonOne.ApiClient, root.TalonOne.ApplicationCustomer);
  }
}(this, function(ApiClient, ApplicationCustomer) {
  'use strict';




  /**
   * The InlineResponse20012 model module.
   * @module model/InlineResponse20012
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * @alias module:model/InlineResponse20012
   * @class
   * @param totalResultSize {Number} 
   * @param data {Array.<module:model/ApplicationCustomer>} 
   */
  var exports = function(totalResultSize, data) {
    var _this = this;

    _this['totalResultSize'] = totalResultSize;
    _this['data'] = data;
  };

  /**
   * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20012} obj Optional instance to populate.
   * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalResultSize')) {
        obj['totalResultSize'] = ApiClient.convertToType(data['totalResultSize'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ApplicationCustomer]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} totalResultSize
   */
  exports.prototype['totalResultSize'] = undefined;
  /**
   * @member {Array.<module:model/ApplicationCustomer>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


