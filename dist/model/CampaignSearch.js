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
 * The CampaignSearch model module.
 * @module model/CampaignSearch
 * @version 4.2.0
 */
var CampaignSearch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSearch</code>.
   * @alias module:model/CampaignSearch
   * @param attributes {Object} Properties to match against a campaign. All provided attributes will be exactly matched against campaign attributes
   */
  function CampaignSearch(attributes) {
    _classCallCheck(this, CampaignSearch);

    CampaignSearch.initialize(this, attributes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignSearch, null, [{
    key: "initialize",
    value: function initialize(obj, attributes) {
      obj['attributes'] = attributes;
    }
    /**
     * Constructs a <code>CampaignSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSearch} obj Optional instance to populate.
     * @return {module:model/CampaignSearch} The populated <code>CampaignSearch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSearch();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], Object);
        }
      }

      return obj;
    }
  }]);

  return CampaignSearch;
}();
/**
 * Properties to match against a campaign. All provided attributes will be exactly matched against campaign attributes
 * @member {Object} attributes
 */


CampaignSearch.prototype['attributes'] = undefined;
var _default = CampaignSearch;
exports["default"] = _default;