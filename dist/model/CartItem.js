"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CartItemAdjustment = _interopRequireDefault(require("./CartItemAdjustment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CartItem model module.
 * @module model/CartItem
 * @version 4.0.0
 */
var CartItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CartItem</code>.
   * @alias module:model/CartItem
   * @param name {String} 
   * @param sku {String} 
   * @param quantity {Number} 
   * @param price {Number} 
   */
  function CartItem(name, sku, quantity, price) {
    _classCallCheck(this, CartItem);

    CartItem.initialize(this, name, sku, quantity, price);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CartItem, null, [{
    key: "initialize",
    value: function initialize(obj, name, sku, quantity, price) {
      obj['name'] = name;
      obj['sku'] = sku;
      obj['quantity'] = quantity;
      obj['price'] = price;
    }
    /**
     * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartItem} obj Optional instance to populate.
     * @return {module:model/CartItem} The populated <code>CartItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CartItem();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('sku')) {
          obj['sku'] = _ApiClient["default"].convertToType(data['sku'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('length')) {
          obj['length'] = _ApiClient["default"].convertToType(data['length'], 'Number');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('adjustment')) {
          obj['adjustment'] = _CartItemAdjustment["default"].constructFromObject(data['adjustment']);
        }
      }

      return obj;
    }
  }]);

  return CartItem;
}();
/**
 * @member {String} name
 */


CartItem.prototype['name'] = undefined;
/**
 * @member {String} sku
 */

CartItem.prototype['sku'] = undefined;
/**
 * @member {Number} quantity
 */

CartItem.prototype['quantity'] = undefined;
/**
 * @member {Number} price
 */

CartItem.prototype['price'] = undefined;
/**
 * @member {String} category
 */

CartItem.prototype['category'] = undefined;
/**
 * Weight of item in mm
 * @member {Number} weight
 */

CartItem.prototype['weight'] = undefined;
/**
 * Height of item in mm
 * @member {Number} height
 */

CartItem.prototype['height'] = undefined;
/**
 * Width of item in mm
 * @member {Number} width
 */

CartItem.prototype['width'] = undefined;
/**
 * Length of item in mm
 * @member {Number} length
 */

CartItem.prototype['length'] = undefined;
/**
 * Position of the Cart Item in the Cart (calculated internally)
 * @member {Number} position
 */

CartItem.prototype['position'] = undefined;
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */

CartItem.prototype['attributes'] = undefined;
/**
 * @member {module:model/CartItemAdjustment} adjustment
 */

CartItem.prototype['adjustment'] = undefined;
var _default = CartItem;
exports["default"] = _default;