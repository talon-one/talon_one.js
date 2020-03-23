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
 * The ModelImport model module.
 * @module model/ModelImport
 * @version 1.0.0
 */
var ModelImport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelImport</code>.
   * 
   * @alias module:model/ModelImport
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param entity {module:model/ModelImport.EntityEnum} The name of the entity that was imported.
   * @param amount {Number} The number of members that imported.
   */
  function ModelImport(id, created, accountId, userId, entity, amount) {
    _classCallCheck(this, ModelImport);

    ModelImport.initialize(this, id, created, accountId, userId, entity, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelImport, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, accountId, userId, entity, amount) {
      obj['id'] = id;
      obj['created'] = created;
      obj['accountId'] = accountId;
      obj['userId'] = userId;
      obj['entity'] = entity;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ModelImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelImport} obj Optional instance to populate.
     * @return {module:model/ModelImport} The populated <code>ModelImport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelImport();

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

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ModelImport;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


ModelImport.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

ModelImport.prototype['created'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */

ModelImport.prototype['accountId'] = undefined;
/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */

ModelImport.prototype['userId'] = undefined;
/**
 * The name of the entity that was imported.
 * @member {module:model/ModelImport.EntityEnum} entity
 */

ModelImport.prototype['entity'] = undefined;
/**
 * The number of members that imported.
 * @member {Number} amount
 */

ModelImport.prototype['amount'] = undefined;
/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */

ModelImport['EntityEnum'] = {
  /**
   * value: "Coupon"
   * @const
   */
  "Coupon": "Coupon"
};
var _default = ModelImport;
exports["default"] = _default;