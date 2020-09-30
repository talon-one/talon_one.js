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
 * The TriggerWebhookEffectProps model module.
 * @module model/TriggerWebhookEffectProps
 * @version 4.2.0
 */
var TriggerWebhookEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TriggerWebhookEffectProps</code>.
   * The properties specific to the \&quot;triggerWebhook\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;trigger webhook\&quot; effect. This is communicated as an FYI and should usually not require action on your side.
   * @alias module:model/TriggerWebhookEffectProps
   * @param webhookId {Number} The ID of the webhook that was triggered
   * @param webhookName {String} The name of the webhook that was triggered
   */
  function TriggerWebhookEffectProps(webhookId, webhookName) {
    _classCallCheck(this, TriggerWebhookEffectProps);

    TriggerWebhookEffectProps.initialize(this, webhookId, webhookName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TriggerWebhookEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, webhookId, webhookName) {
      obj['webhookId'] = webhookId;
      obj['webhookName'] = webhookName;
    }
    /**
     * Constructs a <code>TriggerWebhookEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerWebhookEffectProps} obj Optional instance to populate.
     * @return {module:model/TriggerWebhookEffectProps} The populated <code>TriggerWebhookEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TriggerWebhookEffectProps();

        if (data.hasOwnProperty('webhookId')) {
          obj['webhookId'] = _ApiClient["default"].convertToType(data['webhookId'], 'Number');
        }

        if (data.hasOwnProperty('webhookName')) {
          obj['webhookName'] = _ApiClient["default"].convertToType(data['webhookName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TriggerWebhookEffectProps;
}();
/**
 * The ID of the webhook that was triggered
 * @member {Number} webhookId
 */


TriggerWebhookEffectProps.prototype['webhookId'] = undefined;
/**
 * The name of the webhook that was triggered
 * @member {String} webhookName
 */

TriggerWebhookEffectProps.prototype['webhookName'] = undefined;
var _default = TriggerWebhookEffectProps;
exports["default"] = _default;