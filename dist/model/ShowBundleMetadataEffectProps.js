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
 * The ShowBundleMetadataEffectProps model module.
 * @module model/ShowBundleMetadataEffectProps
 * @version 1.0.0
 */
var ShowBundleMetadataEffectProps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShowBundleMetadataEffectProps</code>.
   * The properties specific to the \&quot;ShowBundleMetadata\&quot; effect. This effect contains information that allows you to associate the discounts from a rule in a bundle campaign with specific cart items. This way you can distinguish from \&quot;normal\&quot; discounts that were not the result of a product bundle.
   * @alias module:model/ShowBundleMetadataEffectProps
   * @param description {String} Description of the product bundle
   * @param bundleAttributes {Array.<String>} The cart item attributes that determined which items are being bundled together
   * @param itemsIndices {Array.<Number>} The indices in the cart items array of the bundled items
   */
  function ShowBundleMetadataEffectProps(description, bundleAttributes, itemsIndices) {
    _classCallCheck(this, ShowBundleMetadataEffectProps);

    ShowBundleMetadataEffectProps.initialize(this, description, bundleAttributes, itemsIndices);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ShowBundleMetadataEffectProps, null, [{
    key: "initialize",
    value: function initialize(obj, description, bundleAttributes, itemsIndices) {
      obj['description'] = description;
      obj['bundleAttributes'] = bundleAttributes;
      obj['itemsIndices'] = itemsIndices;
    }
    /**
     * Constructs a <code>ShowBundleMetadataEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowBundleMetadataEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowBundleMetadataEffectProps} The populated <code>ShowBundleMetadataEffectProps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShowBundleMetadataEffectProps();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('bundleAttributes')) {
          obj['bundleAttributes'] = _ApiClient["default"].convertToType(data['bundleAttributes'], ['String']);
        }

        if (data.hasOwnProperty('itemsIndices')) {
          obj['itemsIndices'] = _ApiClient["default"].convertToType(data['itemsIndices'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ShowBundleMetadataEffectProps;
}();
/**
 * Description of the product bundle
 * @member {String} description
 */


ShowBundleMetadataEffectProps.prototype['description'] = undefined;
/**
 * The cart item attributes that determined which items are being bundled together
 * @member {Array.<String>} bundleAttributes
 */

ShowBundleMetadataEffectProps.prototype['bundleAttributes'] = undefined;
/**
 * The indices in the cart items array of the bundled items
 * @member {Array.<Number>} itemsIndices
 */

ShowBundleMetadataEffectProps.prototype['itemsIndices'] = undefined;
var _default = ShowBundleMetadataEffectProps;
exports["default"] = _default;