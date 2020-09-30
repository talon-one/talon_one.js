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
 * The Audience model module.
 * @module model/Audience
 * @version 4.2.0
 */
var Audience = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Audience</code>.
   * 
   * @alias module:model/Audience
   * @param accountId {Number} The ID of the account that owns this entity.
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param name {String} The human-friendly display name for this Audience.
   * @param integration {module:model/Audience.IntegrationEnum} Integration that this audience was created in.
   * @param integrationId {String} The ID of this Audience in the third-party integration
   */
  function Audience(accountId, id, created, name, integration, integrationId) {
    _classCallCheck(this, Audience);

    Audience.initialize(this, accountId, id, created, name, integration, integrationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Audience, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, id, created, name, integration, integrationId) {
      obj['accountId'] = accountId;
      obj['id'] = id;
      obj['created'] = created;
      obj['name'] = name;
      obj['integration'] = integration;
      obj['integrationId'] = integrationId;
    }
    /**
     * Constructs a <code>Audience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Audience} obj Optional instance to populate.
     * @return {module:model/Audience} The populated <code>Audience</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Audience();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _ApiClient["default"].convertToType(data['integration'], 'String');
        }

        if (data.hasOwnProperty('integrationId')) {
          obj['integrationId'] = _ApiClient["default"].convertToType(data['integrationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Audience;
}();
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */


Audience.prototype['accountId'] = undefined;
/**
 * Unique ID for this entity.
 * @member {Number} id
 */

Audience.prototype['id'] = undefined;
/**
 * The exact moment this entity was created.
 * @member {Date} created
 */

Audience.prototype['created'] = undefined;
/**
 * The human-friendly display name for this Audience.
 * @member {String} name
 */

Audience.prototype['name'] = undefined;
/**
 * Integration that this audience was created in.
 * @member {module:model/Audience.IntegrationEnum} integration
 */

Audience.prototype['integration'] = undefined;
/**
 * The ID of this Audience in the third-party integration
 * @member {String} integrationId
 */

Audience.prototype['integrationId'] = undefined;
/**
 * Allowed values for the <code>integration</code> property.
 * @enum {String}
 * @readonly
 */

Audience['IntegrationEnum'] = {
  /**
   * value: "mparticle"
   * @const
   */
  "mparticle": "mparticle"
};
var _default = Audience;
exports["default"] = _default;