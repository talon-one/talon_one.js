"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CampaignSetNode = _interopRequireDefault(require("./CampaignSetNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CampaignSetBranchNode model module.
 * @module model/CampaignSetBranchNode
 * @version 4.0.0
 */
var CampaignSetBranchNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignSetBranchNode</code>.
   * @alias module:model/CampaignSetBranchNode
   * @param type {module:model/CampaignSetBranchNode.TypeEnum} Indicates the node type
   * @param name {String} Name of the set
   * @param operator {module:model/CampaignSetBranchNode.OperatorEnum} How does the set operates on its elements
   * @param elements {Array.<module:model/CampaignSetNode>} Child elements of this set
   */
  function CampaignSetBranchNode(type, name, operator, elements) {
    _classCallCheck(this, CampaignSetBranchNode);

    CampaignSetBranchNode.initialize(this, type, name, operator, elements);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CampaignSetBranchNode, null, [{
    key: "initialize",
    value: function initialize(obj, type, name, operator, elements) {
      obj['type'] = type;
      obj['name'] = name;
      obj['operator'] = operator;
      obj['elements'] = elements;
    }
    /**
     * Constructs a <code>CampaignSetBranchNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetBranchNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetBranchNode} The populated <code>CampaignSetBranchNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignSetBranchNode();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('operator')) {
          obj['operator'] = _ApiClient["default"].convertToType(data['operator'], 'String');
        }

        if (data.hasOwnProperty('elements')) {
          obj['elements'] = _ApiClient["default"].convertToType(data['elements'], [_CampaignSetNode["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CampaignSetBranchNode;
}();
/**
 * Indicates the node type
 * @member {module:model/CampaignSetBranchNode.TypeEnum} type
 */


CampaignSetBranchNode.prototype['type'] = undefined;
/**
 * Name of the set
 * @member {String} name
 */

CampaignSetBranchNode.prototype['name'] = undefined;
/**
 * How does the set operates on its elements
 * @member {module:model/CampaignSetBranchNode.OperatorEnum} operator
 */

CampaignSetBranchNode.prototype['operator'] = undefined;
/**
 * Child elements of this set
 * @member {Array.<module:model/CampaignSetNode>} elements
 */

CampaignSetBranchNode.prototype['elements'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CampaignSetBranchNode['TypeEnum'] = {
  /**
   * value: "SET"
   * @const
   */
  "SET": "SET"
};
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

CampaignSetBranchNode['OperatorEnum'] = {
  /**
   * value: "ALL"
   * @const
   */
  "ALL": "ALL",

  /**
   * value: "FIRST"
   * @const
   */
  "FIRST": "FIRST"
};
var _default = CampaignSetBranchNode;
exports["default"] = _default;