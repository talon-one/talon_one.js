/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorSource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorSource'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.APIError = factory(root.TalononeApi.ApiClient, root.TalononeApi.ErrorSource);
  }
}(this, function(ApiClient, ErrorSource) {
  'use strict';




  /**
   * The APIError model module.
   * @module model/APIError
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>APIError</code>.
   * @alias module:model/APIError
   * @class
   * @param title {String} Short description of the problem.
   * @param source {module:model/ErrorSource} 
   */
  var exports = function(title, source) {
    var _this = this;

    _this['title'] = title;

    _this['source'] = source;
  };

  /**
   * Constructs a <code>APIError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIError} obj Optional instance to populate.
   * @return {module:model/APIError} The populated <code>APIError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ErrorSource.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * Short description of the problem.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Longer description of this specific instance of the problem.
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {module:model/ErrorSource} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));

