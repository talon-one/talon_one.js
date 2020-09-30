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
 * The FeatureFlags model module.
 * @module model/FeatureFlags
 * @version 4.2.0
 */
var FeatureFlags = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeatureFlags</code>.
   * 
   * @alias module:model/FeatureFlags
   * @param accountId {Number} The ID of the account that owns this entity.
   */
  function FeatureFlags(accountId) {
    _classCallCheck(this, FeatureFlags);

    FeatureFlags.initialize(this, accountId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeatureFlags, null, [{
    key: "initialize",
    value: function initialize(obj, accountId) {
      obj['accountId'] = accountId;
    }
    /**
     * Constructs a <code>FeatureFlags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureFlags} obj Optional instance to populate.
     * @return {module:model/FeatureFlags} The populated <code>FeatureFlags</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeatureFlags();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

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

  return FeatureFlags;
}();
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */


FeatureFlags.prototype['accountId'] = undefined;
/**
 * Whether the account has access to the loyalty features or not
 * @member {Boolean} loyalty
 */

FeatureFlags.prototype['loyalty'] = undefined;
/**
 * Whether the account queries coupons with or without total result size
 * @member {Boolean} coupons_without_count
 */

FeatureFlags.prototype['coupons_without_count'] = undefined;
/**
 * Whether the account can test beta effects or not
 * @member {Boolean} betaEffects
 */

FeatureFlags.prototype['betaEffects'] = undefined;
var _default = FeatureFlags;
exports["default"] = _default;