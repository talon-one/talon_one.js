/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.TemplateArgDef = factory(root.TalonOne.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TemplateArgDef model module.
   * @module model/TemplateArgDef
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>TemplateArgDef</code>.
   * 
   * @alias module:model/TemplateArgDef
   * @class
   * @param type {module:model/TemplateArgDef.TypeEnum} The type of value this argument expects.
   * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
   * @param title {String} A campaigner friendly name for the argument, this will be shown in the rule editor.
   * @param ui {Object} Arbitrary metadata that may be used to render an input for this argument.
   */
  var exports = function(type, description, title, ui) {
    var _this = this;

    _this['type'] = type;
    _this['description'] = description;
    _this['title'] = title;
    _this['ui'] = ui;
  };

  /**
   * Constructs a <code>TemplateArgDef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateArgDef} obj Optional instance to populate.
   * @return {module:model/TemplateArgDef} The populated <code>TemplateArgDef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('ui')) {
        obj['ui'] = ApiClient.convertToType(data['ui'], Object);
      }
    }
    return obj;
  }

  /**
   * The type of value this argument expects.
   * @member {module:model/TemplateArgDef.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A campaigner-friendly description of the argument, this will also be shown in the rule editor.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A campaigner friendly name for the argument, this will be shown in the rule editor.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Arbitrary metadata that may be used to render an input for this argument.
   * @member {Object} ui
   */
  exports.prototype['ui'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "time"
     * @const
     */
    "time": "time"  };


  return exports;
}));


