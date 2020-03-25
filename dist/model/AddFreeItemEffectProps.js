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
 * The AddFreeItemEffectProps model module.
 * @module model/AddFreeItemEffectProps
 * @version 4.0.0
 */
var AddFreeItemEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddFreeItemEffectProps</code>.
   * The properties specific to the \&quot;addFreeItem\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add free item\&quot; effect.
   * @alias module:model/AddFreeItemEffectProps
   * @param sku {String} SKU of the item that needs to be added
   * @param name {String} The name/description of the effect
   */
  function AddFreeItemEffectProps(sku, name) {
    _classCallCheck(this, AddFreeItemEffectProps);

    AddFreeItemEffectProps.initialize(this, sku, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddFreeItemEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, sku, name) {
      obj['sku'] = sku;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>AddFreeItemEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFreeItemEffectProps} obj Optional instance to populate.
     * @return {module:model/AddFreeItemEffectProps} The populated <code>AddFreeItemEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddFreeItemEffectProps();

        if (data.hasOwnProperty('sku')) {
          obj['sku'] = _ApiClient["default"].convertToType(data['sku'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddFreeItemEffectProps;
}();
/**
 * SKU of the item that needs to be added
 * @member {String} sku
 */


AddFreeItemEffectProps.prototype['sku'] = undefined;
/**
 * The name/description of the effect
 * @member {String} name
 */

AddFreeItemEffectProps.prototype['name'] = undefined;
var _default = AddFreeItemEffectProps;
exports["default"] = _default;