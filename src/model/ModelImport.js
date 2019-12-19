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
    root.TalonOne.ModelImport = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelImport model module.
   * @module model/ModelImport
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>ModelImport</code>.
   * 
   * @alias module:model/ModelImport
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param entity {module:model/ModelImport.EntityEnum} The name of the entity that was imported.
   * @param amount {Number} The number of members that imported.
   */
  var exports = function(id, created, accountId, userId, entity, amount) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['accountId'] = accountId;
    _this['userId'] = userId;
    _this['entity'] = entity;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>ModelImport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelImport} obj Optional instance to populate.
   * @return {module:model/ModelImport} The populated <code>ModelImport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('entity')) {
        obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The ID of the account that owns this entity.
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The ID of the account that owns this entity.
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * The name of the entity that was imported.
   * @member {module:model/ModelImport.EntityEnum} entity
   */
  exports.prototype['entity'] = undefined;
  /**
   * The number of members that imported.
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;


  /**
   * Allowed values for the <code>entity</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntityEnum = {
    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon"  };


  return exports;
}));


