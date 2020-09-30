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
 * The UserEntity model module.
 * @module model/UserEntity
 * @version 4.2.0
 */
var UserEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserEntity</code>.
   * @alias module:model/UserEntity
   * @param userId {Number} The ID of the account that owns this entity.
   */
  function UserEntity(userId) {
    _classCallCheck(this, UserEntity);

    UserEntity.initialize(this, userId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserEntity, null, [{
    key: "initialize",
    value: function initialize(obj, userId) {
      obj['userId'] = userId;
    }
    /**
     * Constructs a <code>UserEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserEntity} obj Optional instance to populate.
     * @return {module:model/UserEntity} The populated <code>UserEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserEntity();

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UserEntity;
}();
/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */


UserEntity.prototype['userId'] = undefined;
var _default = UserEntity;
exports["default"] = _default;