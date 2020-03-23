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
 * The AccountEntity model module.
 * @module model/AccountEntity
 * @version 1.0.0
 */
var AccountEntity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountEntity</code>.
   * @alias module:model/AccountEntity
   * @param accountId {Number} The ID of the account that owns this entity.
   */
  function AccountEntity(accountId) {
    _classCallCheck(this, AccountEntity);

    AccountEntity.initialize(this, accountId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountEntity, null, [{
    key: "initialize",
    value: function initialize(obj, accountId) {
      obj['accountId'] = accountId;
    }
    /**
     * Constructs a <code>AccountEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountEntity} obj Optional instance to populate.
     * @return {module:model/AccountEntity} The populated <code>AccountEntity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountEntity();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AccountEntity;
}();
/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */


AccountEntity.prototype['accountId'] = undefined;
var _default = AccountEntity;
exports["default"] = _default;