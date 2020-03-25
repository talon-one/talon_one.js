"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Referral = _interopRequireDefault(require("./Referral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 4.0.0
 */
var InlineResponse2007 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * @alias module:model/InlineResponse2007
   * @param hasMore {Boolean} 
   * @param data {Array.<module:model/Referral>} 
   */
  function InlineResponse2007(hasMore, data) {
    _classCallCheck(this, InlineResponse2007);

    InlineResponse2007.initialize(this, hasMore, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2007, null, [{
    key: "initialize",
    value: function initialize(obj, hasMore, data) {
      obj['hasMore'] = hasMore;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2007();

        if (data.hasOwnProperty('hasMore')) {
          obj['hasMore'] = _ApiClient["default"].convertToType(data['hasMore'], 'Boolean');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Referral["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2007;
}();
/**
 * @member {Boolean} hasMore
 */


InlineResponse2007.prototype['hasMore'] = undefined;
/**
 * @member {Array.<module:model/Referral>} data
 */

InlineResponse2007.prototype['data'] = undefined;
var _default = InlineResponse2007;
exports["default"] = _default;