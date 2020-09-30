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
 * The ApplicationCustomerSearch model module.
 * @module model/ApplicationCustomerSearch
 * @version 4.2.0
 */
var ApplicationCustomerSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplicationCustomerSearch</code>.
   * @alias module:model/ApplicationCustomerSearch
   */
  function ApplicationCustomerSearch() {
    _classCallCheck(this, ApplicationCustomerSearch);

    ApplicationCustomerSearch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationCustomerSearch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationCustomerSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCustomerSearch} obj Optional instance to populate.
     * @return {module:model/ApplicationCustomerSearch} The populated <code>ApplicationCustomerSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationCustomerSearch();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }

        if (data.hasOwnProperty('integrationIDs')) {
          obj['integrationIDs'] = _ApiClient["default"].convertToType(data['integrationIDs'], ['String']);
        }

        if (data.hasOwnProperty('profileIDs')) {
          obj['profileIDs'] = _ApiClient["default"].convertToType(data['profileIDs'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ApplicationCustomerSearch;
}();
/**
 * Properties to match against a customer profile. All provided attributes will be exactly matched against profile attributes
 * @member {Object} attributes
 */


ApplicationCustomerSearch.prototype['attributes'] = undefined;
/**
 * @member {Array.<String>} integrationIDs
 */

ApplicationCustomerSearch.prototype['integrationIDs'] = undefined;
/**
 * @member {Array.<Number>} profileIDs
 */

ApplicationCustomerSearch.prototype['profileIDs'] = undefined;
var _default = ApplicationCustomerSearch;
exports["default"] = _default;