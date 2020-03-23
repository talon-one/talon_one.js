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
 * The CouponReservations model module.
 * @module model/CouponReservations
 * @version 1.0.0
 */
var CouponReservations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CouponReservations</code>.
   * @alias module:model/CouponReservations
   * @param integrationIDs {Array.<String>} List of Integration IDs
   */
  function CouponReservations(integrationIDs) {
    _classCallCheck(this, CouponReservations);

    CouponReservations.initialize(this, integrationIDs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CouponReservations, null, [{
    key: "initialize",
    value: function initialize(obj, integrationIDs) {
      obj['integrationIDs'] = integrationIDs;
    }
    /**
     * Constructs a <code>CouponReservations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponReservations} obj Optional instance to populate.
     * @return {module:model/CouponReservations} The populated <code>CouponReservations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CouponReservations();

        if (data.hasOwnProperty('integrationIDs')) {
          obj['integrationIDs'] = _ApiClient["default"].convertToType(data['integrationIDs'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CouponReservations;
}();
/**
 * List of Integration IDs
 * @member {Array.<String>} integrationIDs
 */


CouponReservations.prototype['integrationIDs'] = undefined;
var _default = CouponReservations;
exports["default"] = _default;