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
 * The NewAccount model module.
 * @module model/NewAccount
 * @version 4.0.0
 */
var NewAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewAccount</code>.
   * @alias module:model/NewAccount
   * @param companyName {String} 
   */
  function NewAccount(companyName) {
    _classCallCheck(this, NewAccount);

    NewAccount.initialize(this, companyName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewAccount, null, [{
    key: "initialize",
    value: function initialize(obj, companyName) {
      obj['companyName'] = companyName;
    }
    /**
     * Constructs a <code>NewAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccount} obj Optional instance to populate.
     * @return {module:model/NewAccount} The populated <code>NewAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewAccount();

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NewAccount;
}();
/**
 * @member {String} companyName
 */


NewAccount.prototype['companyName'] = undefined;
var _default = NewAccount;
exports["default"] = _default;