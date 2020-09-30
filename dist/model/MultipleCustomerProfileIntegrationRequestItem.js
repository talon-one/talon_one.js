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
 * The MultipleCustomerProfileIntegrationRequestItem model module.
 * @module model/MultipleCustomerProfileIntegrationRequestItem
 * @version 4.2.0
 */
var MultipleCustomerProfileIntegrationRequestItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultipleCustomerProfileIntegrationRequestItem</code>.
   * 
   * @alias module:model/MultipleCustomerProfileIntegrationRequestItem
   * @param integrationId {String} The custom identifier for this profile, must be unique within the account.
   */
  function MultipleCustomerProfileIntegrationRequestItem(integrationId) {
    _classCallCheck(this, MultipleCustomerProfileIntegrationRequestItem);

    MultipleCustomerProfileIntegrationRequestItem.initialize(this, integrationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MultipleCustomerProfileIntegrationRequestItem, null, [{
    key: "initialize",
    value: function initialize(obj, integrationId) {
      obj['integrationId'] = integrationId;
    }
    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationRequestItem} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationRequestItem} The populated <code>MultipleCustomerProfileIntegrationRequestItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultipleCustomerProfileIntegrationRequestItem();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MultipleCustomerProfileIntegrationRequestItem;
}();
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */


MultipleCustomerProfileIntegrationRequestItem.prototype['attributes'] = undefined;
/**
 * The custom identifier for this profile, must be unique within the account.
 * @member {String} integrationId
 */

MultipleCustomerProfileIntegrationRequestItem.prototype['integrationId'] = undefined;
var _default = MultipleCustomerProfileIntegrationRequestItem;
exports["default"] = _default;