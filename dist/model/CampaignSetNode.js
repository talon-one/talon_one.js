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
 * The CampaignSetNode model module.
 * @module model/CampaignSetNode
 * @version 4.0.0
 */
var CampaignSetNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSetNode</code>.
   * @alias module:model/CampaignSetNode
   * @param type {String} 
   */
  function CampaignSetNode(type) {
    _classCallCheck(this, CampaignSetNode);

    CampaignSetNode.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignSetNode, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CampaignSetNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetNode} The populated <code>CampaignSetNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSetNode();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CampaignSetNode;
}();
/**
 * @member {String} type
 */


CampaignSetNode.prototype['type'] = undefined;
var _default = CampaignSetNode;
exports["default"] = _default;