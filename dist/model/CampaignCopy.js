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
 * The CampaignCopy model module.
 * @module model/CampaignCopy
 * @version 4.2.0
 */
var CampaignCopy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCopy</code>.
   * @alias module:model/CampaignCopy
   * @param applicationIds {Array.<Number>} Application IDs of the applications to which a campaign should be copied to
   */
  function CampaignCopy(applicationIds) {
    _classCallCheck(this, CampaignCopy);

    CampaignCopy.initialize(this, applicationIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignCopy, null, [{
    key: "initialize",
    value: function initialize(obj, applicationIds) {
      obj['applicationIds'] = applicationIds;
    }
    /**
     * Constructs a <code>CampaignCopy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignCopy} obj Optional instance to populate.
     * @return {module:model/CampaignCopy} The populated <code>CampaignCopy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCopy();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('applicationIds')) {
          obj['applicationIds'] = _ApiClient["default"].convertToType(data['applicationIds'], ['Number']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CampaignCopy;
}();
/**
 * Name of the copied campaign (Defaults to \"Copy of original campaign name\")
 * @member {String} name
 */


CampaignCopy.prototype['name'] = undefined;
/**
 * Application IDs of the applications to which a campaign should be copied to
 * @member {Array.<Number>} applicationIds
 */

CampaignCopy.prototype['applicationIds'] = undefined;
/**
 * A detailed description of the campaign.
 * @member {String} description
 */

CampaignCopy.prototype['description'] = undefined;
/**
 * Datetime when the campaign will become active.
 * @member {Date} startTime
 */

CampaignCopy.prototype['startTime'] = undefined;
/**
 * Datetime when the campaign will become in-active.
 * @member {Date} endTime
 */

CampaignCopy.prototype['endTime'] = undefined;
/**
 * A list of tags for the campaign.
 * @member {Array.<String>} tags
 */

CampaignCopy.prototype['tags'] = undefined;
var _default = CampaignCopy;
exports["default"] = _default;