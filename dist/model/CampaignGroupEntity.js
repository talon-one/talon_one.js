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
 * The CampaignGroupEntity model module.
 * @module model/CampaignGroupEntity
 * @version 4.2.0
 */
var CampaignGroupEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignGroupEntity</code>.
   * @alias module:model/CampaignGroupEntity
   */
  function CampaignGroupEntity() {
    _classCallCheck(this, CampaignGroupEntity);

    CampaignGroupEntity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignGroupEntity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CampaignGroupEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignGroupEntity} obj Optional instance to populate.
     * @return {module:model/CampaignGroupEntity} The populated <code>CampaignGroupEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignGroupEntity();

        if (data.hasOwnProperty('campaignGroups')) {
          obj['campaignGroups'] = _ApiClient["default"].convertToType(data['campaignGroups'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return CampaignGroupEntity;
}();
/**
 * The IDs of the campaign groups that own this entity.
 * @member {Array.<Number>} campaignGroups
 */


CampaignGroupEntity.prototype['campaignGroups'] = undefined;
var _default = CampaignGroupEntity;
exports["default"] = _default;