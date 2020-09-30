"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerProfileAudienceRequestItem = _interopRequireDefault(require("./CustomerProfileAudienceRequestItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CustomerProfileAudienceRequest model module.
 * @module model/CustomerProfileAudienceRequest
 * @version 4.2.0
 */
var CustomerProfileAudienceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerProfileAudienceRequest</code>.
   * @alias module:model/CustomerProfileAudienceRequest
   */
  function CustomerProfileAudienceRequest() {
    _classCallCheck(this, CustomerProfileAudienceRequest);

    CustomerProfileAudienceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerProfileAudienceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerProfileAudienceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileAudienceRequest} obj Optional instance to populate.
     * @return {module:model/CustomerProfileAudienceRequest} The populated <code>CustomerProfileAudienceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerProfileAudienceRequest();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_CustomerProfileAudienceRequestItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CustomerProfileAudienceRequest;
}();
/**
 * @member {Array.<module:model/CustomerProfileAudienceRequestItem>} data
 */


CustomerProfileAudienceRequest.prototype['data'] = undefined;
var _default = CustomerProfileAudienceRequest;
exports["default"] = _default;