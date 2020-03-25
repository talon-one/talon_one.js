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
 * The Entity model module.
 * @module model/Entity
 * @version 4.0.0
 */
var Entity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Entity</code>.
   * @alias module:model/Entity
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   */
  function Entity(id, created) {
    _classCallCheck(this, Entity);

    Entity.initialize(this, id, created);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Entity, null, [{
    key: "initialize",
    value: function initialize(obj, id, created) {
      obj['id'] = id;
      obj['created'] = created;
    }
    /**
     * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity} obj Optional instance to populate.
     * @return {module:model/Entity} The populated <code>Entity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Entity();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Entity;
}();
/**
 * Unique ID for this entity.
 * @member {Number} id
 */


Entity.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Entity.prototype['created'] = undefined;
var _default = Entity;
exports["default"] = _default;