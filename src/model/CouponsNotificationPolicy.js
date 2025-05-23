/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CouponsNotificationPolicy model module.
 * @module model/CouponsNotificationPolicy
 * @version 12.0.0
 */
class CouponsNotificationPolicy {
    /**
     * Constructs a new <code>CouponsNotificationPolicy</code>.
     * @alias module:model/CouponsNotificationPolicy
     * @param name {String} Notification name.
     * @param scopes {Array.<module:model/CouponsNotificationPolicy.ScopesEnum>} 
     */
    constructor(name, scopes) { 
        
        CouponsNotificationPolicy.initialize(this, name, scopes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, scopes) { 
        obj['name'] = name;
        obj['scopes'] = scopes;
    }

    /**
     * Constructs a <code>CouponsNotificationPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponsNotificationPolicy} obj Optional instance to populate.
     * @return {module:model/CouponsNotificationPolicy} The populated <code>CouponsNotificationPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponsNotificationPolicy();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
            if (data.hasOwnProperty('batchingEnabled')) {
                obj['batchingEnabled'] = ApiClient.convertToType(data['batchingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('includeData')) {
                obj['includeData'] = ApiClient.convertToType(data['includeData'], 'Boolean');
            }
            if (data.hasOwnProperty('batchSize')) {
                obj['batchSize'] = ApiClient.convertToType(data['batchSize'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Notification name.
 * @member {String} name
 */
CouponsNotificationPolicy.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/CouponsNotificationPolicy.ScopesEnum>} scopes
 */
CouponsNotificationPolicy.prototype['scopes'] = undefined;

/**
 * Indicates whether batching is activated.
 * @member {Boolean} batchingEnabled
 * @default true
 */
CouponsNotificationPolicy.prototype['batchingEnabled'] = true;

/**
 * Indicates whether to include all generated coupons. If `false`, only the `batchId` of the generated coupons is included.
 * @member {Boolean} includeData
 */
CouponsNotificationPolicy.prototype['includeData'] = undefined;

/**
 * The required size of each batch of data. This value applies only when `batchingEnabled` is `true`.
 * @member {Number} batchSize
 */
CouponsNotificationPolicy.prototype['batchSize'] = undefined;





/**
 * Allowed values for the <code>scopes</code> property.
 * @enum {String}
 * @readonly
 */
CouponsNotificationPolicy['ScopesEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "campaign_manager"
     * @const
     */
    "campaign_manager": "campaign_manager",

    /**
     * value: "management_api"
     * @const
     */
    "management_api": "management_api",

    /**
     * value: "rule_engine"
     * @const
     */
    "rule_engine": "rule_engine"
};



export default CouponsNotificationPolicy;

