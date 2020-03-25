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
 * The NewCustomerProfile model module.
 * @module model/NewCustomerProfile
 * @version 4.0.0
 */
var NewCustomerProfile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewCustomerProfile</code>.
   * @alias module:model/NewCustomerProfile
   */
  function NewCustomerProfile() {
    _classCallCheck(this, NewCustomerProfile);

    NewCustomerProfile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewCustomerProfile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NewCustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomerProfile} obj Optional instance to populate.
     * @return {module:model/NewCustomerProfile} The populated <code>NewCustomerProfile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewCustomerProfile();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return NewCustomerProfile;
}();
/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */


NewCustomerProfile.prototype['attributes'] = undefined;
var _default = NewCustomerProfile;
exports["default"] = _default;