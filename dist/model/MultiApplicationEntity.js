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
 * The MultiApplicationEntity model module.
 * @module model/MultiApplicationEntity
 * @version 4.0.0
 */
var MultiApplicationEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultiApplicationEntity</code>.
   * @alias module:model/MultiApplicationEntity
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
   */
  function MultiApplicationEntity(applicationIds) {
    _classCallCheck(this, MultiApplicationEntity);

    MultiApplicationEntity.initialize(this, applicationIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MultiApplicationEntity, null, [{
    key: "initialize",
    value: function initialize(obj, applicationIds) {
      obj['applicationIds'] = applicationIds;
    }
    /**
     * Constructs a <code>MultiApplicationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiApplicationEntity} obj Optional instance to populate.
     * @return {module:model/MultiApplicationEntity} The populated <code>MultiApplicationEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultiApplicationEntity();

        if (data.hasOwnProperty('applicationIds')) {
          obj['applicationIds'] = _ApiClient["default"].convertToType(data['applicationIds'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return MultiApplicationEntity;
}();
/**
 * The IDs of the applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */


MultiApplicationEntity.prototype['applicationIds'] = undefined;
var _default = MultiApplicationEntity;
exports["default"] = _default;