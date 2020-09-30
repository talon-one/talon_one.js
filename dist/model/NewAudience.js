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
 * The NewAudience model module.
 * @module model/NewAudience
 * @version 4.2.0
 */
var NewAudience = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewAudience</code>.
   * @alias module:model/NewAudience
   * @param name {String} The human-friendly display name for this Audience.
   * @param integration {module:model/NewAudience.IntegrationEnum} Integration that this audience was created in.
   * @param integrationId {String} The ID of this Audience in the third-party integration
   */
  function NewAudience(name, integration, integrationId) {
    _classCallCheck(this, NewAudience);

    NewAudience.initialize(this, name, integration, integrationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewAudience, null, [{
    key: "initialize",
    value: function initialize(obj, name, integration, integrationId) {
      obj['name'] = name;
      obj['integration'] = integration;
      obj['integrationId'] = integrationId;
    }
    /**
     * Constructs a <code>NewAudience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAudience} obj Optional instance to populate.
     * @return {module:model/NewAudience} The populated <code>NewAudience</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewAudience();

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

  return NewAudience;
}();
/**
 * The human-friendly display name for this Audience.
 * @member {String} name
 */


NewAudience.prototype['name'] = undefined;
/**
 * Integration that this audience was created in.
 * @member {module:model/NewAudience.IntegrationEnum} integration
 */

NewAudience.prototype['integration'] = undefined;
/**
 * The ID of this Audience in the third-party integration
 * @member {String} integrationId
 */

NewAudience.prototype['integrationId'] = undefined;
/**
 * Allowed values for the <code>integration</code> property.
 * @enum {String}
 * @readonly
 */

NewAudience['IntegrationEnum'] = {
  /**
   * value: "mparticle"
   * @const
   */
  "mparticle": "mparticle"
};
var _default = NewAudience;
exports["default"] = _default;