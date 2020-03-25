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
 * The NewFeatureFlags model module.
 * @module model/NewFeatureFlags
 * @version 4.0.0
 */
var NewFeatureFlags = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewFeatureFlags</code>.
   * @alias module:model/NewFeatureFlags
   */
  function NewFeatureFlags() {
    _classCallCheck(this, NewFeatureFlags);

    NewFeatureFlags.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewFeatureFlags, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewFeatureFlags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewFeatureFlags} obj Optional instance to populate.
     * @return {module:model/NewFeatureFlags} The populated <code>NewFeatureFlags</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewFeatureFlags();

        if (data.hasOwnProperty('loyalty')) {
          obj['loyalty'] = _ApiClient["default"].convertToType(data['loyalty'], 'Boolean');
        }

        if (data.hasOwnProperty('coupons_without_count')) {
          obj['coupons_without_count'] = _ApiClient["default"].convertToType(data['coupons_without_count'], 'Boolean');
        }

        if (data.hasOwnProperty('betaEffects')) {
          obj['betaEffects'] = _ApiClient["default"].convertToType(data['betaEffects'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return NewFeatureFlags;
}();
/**
 * Whether the account has access to the loyalty features or not
 * @member {Boolean} loyalty
 */


NewFeatureFlags.prototype['loyalty'] = undefined;
/**
 * Whether the account queries coupons with or without total result size
 * @member {Boolean} coupons_without_count
 */

NewFeatureFlags.prototype['coupons_without_count'] = undefined;
/**
 * Whether the account can test beta effects or not
 * @member {Boolean} betaEffects
 */

NewFeatureFlags.prototype['betaEffects'] = undefined;
var _default = NewFeatureFlags;
exports["default"] = _default;