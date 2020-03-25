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
 * The LoyaltyMembership model module.
 * @module model/LoyaltyMembership
 * @version 4.0.0
 */
var LoyaltyMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoyaltyMembership</code>.
   * @alias module:model/LoyaltyMembership
   * @param loyaltyProgramId {Number} The ID of the loyalty program belonging to this entity.
   */
  function LoyaltyMembership(loyaltyProgramId) {
    _classCallCheck(this, LoyaltyMembership);

    LoyaltyMembership.initialize(this, loyaltyProgramId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoyaltyMembership, null, [{
    key: "initialize",
    value: function initialize(obj, loyaltyProgramId) {
      obj['loyaltyProgramId'] = loyaltyProgramId;
    }
    /**
     * Constructs a <code>LoyaltyMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyMembership} obj Optional instance to populate.
     * @return {module:model/LoyaltyMembership} The populated <code>LoyaltyMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoyaltyMembership();

        if (data.hasOwnProperty('joined')) {
          obj['joined'] = _ApiClient["default"].convertToType(data['joined'], 'Date');
        }

        if (data.hasOwnProperty('loyaltyProgramId')) {
          obj['loyaltyProgramId'] = _ApiClient["default"].convertToType(data['loyaltyProgramId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LoyaltyMembership;
}();
/**
 * The moment in which the loyalty program was joined.
 * @member {Date} joined
 */


LoyaltyMembership.prototype['joined'] = undefined;
/**
 * The ID of the loyalty program belonging to this entity.
 * @member {Number} loyaltyProgramId
 */

LoyaltyMembership.prototype['loyaltyProgramId'] = undefined;
var _default = LoyaltyMembership;
exports["default"] = _default;