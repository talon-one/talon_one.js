"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MultipleCustomerProfileIntegrationRequestItem = _interopRequireDefault(require("./MultipleCustomerProfileIntegrationRequestItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MultipleCustomerProfileIntegrationRequest model module.
 * @module model/MultipleCustomerProfileIntegrationRequest
 * @version 4.2.0
 */
var MultipleCustomerProfileIntegrationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultipleCustomerProfileIntegrationRequest</code>.
   * @alias module:model/MultipleCustomerProfileIntegrationRequest
   */
  function MultipleCustomerProfileIntegrationRequest() {
    _classCallCheck(this, MultipleCustomerProfileIntegrationRequest);

    MultipleCustomerProfileIntegrationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MultipleCustomerProfileIntegrationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationRequest} The populated <code>MultipleCustomerProfileIntegrationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultipleCustomerProfileIntegrationRequest();

        if (data.hasOwnProperty('customerProfiles')) {
          obj['customerProfiles'] = _ApiClient["default"].convertToType(data['customerProfiles'], [_MultipleCustomerProfileIntegrationRequestItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return MultipleCustomerProfileIntegrationRequest;
}();
/**
 * @member {Array.<module:model/MultipleCustomerProfileIntegrationRequestItem>} customerProfiles
 */


MultipleCustomerProfileIntegrationRequest.prototype['customerProfiles'] = undefined;
var _default = MultipleCustomerProfileIntegrationRequest;
exports["default"] = _default;