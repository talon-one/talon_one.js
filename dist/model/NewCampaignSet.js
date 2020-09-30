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
 * The NewCampaignSet model module.
 * @module model/NewCampaignSet
 * @version 4.2.0
 */
var NewCampaignSet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewCampaignSet</code>.
   * 
   * @alias module:model/NewCampaignSet
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param version {Number} Version of the campaign set
   * @param set {module:model/CampaignSetBranchNode} 
   */
  function NewCampaignSet(applicationId, version, set) {
    _classCallCheck(this, NewCampaignSet);

    NewCampaignSet.initialize(this, applicationId, version, set);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewCampaignSet, null, [{
    key: "initialize",
    value: function initialize(obj, applicationId, version, set) {
      obj['applicationId'] = applicationId;
      obj['version'] = version;
      obj['set'] = set;
    }
    /**
     * Constructs a <code>NewCampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignSet} obj Optional instance to populate.
     * @return {module:model/NewCampaignSet} The populated <code>NewCampaignSet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewCampaignSet();

        if (data.hasOwnProperty('applicationId')) {
          obj['applicationId'] = _ApiClient["default"].convertToType(data['applicationId'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('set')) {
          obj['set'] = _CampaignSetBranchNode["default"].constructFromObject(data['set']);
        }
      }

      return obj;
    }
  }]);

  return NewCampaignSet;
}();
/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */


NewCampaignSet.prototype['applicationId'] = undefined;
/**
 * Version of the campaign set
 * @member {Number} version
 */

NewCampaignSet.prototype['version'] = undefined;
/**
 * @member {module:model/CampaignSetBranchNode} set
 */

NewCampaignSet.prototype['set'] = undefined;
var _default = NewCampaignSet;
exports["default"] = _default;