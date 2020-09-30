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
 * The LibraryAttribute model module.
 * @module model/LibraryAttribute
 * @version 4.2.0
 */
var LibraryAttribute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LibraryAttribute</code>.
   * 
   * @alias module:model/LibraryAttribute
   * @param entity {module:model/LibraryAttribute.EntityEnum} The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
   * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
   * @param title {String} The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
   * @param type {module:model/LibraryAttribute.TypeEnum} The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
   * @param description {String} A description of the attribute.
   * @param presets {Array.<String>} The presets that indicate to which industry the attribute applies to.
   * @param suggestions {Array.<String>} Short suggestions that are used to group attributes.
   */
  function LibraryAttribute(entity, name, title, type, description, presets, suggestions) {
    _classCallCheck(this, LibraryAttribute);

    LibraryAttribute.initialize(this, entity, name, title, type, description, presets, suggestions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LibraryAttribute, null, [{
    key: "initialize",
    value: function initialize(obj, entity, name, title, type, description, presets, suggestions) {
      obj['entity'] = entity;
      obj['name'] = name;
      obj['title'] = title;
      obj['type'] = type;
      obj['description'] = description;
      obj['presets'] = presets;
      obj['suggestions'] = suggestions;
    }
    /**
     * Constructs a <code>LibraryAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LibraryAttribute} obj Optional instance to populate.
     * @return {module:model/LibraryAttribute} The populated <code>LibraryAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LibraryAttribute();

        if (data.hasOwnProperty('entity')) {
          obj['entity'] = _ApiClient["default"].convertToType(data['entity'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('presets')) {
          obj['presets'] = _ApiClient["default"].convertToType(data['presets'], ['String']);
        }

        if (data.hasOwnProperty('suggestions')) {
          obj['suggestions'] = _ApiClient["default"].convertToType(data['suggestions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return LibraryAttribute;
}();
/**
 * The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
 * @member {module:model/LibraryAttribute.EntityEnum} entity
 */


LibraryAttribute.prototype['entity'] = undefined;
/**
 * The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
 * @member {String} name
 */

LibraryAttribute.prototype['name'] = undefined;
/**
 * The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
 * @member {String} title
 */

LibraryAttribute.prototype['title'] = undefined;
/**
 * The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
 * @member {module:model/LibraryAttribute.TypeEnum} type
 */

LibraryAttribute.prototype['type'] = undefined;
/**
 * A description of the attribute.
 * @member {String} description
 */

LibraryAttribute.prototype['description'] = undefined;
/**
 * The presets that indicate to which industry the attribute applies to.
 * @member {Array.<String>} presets
 */

LibraryAttribute.prototype['presets'] = undefined;
/**
 * Short suggestions that are used to group attributes.
 * @member {Array.<String>} suggestions
 */

LibraryAttribute.prototype['suggestions'] = undefined;
/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */

LibraryAttribute['EntityEnum'] = {
  /**
   * value: "Application"
   * @const
   */
  "Application": "Application",

  /**
   * value: "Campaign"
   * @const
   */
  "Campaign": "Campaign",

  /**
   * value: "CustomerProfile"
   * @const
   */
  "CustomerProfile": "CustomerProfile",

  /**
   * value: "CustomerSession"
   * @const
   */
  "CustomerSession": "CustomerSession",

  /**
   * value: "CartItem"
   * @const
   */
  "CartItem": "CartItem",

  /**
   * value: "Coupon"
   * @const
   */
  "Coupon": "Coupon",

  /**
   * value: "Event"
   * @const
   */
  "Event": "Event"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

LibraryAttribute['TypeEnum'] = {
  /**
   * value: "string"
   * @const
   */
  "string": "string",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "boolean"
   * @const
   */
  "boolean": "boolean",

  /**
   * value: "time"
   * @const
   */
  "time": "time"
};
var _default = LibraryAttribute;
exports["default"] = _default;