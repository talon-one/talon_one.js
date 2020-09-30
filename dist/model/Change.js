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
 * The Change model module.
 * @module model/Change
 * @version 4.2.0
 */
var Change = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Change</code>.
   * 
   * @alias module:model/Change
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param entity {String} API endpoint on which the change was initiated.
   */
  function Change(id, created, userId, entity) {
    _classCallCheck(this, Change);

    Change.initialize(this, id, created, userId, entity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Change, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, userId, entity) {
      obj['id'] = id;
      obj['created'] = created;
      obj['userId'] = userId;
      obj['entity'] = entity;
    }
    /**
     * Constructs a <code>Change</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Change} obj Optional instance to populate.
     * @return {module:model/Change} The populated <code>Change</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Change();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('entity')) {
          obj['entity'] = _ApiClient["default"].convertToType(data['entity'], 'String');
        }

        if (data.hasOwnProperty('old')) {
          obj['old'] = _ApiClient["default"].convertToType(data['old'], Object);
        }

        if (data.hasOwnProperty('new')) {
          obj['new'] = _ApiClient["default"].convertToType(data['new'], Object);
        }
      }

      return obj;
    }
  }]);

  return Change;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Change.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Change.prototype['created'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */

Change.prototype['userId'] = undefined;
/**
 * API endpoint on which the change was initiated.
 * @member {String} entity
 */

Change.prototype['entity'] = undefined;
/**
 * Resource before the change occurred.
 * @member {Object} old
 */

Change.prototype['old'] = undefined;
/**
 * Resource after the change occurred.
 * @member {Object} new
 */

Change.prototype['new'] = undefined;
var _default = Change;
exports["default"] = _default;