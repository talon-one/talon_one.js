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
    define(['ApiClient', 'model/LoyaltySubLedger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LoyaltySubLedger'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.LoyaltyLedger = factory(root.TalonOne.ApiClient, root.TalonOne.LoyaltySubLedger);
  }
}(this, function(ApiClient, LoyaltySubLedger) {
  'use strict';




  /**
   * The LoyaltyLedger model module.
   * @module model/LoyaltyLedger
   * @version 3.1.1
   */

  /**
   * Constructs a new <code>LoyaltyLedger</code>.
   * Ledger of Balance in Loyalty Program for a Customer
   * @alias module:model/LoyaltyLedger
   * @class
   * @param ledger {module:model/LoyaltySubLedger} The balance of the main ledger in the loyalty program
   */
  var exports = function(ledger) {
    var _this = this;

    _this['ledger'] = ledger;

  };

  /**
   * Constructs a <code>LoyaltyLedger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoyaltyLedger} obj Optional instance to populate.
   * @return {module:model/LoyaltyLedger} The populated <code>LoyaltyLedger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ledger')) {
        obj['ledger'] = LoyaltySubLedger.constructFromObject(data['ledger']);
      }
      if (data.hasOwnProperty('subLedgers')) {
        obj['subLedgers'] = ApiClient.convertToType(data['subLedgers'], {'String': LoyaltySubLedger});
      }
    }
    return obj;
  }

  /**
   * The balance of the main ledger in the loyalty program
   * @member {module:model/LoyaltySubLedger} ledger
   */
  exports.prototype['ledger'] = undefined;
  /**
   * A map containing a list of all loyalty subledger balances
   * @member {Object.<String, module:model/LoyaltySubLedger>} subLedgers
   */
  exports.prototype['subLedgers'] = undefined;



  return exports;
}));


