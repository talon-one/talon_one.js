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
 * The IntegrationEntity model module.
 * @module model/IntegrationEntity
 * @version 4.2.0
 */
var IntegrationEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationEntity</code>.
   * @alias module:model/IntegrationEntity
   * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
   * @param created {Date} The exact moment this entity was created.
   */
  function IntegrationEntity(integrationId, created) {
    _classCallCheck(this, IntegrationEntity);

    IntegrationEntity.initialize(this, integrationId, created);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationEntity, null, [{
    key: "initialize",
    value: function initialize(obj, integrationId, created) {
      obj['integrationId'] = integrationId;
      obj['created'] = created;
    }
    /**
     * Constructs a <code>IntegrationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationEntity} obj Optional instance to populate.
     * @return {module:model/IntegrationEntity} The populated <code>IntegrationEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationEntity();

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return IntegrationEntity;
}();
/**
 * The integration ID for this entity sent to and used in the Talon.One system.
 * @member {String} integrationId
 */


IntegrationEntity.prototype['integrationId'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

IntegrationEntity.prototype['created'] = undefined;
var _default = IntegrationEntity;
exports["default"] = _default;