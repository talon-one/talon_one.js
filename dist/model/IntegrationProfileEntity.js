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
 * The IntegrationProfileEntity model module.
 * @module model/IntegrationProfileEntity
 * @version 4.2.0
 */
var IntegrationProfileEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IntegrationProfileEntity</code>.
   * @alias module:model/IntegrationProfileEntity
   */
  function IntegrationProfileEntity() {
    _classCallCheck(this, IntegrationProfileEntity);

    IntegrationProfileEntity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IntegrationProfileEntity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IntegrationProfileEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationProfileEntity} obj Optional instance to populate.
     * @return {module:model/IntegrationProfileEntity} The populated <code>IntegrationProfileEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IntegrationProfileEntity();

        if (data.hasOwnProperty('profileId')) {
          obj['profileId'] = _ApiClient["default"].convertToType(data['profileId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IntegrationProfileEntity;
}();
/**
 * ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
 * @member {String} profileId
 */


IntegrationProfileEntity.prototype['profileId'] = undefined;
var _default = IntegrationProfileEntity;
exports["default"] = _default;