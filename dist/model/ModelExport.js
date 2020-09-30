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
 * The ModelExport model module.
 * @module model/ModelExport
 * @version 4.2.0
 */
var ModelExport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelExport</code>.
   * 
   * @alias module:model/ModelExport
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param entity {module:model/ModelExport.EntityEnum} The name of the entity that was exported.
   * @param filter {Object} Map of keys and values that were used to filter the exported rows
   */
  function ModelExport(id, created, accountId, userId, entity, filter) {
    _classCallCheck(this, ModelExport);

    ModelExport.initialize(this, id, created, accountId, userId, entity, filter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelExport, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, accountId, userId, entity, filter) {
      obj['id'] = id;
      obj['created'] = created;
      obj['accountId'] = accountId;
      obj['userId'] = userId;
      obj['entity'] = entity;
      obj['filter'] = filter;
    }
    /**
     * Constructs a <code>ModelExport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelExport} obj Optional instance to populate.
     * @return {module:model/ModelExport} The populated <code>ModelExport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelExport();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }

        if (data.hasOwnProperty('entity')) {
          obj['entity'] = _ApiClient["default"].convertToType(data['entity'], 'String');
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], Object);
        }
      }

      return obj;
    }
  }]);

  return ModelExport;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


ModelExport.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

ModelExport.prototype['created'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

ModelExport.prototype['accountId'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */

ModelExport.prototype['userId'] = undefined;
/**
 * The name of the entity that was exported.
 * @member {module:model/ModelExport.EntityEnum} entity
 */

ModelExport.prototype['entity'] = undefined;
/**
 * Map of keys and values that were used to filter the exported rows
 * @member {Object} filter
 */

ModelExport.prototype['filter'] = undefined;
/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */

ModelExport['EntityEnum'] = {
  /**
   * value: "Coupon"
   * @const
   */
  "Coupon": "Coupon",

  /**
   * value: "Effect"
   * @const
   */
  "Effect": "Effect",

  /**
   * value: "CustomerSession"
   * @const
   */
  "CustomerSession": "CustomerSession"
};
var _default = ModelExport;
exports["default"] = _default;