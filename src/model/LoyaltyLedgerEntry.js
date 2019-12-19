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
    root.TalonOne.LoyaltyLedgerEntry = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LoyaltyLedgerEntry model module.
   * @module model/LoyaltyLedgerEntry
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>LoyaltyLedgerEntry</code>.
   * A single row of the ledger, describing one addition or deduction.
   * @alias module:model/LoyaltyLedgerEntry
   * @class
   * @param created {Date} 
   * @param programID {Number} 
   * @param customerProfileID {String} 
   * @param type {module:model/LoyaltyLedgerEntry.TypeEnum} 
   * @param amount {Number} 
   * @param name {String} A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
   * @param subLedgerID {String} This specifies if we are adding loyalty points to the main ledger or a subledger
   */
  var exports = function(created, programID, customerProfileID, type, amount, name, subLedgerID) {
    var _this = this;

    _this['created'] = created;
    _this['programID'] = programID;
    _this['customerProfileID'] = customerProfileID;


    _this['type'] = type;
    _this['amount'] = amount;

    _this['name'] = name;
    _this['subLedgerID'] = subLedgerID;
  };

  /**
   * Constructs a <code>LoyaltyLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoyaltyLedgerEntry} obj Optional instance to populate.
   * @return {module:model/LoyaltyLedgerEntry} The populated <code>LoyaltyLedgerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('programID')) {
        obj['programID'] = ApiClient.convertToType(data['programID'], 'Number');
      }
      if (data.hasOwnProperty('customerProfileID')) {
        obj['customerProfileID'] = ApiClient.convertToType(data['customerProfileID'], 'String');
      }
      if (data.hasOwnProperty('customerSessionID')) {
        obj['customerSessionID'] = ApiClient.convertToType(data['customerSessionID'], 'String');
      }
      if (data.hasOwnProperty('eventID')) {
        obj['eventID'] = ApiClient.convertToType(data['eventID'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('expiryDate')) {
        obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subLedgerID')) {
        obj['subLedgerID'] = ApiClient.convertToType(data['subLedgerID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Number} programID
   */
  exports.prototype['programID'] = undefined;
  /**
   * @member {String} customerProfileID
   */
  exports.prototype['customerProfileID'] = undefined;
  /**
   * @member {String} customerSessionID
   */
  exports.prototype['customerSessionID'] = undefined;
  /**
   * @member {Number} eventID
   */
  exports.prototype['eventID'] = undefined;
  /**
   * @member {module:model/LoyaltyLedgerEntry.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Date} expiryDate
   */
  exports.prototype['expiryDate'] = undefined;
  /**
   * A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * This specifies if we are adding loyalty points to the main ledger or a subledger
   * @member {String} subLedgerID
   */
  exports.prototype['subLedgerID'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "addition"
     * @const
     */
    "addition": "addition",
    /**
     * value: "subtraction"
     * @const
     */
    "subtraction": "subtraction"  };


  return exports;
}));


