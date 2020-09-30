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
 * The CampaignGroup model module.
 * @module model/CampaignGroup
 * @version 4.2.0
 */
var CampaignGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignGroup</code>.
   * 
   * @alias module:model/CampaignGroup
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param name {String} The name of this campaign group.
   */
  function CampaignGroup(id, created, modified, accountId, name) {
    _classCallCheck(this, CampaignGroup);

    CampaignGroup.initialize(this, id, created, modified, accountId, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignGroup, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, modified, accountId, name) {
      obj['id'] = id;
      obj['created'] = created;
      obj['modified'] = modified;
      obj['accountId'] = accountId;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>CampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignGroup} obj Optional instance to populate.
     * @return {module:model/CampaignGroup} The populated <code>CampaignGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignGroup();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

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

  return CampaignGroup;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


CampaignGroup.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

CampaignGroup.prototype['created'] = undefined;
/**
 * The exact moment this entity was last modified.
 * @member {Date} modified
 */

CampaignGroup.prototype['modified'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

CampaignGroup.prototype['accountId'] = undefined;
/**
 * The name of this campaign group.
 * @member {String} name
 */

CampaignGroup.prototype['name'] = undefined;
/**
 * A longer description of the campaign group.
 * @member {String} description
 */

CampaignGroup.prototype['description'] = undefined;
/**
 * A list of the IDs of the applications that this campaign group is enabled for
 * @member {Array.<Number>} subscribedApplicationsIds
 */

CampaignGroup.prototype['subscribedApplicationsIds'] = undefined;
/**
 * A list of the IDs of the campaigns that this campaign group owns
 * @member {Array.<Number>} campaignIds
 */

CampaignGroup.prototype['campaignIds'] = undefined;
var _default = CampaignGroup;
exports["default"] = _default;