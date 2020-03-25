"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SetDiscountPerItemEffectProps model module.
 * @module model/SetDiscountPerItemEffectProps
 * @version 4.0.0
 */
var SetDiscountPerItemEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetDiscountPerItemEffectProps</code>.
   * The properties specific to the \&quot;setDiscountPerItem\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set per item discount\&quot; effect. This is a discount that should be applied on a specific item.
   * @alias module:model/SetDiscountPerItemEffectProps
   * @param name {String} The name/description of this discount
   * @param value {Number} The total monetary value of the discount
   * @param position {Number} The index of the item in the cart items list on which this discount should be applied
   */
  function SetDiscountPerItemEffectProps(name, value, position) {
    _classCallCheck(this, SetDiscountPerItemEffectProps);

    SetDiscountPerItemEffectProps.initialize(this, name, value, position);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SetDiscountPerItemEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, name, value, position) {
      obj['name'] = name;
      obj['value'] = value;
      obj['position'] = position;
    }
    /**
     * Constructs a <code>SetDiscountPerItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountPerItemEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountPerItemEffectProps} The populated <code>SetDiscountPerItemEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetDiscountPerItemEffectProps();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SetDiscountPerItemEffectProps;
}();
/**
 * The name/description of this discount
 * @member {String} name
 */


SetDiscountPerItemEffectProps.prototype['name'] = undefined;
/**
 * The total monetary value of the discount
 * @member {Number} value
 */

SetDiscountPerItemEffectProps.prototype['value'] = undefined;
/**
 * The index of the item in the cart items list on which this discount should be applied
 * @member {Number} position
 */

SetDiscountPerItemEffectProps.prototype['position'] = undefined;
var _default = SetDiscountPerItemEffectProps;
exports["default"] = _default;