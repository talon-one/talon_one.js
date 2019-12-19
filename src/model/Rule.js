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
    define(['ApiClient', 'model/Binding'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Binding'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.Rule = factory(root.TalonOne.ApiClient, root.TalonOne.Binding);
  }
}(this, function(ApiClient, Binding) {
  'use strict';




  /**
   * The Rule model module.
   * @module model/Rule
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>Rule</code>.
   * @alias module:model/Rule
   * @class
   * @param title {String} A short description of the rule.
   * @param condition {Array.<Object>} A Talang expression that will be evaluated in the context of the given event.
   * @param effects {Array.<Object>} An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
   */
  var exports = function(title, condition, effects) {
    var _this = this;

    _this['title'] = title;


    _this['condition'] = condition;
    _this['effects'] = effects;
  };

  /**
   * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rule} obj Optional instance to populate.
   * @return {module:model/Rule} The populated <code>Rule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('bindings')) {
        obj['bindings'] = ApiClient.convertToType(data['bindings'], [Binding]);
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], [Object]);
      }
      if (data.hasOwnProperty('effects')) {
        obj['effects'] = ApiClient.convertToType(data['effects'], [Object]);
      }
    }
    return obj;
  }

  /**
   * A short description of the rule.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A longer, more detailed description of the rule.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
   * @member {Array.<module:model/Binding>} bindings
   */
  exports.prototype['bindings'] = undefined;
  /**
   * A Talang expression that will be evaluated in the context of the given event.
   * @member {Array.<Object>} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
   * @member {Array.<Object>} effects
   */
  exports.prototype['effects'] = undefined;



  return exports;
}));


