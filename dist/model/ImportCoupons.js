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
 * The ImportCoupons model module.
 * @module model/ImportCoupons
 * @version 4.2.0
 */
var ImportCoupons = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImportCoupons</code>.
   * @alias module:model/ImportCoupons
   * @param coupons {String} 
   */
  function ImportCoupons(coupons) {
    _classCallCheck(this, ImportCoupons);

    ImportCoupons.initialize(this, coupons);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportCoupons, null, [{
    key: "initialize",
    value: function initialize(obj, coupons) {
      obj['coupons'] = coupons;
    }
    /**
     * Constructs a <code>ImportCoupons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportCoupons} obj Optional instance to populate.
     * @return {module:model/ImportCoupons} The populated <code>ImportCoupons</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportCoupons();

        if (data.hasOwnProperty('coupons')) {
          obj['coupons'] = _ApiClient["default"].convertToType(data['coupons'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportCoupons;
}();
/**
 * @member {String} coupons
 */


ImportCoupons.prototype['coupons'] = undefined;
var _default = ImportCoupons;
exports["default"] = _default;