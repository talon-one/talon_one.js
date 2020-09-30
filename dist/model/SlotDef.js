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
 * The SlotDef model module.
 * @module model/SlotDef
 * @version 4.2.0
 */
var SlotDef = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SlotDef</code>.
   * @alias module:model/SlotDef
   * @param name {String} The dot-separated path to this slot for use in Talang.
   * @param type {String} The type of this slot, one of string, number, boolean, or list[type].
   * @param title {String} Campaigner-friendly name for the slot.
   * @param writable {Boolean} Whether or not this slot can be updated by rule effects.
   */
  function SlotDef(name, type, title, writable) {
    _classCallCheck(this, SlotDef);

    SlotDef.initialize(this, name, type, title, writable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SlotDef, null, [{
    key: "initialize",
    value: function initialize(obj, name, type, title, writable) {
      obj['name'] = name;
      obj['type'] = type;
      obj['title'] = title;
      obj['writable'] = writable;
    }
    /**
     * Constructs a <code>SlotDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlotDef} obj Optional instance to populate.
     * @return {module:model/SlotDef} The populated <code>SlotDef</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SlotDef();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('help')) {
          obj['help'] = _ApiClient["default"].convertToType(data['help'], 'String');
        }

        if (data.hasOwnProperty('writable')) {
          obj['writable'] = _ApiClient["default"].convertToType(data['writable'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SlotDef;
}();
/**
 * The dot-separated path to this slot for use in Talang.
 * @member {String} name
 */


SlotDef.prototype['name'] = undefined;
/**
 * The type of this slot, one of string, number, boolean, or list[type].
 * @member {String} type
 */

SlotDef.prototype['type'] = undefined;
/**
 * Campaigner-friendly name for the slot.
 * @member {String} title
 */

SlotDef.prototype['title'] = undefined;
/**
 * A short description of the slot.
 * @member {String} description
 */

SlotDef.prototype['description'] = undefined;
/**
 * Extended help text for the slot.
 * @member {String} help
 */

SlotDef.prototype['help'] = undefined;
/**
 * Whether or not this slot can be updated by rule effects.
 * @member {Boolean} writable
 */

SlotDef.prototype['writable'] = undefined;
var _default = SlotDef;
exports["default"] = _default;