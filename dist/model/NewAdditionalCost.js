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
 * The NewAdditionalCost model module.
 * @module model/NewAdditionalCost
 * @version 4.0.0
 */
var NewAdditionalCost = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewAdditionalCost</code>.
   * 
   * @alias module:model/NewAdditionalCost
   * @param name {String} The additional cost name that will be used in API requests and Talang. E.g. if `name == \"shipping\"` then you would set the shipping additional cost by including an `additionalCosts.shipping` property in your request payload.
   * @param title {String} The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
   * @param description {String} A description of this additional cost.
   */
  function NewAdditionalCost(name, title, description) {
    _classCallCheck(this, NewAdditionalCost);

    NewAdditionalCost.initialize(this, name, title, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewAdditionalCost, null, [{
    key: "initialize",
    value: function initialize(obj, name, title, description) {
      obj['name'] = name;
      obj['title'] = title;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>NewAdditionalCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAdditionalCost} obj Optional instance to populate.
     * @return {module:model/NewAdditionalCost} The populated <code>NewAdditionalCost</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewAdditionalCost();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('subscribedApplicationsIds')) {
          obj['subscribedApplicationsIds'] = _ApiClient["default"].convertToType(data['subscribedApplicationsIds'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return NewAdditionalCost;
}();
/**
 * The additional cost name that will be used in API requests and Talang. E.g. if `name == \"shipping\"` then you would set the shipping additional cost by including an `additionalCosts.shipping` property in your request payload.
 * @member {String} name
 */


NewAdditionalCost.prototype['name'] = undefined;
/**
 * The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
 * @member {String} title
 */

NewAdditionalCost.prototype['title'] = undefined;
/**
 * A description of this additional cost.
 * @member {String} description
 */

NewAdditionalCost.prototype['description'] = undefined;
/**
 * A list of the IDs of the applications that are subscribed to this additional cost
 * @member {Array.<Number>} subscribedApplicationsIds
 */

NewAdditionalCost.prototype['subscribedApplicationsIds'] = undefined;
var _default = NewAdditionalCost;
exports["default"] = _default;