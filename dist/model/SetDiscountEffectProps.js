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
 * The SetDiscountEffectProps model module.
 * @module model/SetDiscountEffectProps
 * @version 1.0.0
 */
var SetDiscountEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetDiscountEffectProps</code>.
   * The properties specific to the \&quot;setDiscount\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;set discount\&quot; effect. This is a discount that should be applied globally on the session total.
   * @alias module:model/SetDiscountEffectProps
   * @param name {String} The name/description of this discount
   * @param value {Number} The total monetary value of the discount
   */
  function SetDiscountEffectProps(name, value) {
    _classCallCheck(this, SetDiscountEffectProps);

    SetDiscountEffectProps.initialize(this, name, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SetDiscountEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, name, value) {
      obj['name'] = name;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>SetDiscountEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDiscountEffectProps} obj Optional instance to populate.
     * @return {module:model/SetDiscountEffectProps} The populated <code>SetDiscountEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetDiscountEffectProps();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SetDiscountEffectProps;
}();
/**
 * The name/description of this discount
 * @member {String} name
 */


SetDiscountEffectProps.prototype['name'] = undefined;
/**
 * The total monetary value of the discount
 * @member {Number} value
 */

SetDiscountEffectProps.prototype['value'] = undefined;
var _default = SetDiscountEffectProps;
exports["default"] = _default;