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
    define(['ApiClient', 'model/CartItemAdjustment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartItemAdjustment'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.CartItem = factory(root.TalonOne.ApiClient, root.TalonOne.CartItemAdjustment);
  }
}(this, function(ApiClient, CartItemAdjustment) {
  'use strict';




  /**
   * The CartItem model module.
   * @module model/CartItem
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>CartItem</code>.
   * @alias module:model/CartItem
   * @class
   * @param name {String} 
   * @param sku {String} 
   * @param quantity {Number} 
   * @param price {Number} 
   */
  var exports = function(name, sku, quantity, price) {
    var _this = this;

    _this['name'] = name;
    _this['sku'] = sku;
    _this['quantity'] = quantity;
    _this['price'] = price;








  };

  /**
   * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartItem} obj Optional instance to populate.
   * @return {module:model/CartItem} The populated <code>CartItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('adjustment')) {
        obj['adjustment'] = CartItemAdjustment.constructFromObject(data['adjustment']);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Weight of item in mm
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * Height of item in mm
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Width of item in mm
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * Length of item in mm
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * Position of the Cart Item in the Cart (calculated internally)
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * Arbitrary properties associated with this item
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {module:model/CartItemAdjustment} adjustment
   */
  exports.prototype['adjustment'] = undefined;



  return exports;
}));


