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
 * The AudienceMembership model module.
 * @module model/AudienceMembership
 * @version 4.2.0
 */
var AudienceMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AudienceMembership</code>.
   * @alias module:model/AudienceMembership
   * @param id {Number} The ID of the audience belonging to this entity.
   * @param name {String} The Name of the audience belonging to this entity.
   */
  function AudienceMembership(id, name) {
    _classCallCheck(this, AudienceMembership);

    AudienceMembership.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AudienceMembership, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>AudienceMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudienceMembership} obj Optional instance to populate.
     * @return {module:model/AudienceMembership} The populated <code>AudienceMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AudienceMembership();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AudienceMembership;
}();
/**
 * The ID of the audience belonging to this entity.
 * @member {Number} id
 */


AudienceMembership.prototype['id'] = undefined;
/**
 * The Name of the audience belonging to this entity.
 * @member {String} name
 */

AudienceMembership.prototype['name'] = undefined;
var _default = AudienceMembership;
exports["default"] = _default;