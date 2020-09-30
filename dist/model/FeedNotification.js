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
 * The FeedNotification model module.
 * @module model/FeedNotification
 * @version 4.2.0
 */
var FeedNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeedNotification</code>.
   * A feed notification for CAMA users
   * @alias module:model/FeedNotification
   * @param title {String} Title of the feed notification
   * @param created {Date} Timestamp of the moment this feed notification was created
   * @param updated {Date} Timestamp of the moment this feed notification was last updated
   * @param articleUrl {String} URL to the feed notification in the help center
   * @param type {module:model/FeedNotification.TypeEnum} The type of the feed notification
   * @param body {String} Body of the feed notification
   */
  function FeedNotification(title, created, updated, articleUrl, type, body) {
    _classCallCheck(this, FeedNotification);

    FeedNotification.initialize(this, title, created, updated, articleUrl, type, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeedNotification, null, [{
    key: "initialize",
    value: function initialize(obj, title, created, updated, articleUrl, type, body) {
      obj['title'] = title;
      obj['created'] = created;
      obj['updated'] = updated;
      obj['articleUrl'] = articleUrl;
      obj['type'] = type;
      obj['body'] = body;
    }
    /**
     * Constructs a <code>FeedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedNotification} obj Optional instance to populate.
     * @return {module:model/FeedNotification} The populated <code>FeedNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeedNotification();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Date');
        }

        if (data.hasOwnProperty('articleUrl')) {
          obj['articleUrl'] = _ApiClient["default"].convertToType(data['articleUrl'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FeedNotification;
}();
/**
 * Title of the feed notification
 * @member {String} title
 */


FeedNotification.prototype['title'] = undefined;
/**
 * Timestamp of the moment this feed notification was created
 * @member {Date} created
 */

FeedNotification.prototype['created'] = undefined;
/**
 * Timestamp of the moment this feed notification was last updated
 * @member {Date} updated
 */

FeedNotification.prototype['updated'] = undefined;
/**
 * URL to the feed notification in the help center
 * @member {String} articleUrl
 */

FeedNotification.prototype['articleUrl'] = undefined;
/**
 * The type of the feed notification
 * @member {module:model/FeedNotification.TypeEnum} type
 */

FeedNotification.prototype['type'] = undefined;
/**
 * Body of the feed notification
 * @member {String} body
 */

FeedNotification.prototype['body'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

FeedNotification['TypeEnum'] = {
  /**
   * value: "feed"
   * @const
   */
  "feed": "feed",

  /**
   * value: "feature"
   * @const
   */
  "feature": "feature",

  /**
   * value: "announcement"
   * @const
   */
  "announcement": "announcement",

  /**
   * value: "alert"
   * @const
   */
  "alert": "alert",

  /**
   * value: "test"
   * @const
   */
  "test": "test"
};
var _default = FeedNotification;
exports["default"] = _default;