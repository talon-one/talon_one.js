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
 * The FeatureFlag model module.
 * @module model/FeatureFlag
 * @version 1.0.0
 */
var FeatureFlag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeatureFlag</code>.
   * @alias module:model/FeatureFlag
   * @param name {String} The name for the featureflag
   * @param value {String} The value for the featureflag
   */
  function FeatureFlag(name, value) {
    _classCallCheck(this, FeatureFlag);

    FeatureFlag.initialize(this, name, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeatureFlag, null, [{
    key: "initialize",
    value: function initialize(obj, name, value) {
      obj['name'] = name;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>FeatureFlag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureFlag} obj Optional instance to populate.
     * @return {module:model/FeatureFlag} The populated <code>FeatureFlag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeatureFlag();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return FeatureFlag;
}();
/**
 * The name for the featureflag
 * @member {String} name
 */


FeatureFlag.prototype['name'] = undefined;
/**
 * The value for the featureflag
 * @member {String} value
 */

FeatureFlag.prototype['value'] = undefined;
/**
 * The exact moment this entity was last created.
 * @member {Date} created
 */

FeatureFlag.prototype['created'] = undefined;
/**
 * The exact moment this entity was last modified.
 * @member {Date} modified
 */

FeatureFlag.prototype['modified'] = undefined;
var _default = FeatureFlag;
exports["default"] = _default;