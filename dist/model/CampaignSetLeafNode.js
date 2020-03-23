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
 * The CampaignSetLeafNode model module.
 * @module model/CampaignSetLeafNode
 * @version 1.0.0
 */
var CampaignSetLeafNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSetLeafNode</code>.
   * @alias module:model/CampaignSetLeafNode
   * @param type {module:model/CampaignSetLeafNode.TypeEnum} Indicates the node type
   * @param campaignId {Number} ID of the campaign
   */
  function CampaignSetLeafNode(type, campaignId) {
    _classCallCheck(this, CampaignSetLeafNode);

    CampaignSetLeafNode.initialize(this, type, campaignId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignSetLeafNode, null, [{
    key: "initialize",
    value: function initialize(obj, type, campaignId) {
      obj['type'] = type;
      obj['campaignId'] = campaignId;
    }
    /**
     * Constructs a <code>CampaignSetLeafNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetLeafNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetLeafNode} The populated <code>CampaignSetLeafNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSetLeafNode();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('campaignId')) {
          obj['campaignId'] = _ApiClient["default"].convertToType(data['campaignId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CampaignSetLeafNode;
}();
/**
 * Indicates the node type
 * @member {module:model/CampaignSetLeafNode.TypeEnum} type
 */


CampaignSetLeafNode.prototype['type'] = undefined;
/**
 * ID of the campaign
 * @member {Number} campaignId
 */

CampaignSetLeafNode.prototype['campaignId'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CampaignSetLeafNode['TypeEnum'] = {
  /**
   * value: "CAMPAIGN"
   * @const
   */
  "CAMPAIGN": "CAMPAIGN"
};
var _default = CampaignSetLeafNode;
exports["default"] = _default;