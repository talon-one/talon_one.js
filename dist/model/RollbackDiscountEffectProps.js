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
 * The RollbackDiscountEffectProps model module.
 * @module model/RollbackDiscountEffectProps
 * @version 1.0.0
 */
var RollbackDiscountEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RollbackDiscountEffectProps</code>.
   * The properties specific to the \&quot;rollbackDiscount\&quot; effect. This gets triggered whenever previously closed session is now cancelled and a setDiscount effect was cancelled on our internal discount limit counters.
   * @alias module:model/RollbackDiscountEffectProps
   * @param name {String} The name of the \"setDiscount\" effect that was rolled back
   * @param value {Number} The value of the discount that was rolled back
   */
  function RollbackDiscountEffectProps(name, value) {
    _classCallCheck(this, RollbackDiscountEffectProps);

    RollbackDiscountEffectProps.initialize(this, name, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RollbackDiscountEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, name, value) {
      obj['name'] = name;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>RollbackDiscountEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackDiscountEffectProps} obj Optional instance to populate.
     * @return {module:model/RollbackDiscountEffectProps} The populated <code>RollbackDiscountEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RollbackDiscountEffectProps();

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

  return RollbackDiscountEffectProps;
}();
/**
 * The name of the \"setDiscount\" effect that was rolled back
 * @member {String} name
 */


RollbackDiscountEffectProps.prototype['name'] = undefined;
/**
 * The value of the discount that was rolled back
 * @member {Number} value
 */

RollbackDiscountEffectProps.prototype['value'] = undefined;
var _default = RollbackDiscountEffectProps;
exports["default"] = _default;