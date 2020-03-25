"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerProfile = _interopRequireDefault(require("./CustomerProfile"));

var _Referral = _interopRequireDefault(require("./Referral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomerInventory model module.
 * @module model/CustomerInventory
 * @version 4.0.0
 */
var CustomerInventory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerInventory</code>.
   * @alias module:model/CustomerInventory
   */
  function CustomerInventory() {
    _classCallCheck(this, CustomerInventory);

    CustomerInventory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerInventory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerInventory} obj Optional instance to populate.
     * @return {module:model/CustomerInventory} The populated <code>CustomerInventory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerInventory();

        if (data.hasOwnProperty('profile')) {
          obj['profile'] = _CustomerProfile["default"].constructFromObject(data['profile']);
        }

        if (data.hasOwnProperty('referrals')) {
          obj['referrals'] = _ApiClient["default"].convertToType(data['referrals'], [_Referral["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CustomerInventory;
}();
/**
 * @member {module:model/CustomerProfile} profile
 */


CustomerInventory.prototype['profile'] = undefined;
/**
 * @member {Array.<module:model/Referral>} referrals
 */

CustomerInventory.prototype['referrals'] = undefined;
var _default = CustomerInventory;
exports["default"] = _default;