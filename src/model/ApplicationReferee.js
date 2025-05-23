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
 * The ApplicationReferee model module.
 * @module model/ApplicationReferee
 * @version 12.0.0
 */
class ApplicationReferee {
    /**
     * Constructs a new <code>ApplicationReferee</code>.
     * @alias module:model/ApplicationReferee
     * @param applicationId {Number} The ID of the Application that owns this entity.
     * @param sessionId {String} Integration ID of the session in which the customer redeemed the referral.
     * @param advocateIntegrationId {String} Integration ID of the Advocate's Profile.
     * @param friendIntegrationId {String} Integration ID of the Friend's Profile.
     * @param code {String} Advocate's referral code.
     * @param created {Date} Timestamp of the moment the customer redeemed the referral.
     */
    constructor(applicationId, sessionId, advocateIntegrationId, friendIntegrationId, code, created) { 
        
        ApplicationReferee.initialize(this, applicationId, sessionId, advocateIntegrationId, friendIntegrationId, code, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId, sessionId, advocateIntegrationId, friendIntegrationId, code, created) { 
        obj['applicationId'] = applicationId;
        obj['sessionId'] = sessionId;
        obj['advocateIntegrationId'] = advocateIntegrationId;
        obj['friendIntegrationId'] = friendIntegrationId;
        obj['code'] = code;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>ApplicationReferee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationReferee} obj Optional instance to populate.
     * @return {module:model/ApplicationReferee} The populated <code>ApplicationReferee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationReferee();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('sessionId')) {
                obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
            }
            if (data.hasOwnProperty('advocateIntegrationId')) {
                obj['advocateIntegrationId'] = ApiClient.convertToType(data['advocateIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('friendIntegrationId')) {
                obj['friendIntegrationId'] = ApiClient.convertToType(data['friendIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The ID of the Application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationReferee.prototype['applicationId'] = undefined;

/**
 * Integration ID of the session in which the customer redeemed the referral.
 * @member {String} sessionId
 */
ApplicationReferee.prototype['sessionId'] = undefined;

/**
 * Integration ID of the Advocate's Profile.
 * @member {String} advocateIntegrationId
 */
ApplicationReferee.prototype['advocateIntegrationId'] = undefined;

/**
 * Integration ID of the Friend's Profile.
 * @member {String} friendIntegrationId
 */
ApplicationReferee.prototype['friendIntegrationId'] = undefined;

/**
 * Advocate's referral code.
 * @member {String} code
 */
ApplicationReferee.prototype['code'] = undefined;

/**
 * Timestamp of the moment the customer redeemed the referral.
 * @member {Date} created
 */
ApplicationReferee.prototype['created'] = undefined;






export default ApplicationReferee;

