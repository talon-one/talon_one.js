"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoyaltyProgramLedgers = _interopRequireDefault(require("./LoyaltyProgramLedgers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Loyalty model module.
 * @module model/Loyalty
 * @version 1.0.0
 */
var Loyalty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Loyalty</code>.
   * Customer specific information about loyalty points.
   * @alias module:model/Loyalty
   * @param programs {Object.<String, module:model/LoyaltyProgramLedgers>} A map holding information about the loyalty programs balance
   */
  function Loyalty(programs) {
    _classCallCheck(this, Loyalty);

    Loyalty.initialize(this, programs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Loyalty, null, [{
    key: "initialize",
    value: function initialize(obj, programs) {
      obj['programs'] = programs;
    }
    /**
     * Constructs a <code>Loyalty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Loyalty} obj Optional instance to populate.
     * @return {module:model/Loyalty} The populated <code>Loyalty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Loyalty();

        if (data.hasOwnProperty('programs')) {
          obj['programs'] = _ApiClient["default"].convertToType(data['programs'], {
            'String': _LoyaltyProgramLedgers["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return Loyalty;
}();
/**
 * A map holding information about the loyalty programs balance
 * @member {Object.<String, module:model/LoyaltyProgramLedgers>} programs
 */


Loyalty.prototype['programs'] = undefined;
var _default = Loyalty;
exports["default"] = _default;