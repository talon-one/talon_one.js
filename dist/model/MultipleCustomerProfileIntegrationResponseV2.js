"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IntegrationStateV = _interopRequireDefault(require("./IntegrationStateV2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MultipleCustomerProfileIntegrationResponseV2 model module.
 * @module model/MultipleCustomerProfileIntegrationResponseV2
 * @version 4.2.0
 */
var MultipleCustomerProfileIntegrationResponseV2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultipleCustomerProfileIntegrationResponseV2</code>.
   * @alias module:model/MultipleCustomerProfileIntegrationResponseV2
   */
  function MultipleCustomerProfileIntegrationResponseV2() {
    _classCallCheck(this, MultipleCustomerProfileIntegrationResponseV2);

    MultipleCustomerProfileIntegrationResponseV2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MultipleCustomerProfileIntegrationResponseV2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationResponseV2} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationResponseV2} The populated <code>MultipleCustomerProfileIntegrationResponseV2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultipleCustomerProfileIntegrationResponseV2();

        if (data.hasOwnProperty('integrationStates')) {
          obj['integrationStates'] = _ApiClient["default"].convertToType(data['integrationStates'], [_IntegrationStateV["default"]]);
        }
      }

      return obj;
    }
  }]);

  return MultipleCustomerProfileIntegrationResponseV2;
}();
/**
 * @member {Array.<module:model/IntegrationStateV2>} integrationStates
 */


MultipleCustomerProfileIntegrationResponseV2.prototype['integrationStates'] = undefined;
var _default = MultipleCustomerProfileIntegrationResponseV2;
exports["default"] = _default;