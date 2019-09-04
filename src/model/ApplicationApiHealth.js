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
    root.TalonOne.ApplicationApiHealth = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationApiHealth model module.
   * @module model/ApplicationApiHealth
   * @version 3.1.1
   */

  /**
   * Constructs a new <code>ApplicationApiHealth</code>.
   * Report of health of the API connection of an application
   * @alias module:model/ApplicationApiHealth
   * @class
   * @param summary {module:model/ApplicationApiHealth.SummaryEnum} One-word summary of the health of the API connection of an application
   * @param lastUsed {Date} time of last request relevant to the API health test
   */
  var exports = function(summary, lastUsed) {
    var _this = this;

    _this['summary'] = summary;
    _this['lastUsed'] = lastUsed;
  };

  /**
   * Constructs a <code>ApplicationApiHealth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationApiHealth} obj Optional instance to populate.
   * @return {module:model/ApplicationApiHealth} The populated <code>ApplicationApiHealth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('lastUsed')) {
        obj['lastUsed'] = ApiClient.convertToType(data['lastUsed'], 'Date');
      }
    }
    return obj;
  }

  /**
   * One-word summary of the health of the API connection of an application
   * @member {module:model/ApplicationApiHealth.SummaryEnum} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * time of last request relevant to the API health test
   * @member {Date} lastUsed
   */
  exports.prototype['lastUsed'] = undefined;


  /**
   * Allowed values for the <code>summary</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SummaryEnum = {
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",
    /**
     * value: "CRITICAL"
     * @const
     */
    "CRITICAL": "CRITICAL",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"  };


  return exports;
}));


