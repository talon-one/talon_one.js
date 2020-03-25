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
 * The UpdateAttributeEffectProps model module.
 * @module model/UpdateAttributeEffectProps
 * @version 4.0.0
 */
var UpdateAttributeEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateAttributeEffectProps</code>.
   * The properties specific to the \&quot;updateAttribute\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;update an attribute\&quot; effect.
   * @alias module:model/UpdateAttributeEffectProps
   * @param path {String} The exact path of the attribute that was updated
   * @param value {Object} The new value of this attribute. Value can be any of the following types (time, string, number, location, boolean) or a list of any of those types
   */
  function UpdateAttributeEffectProps(path, value) {
    _classCallCheck(this, UpdateAttributeEffectProps);

    UpdateAttributeEffectProps.initialize(this, path, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateAttributeEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, path, value) {
      obj['path'] = path;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>UpdateAttributeEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAttributeEffectProps} obj Optional instance to populate.
     * @return {module:model/UpdateAttributeEffectProps} The populated <code>UpdateAttributeEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateAttributeEffectProps();

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], Object);
        }
      }

      return obj;
    }
  }]);

  return UpdateAttributeEffectProps;
}();
/**
 * The exact path of the attribute that was updated
 * @member {String} path
 */


UpdateAttributeEffectProps.prototype['path'] = undefined;
/**
 * The new value of this attribute. Value can be any of the following types (time, string, number, location, boolean) or a list of any of those types
 * @member {Object} value
 */

UpdateAttributeEffectProps.prototype['value'] = undefined;
var _default = UpdateAttributeEffectProps;
exports["default"] = _default;