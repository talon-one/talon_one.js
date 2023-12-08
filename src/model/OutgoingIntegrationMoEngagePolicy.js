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
 * The OutgoingIntegrationMoEngagePolicy model module.
 * @module model/OutgoingIntegrationMoEngagePolicy
 * @version 6.0.0
 */
class OutgoingIntegrationMoEngagePolicy {
    /**
     * Constructs a new <code>OutgoingIntegrationMoEngagePolicy</code>.
     * @alias module:model/OutgoingIntegrationMoEngagePolicy
     * @param baseUrl {String} The base URL of your MoEngage deployment, containing the MoEngage data center number (represented by `0X`).
     * @param appId {String} MoEngage APP ID. See [MoEngage Developer Guide](https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview).
     * @param dataApiId {String} MoEngage DATA API ID. See [MoEngage Developer Guide](https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview).
     * @param dataApiKey {String} MoEngage DATA API Key. See [MoEngage Developer Guide](https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview).
     */
    constructor(baseUrl, appId, dataApiId, dataApiKey) { 
        
        OutgoingIntegrationMoEngagePolicy.initialize(this, baseUrl, appId, dataApiId, dataApiKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, baseUrl, appId, dataApiId, dataApiKey) { 
        obj['baseUrl'] = baseUrl;
        obj['appId'] = appId;
        obj['dataApiId'] = dataApiId;
        obj['dataApiKey'] = dataApiKey;
    }

    /**
     * Constructs a <code>OutgoingIntegrationMoEngagePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutgoingIntegrationMoEngagePolicy} obj Optional instance to populate.
     * @return {module:model/OutgoingIntegrationMoEngagePolicy} The populated <code>OutgoingIntegrationMoEngagePolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutgoingIntegrationMoEngagePolicy();

            if (data.hasOwnProperty('baseUrl')) {
                obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('dataApiId')) {
                obj['dataApiId'] = ApiClient.convertToType(data['dataApiId'], 'String');
            }
            if (data.hasOwnProperty('dataApiKey')) {
                obj['dataApiKey'] = ApiClient.convertToType(data['dataApiKey'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The base URL of your MoEngage deployment, containing the MoEngage data center number (represented by `0X`).
 * @member {String} baseUrl
 */
OutgoingIntegrationMoEngagePolicy.prototype['baseUrl'] = undefined;

/**
 * MoEngage APP ID. See [MoEngage Developer Guide](https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview).
 * @member {String} appId
 */
OutgoingIntegrationMoEngagePolicy.prototype['appId'] = undefined;

/**
 * MoEngage DATA API ID. See [MoEngage Developer Guide](https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview).
 * @member {String} dataApiId
 */
OutgoingIntegrationMoEngagePolicy.prototype['dataApiId'] = undefined;

/**
 * MoEngage DATA API Key. See [MoEngage Developer Guide](https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview).
 * @member {String} dataApiKey
 */
OutgoingIntegrationMoEngagePolicy.prototype['dataApiKey'] = undefined;






export default OutgoingIntegrationMoEngagePolicy;

