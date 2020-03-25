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
 * The FeaturesFeed model module.
 * @module model/FeaturesFeed
 * @version 4.0.0
 */
var FeaturesFeed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeaturesFeed</code>.
   * 
   * @alias module:model/FeaturesFeed
   */
  function FeaturesFeed() {
    _classCallCheck(this, FeaturesFeed);

    FeaturesFeed.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeaturesFeed, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FeaturesFeed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeaturesFeed} obj Optional instance to populate.
     * @return {module:model/FeaturesFeed} The populated <code>FeaturesFeed</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeaturesFeed();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('pubDate')) {
          obj['pubDate'] = _ApiClient["default"].convertToType(data['pubDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FeaturesFeed;
}();
/**
 * @member {String} title
 */


FeaturesFeed.prototype['title'] = undefined;
/**
 * @member {String} pubDate
 */

FeaturesFeed.prototype['pubDate'] = undefined;
var _default = FeaturesFeed;
exports["default"] = _default;