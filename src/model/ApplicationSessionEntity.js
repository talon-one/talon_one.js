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
 * The ApplicationSessionEntity model module.
 * @module model/ApplicationSessionEntity
 * @version 12.0.0
 */
class ApplicationSessionEntity {
    /**
     * Constructs a new <code>ApplicationSessionEntity</code>.
     * @alias module:model/ApplicationSessionEntity
     * @param sessionId {Number} The globally unique Talon.One ID of the session where this entity was created.
     */
    constructor(sessionId) { 
        
        ApplicationSessionEntity.initialize(this, sessionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sessionId) { 
        obj['sessionId'] = sessionId;
    }

    /**
     * Constructs a <code>ApplicationSessionEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSessionEntity} obj Optional instance to populate.
     * @return {module:model/ApplicationSessionEntity} The populated <code>ApplicationSessionEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationSessionEntity();

            if (data.hasOwnProperty('sessionId')) {
                obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The globally unique Talon.One ID of the session where this entity was created.
 * @member {Number} sessionId
 */
ApplicationSessionEntity.prototype['sessionId'] = undefined;






export default ApplicationSessionEntity;

