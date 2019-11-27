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
    define(['ApiClient', 'model/CampaignSetBranchNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignSetBranchNode'));
  } else {
    // Browser globals (root is window)
    if (!root.TalonOne) {
      root.TalonOne = {};
    }
    root.TalonOne.CampaignSet = factory(root.TalonOne.ApiClient, root.TalonOne.CampaignSetBranchNode);
  }
}(this, function(ApiClient, CampaignSetBranchNode) {
  'use strict';




  /**
   * The CampaignSet model module.
   * @module model/CampaignSet
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>CampaignSet</code>.
   * 
   * @alias module:model/CampaignSet
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param set {module:model/CampaignSetBranchNode} 
   */
  var exports = function(id, created, applicationId, set) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['applicationId'] = applicationId;
    _this['set'] = set;
  };

  /**
   * Constructs a <code>CampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignSet} obj Optional instance to populate.
   * @return {module:model/CampaignSet} The populated <code>CampaignSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('set')) {
        obj['set'] = CampaignSetBranchNode.constructFromObject(data['set']);
      }
    }
    return obj;
  }

  /**
   * Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The ID of the application that owns this entity.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * @member {module:model/CampaignSetBranchNode} set
   */
  exports.prototype['set'] = undefined;



  return exports;
}));


