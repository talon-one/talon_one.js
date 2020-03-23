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
 * The NewImport model module.
 * @module model/NewImport
 * @version 1.0.0
 */
var NewImport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewImport</code>.
   * 
   * @alias module:model/NewImport
   * @param entity {module:model/NewImport.EntityEnum} The name of the entity that was imported.
   */
  function NewImport(entity) {
    _classCallCheck(this, NewImport);

    NewImport.initialize(this, entity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewImport, null, [{
    key: "initialize",
    value: function initialize(obj, entity) {
      obj['entity'] = entity;
    }
    /**
     * Constructs a <code>NewImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewImport} obj Optional instance to populate.
     * @return {module:model/NewImport} The populated <code>NewImport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewImport();

        if (data.hasOwnProperty('entity')) {
          obj['entity'] = _ApiClient["default"].convertToType(data['entity'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewImport;
}();
/**
 * The name of the entity that was imported.
 * @member {module:model/NewImport.EntityEnum} entity
 */


NewImport.prototype['entity'] = undefined;
/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */

NewImport['EntityEnum'] = {
  /**
   * value: "Coupon"
   * @const
   */
  "Coupon": "Coupon"
};
var _default = NewImport;
exports["default"] = _default;