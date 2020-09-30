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
 * The UpdateCampaignGroup model module.
 * @module model/UpdateCampaignGroup
 * @version 4.2.0
 */
var UpdateCampaignGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateCampaignGroup</code>.
   * 
   * @alias module:model/UpdateCampaignGroup
   * @param name {String} The name of this campaign group.
   */
  function UpdateCampaignGroup(name) {
    _classCallCheck(this, UpdateCampaignGroup);

    UpdateCampaignGroup.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateCampaignGroup, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>UpdateCampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCampaignGroup} obj Optional instance to populate.
     * @return {module:model/UpdateCampaignGroup} The populated <code>UpdateCampaignGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateCampaignGroup();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('subscribedApplicationsIds')) {
          obj['subscribedApplicationsIds'] = _ApiClient["default"].convertToType(data['subscribedApplicationsIds'], ['Number']);
        }

        if (data.hasOwnProperty('campaignIds')) {
          obj['campaignIds'] = _ApiClient["default"].convertToType(data['campaignIds'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return UpdateCampaignGroup;
}();
/**
 * The name of this campaign group.
 * @member {String} name
 */


UpdateCampaignGroup.prototype['name'] = undefined;
/**
 * A longer description of the campaign group.
 * @member {String} description
 */

UpdateCampaignGroup.prototype['description'] = undefined;
/**
 * A list of the IDs of the applications that this campaign group is enabled for
 * @member {Array.<Number>} subscribedApplicationsIds
 */

UpdateCampaignGroup.prototype['subscribedApplicationsIds'] = undefined;
/**
 * A list of the IDs of the campaigns that this campaign group owns
 * @member {Array.<Number>} campaignIds
 */

UpdateCampaignGroup.prototype['campaignIds'] = undefined;
var _default = UpdateCampaignGroup;
exports["default"] = _default;