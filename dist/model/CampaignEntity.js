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
 * The CampaignEntity model module.
 * @module model/CampaignEntity
 * @version 1.0.0
 */
var CampaignEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignEntity</code>.
   * @alias module:model/CampaignEntity
   * @param campaignId {Number} The ID of the campaign that owns this entity.
   */
  function CampaignEntity(campaignId) {
    _classCallCheck(this, CampaignEntity);

    CampaignEntity.initialize(this, campaignId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignEntity, null, [{
    key: "initialize",
    value: function initialize(obj, campaignId) {
      obj['campaignId'] = campaignId;
    }
    /**
     * Constructs a <code>CampaignEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignEntity} obj Optional instance to populate.
     * @return {module:model/CampaignEntity} The populated <code>CampaignEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignEntity();

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CampaignEntity;
}();
/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */


CampaignEntity.prototype['campaignId'] = undefined;
var _default = CampaignEntity;
exports["default"] = _default;