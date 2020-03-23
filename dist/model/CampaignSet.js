"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CampaignSetBranchNode = _interopRequireDefault(require("./CampaignSetBranchNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CampaignSet model module.
 * @module model/CampaignSet
 * @version 1.0.0
 */
var CampaignSet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSet</code>.
   * 
   * @alias module:model/CampaignSet
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param set {module:model/CampaignSetBranchNode} 
   */
  function CampaignSet(id, created, applicationId, set) {
    _classCallCheck(this, CampaignSet);

    CampaignSet.initialize(this, id, created, applicationId, set);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignSet, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, applicationId, set) {
      obj['id'] = id;
      obj['created'] = created;
      obj['applicationId'] = applicationId;
      obj['set'] = set;
    }
    /**
     * Constructs a <code>CampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSet} obj Optional instance to populate.
     * @return {module:model/CampaignSet} The populated <code>CampaignSet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSet();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('set')) {
          obj['set'] = _CampaignSetBranchNode["default"].constructFromObject(data['set']);
        }
      }

      return obj;
    }
  }]);

  return CampaignSet;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


CampaignSet.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

CampaignSet.prototype['created'] = undefined;
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */

CampaignSet.prototype['applicationId'] = undefined;
/**
 * @member {module:model/CampaignSetBranchNode} set
 */

CampaignSet.prototype['set'] = undefined;
var _default = CampaignSet;
exports["default"] = _default;