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
 * The RemoveFromAudienceEffectProps model module.
 * @module model/RemoveFromAudienceEffectProps
 * @version 9.0.0
 */
class RemoveFromAudienceEffectProps {
    /**
     * Constructs a new <code>RemoveFromAudienceEffectProps</code>.
     * The properties specific to the \&quot;removeFromAudience\&quot; effect. This gets triggered whenever a validated rule contains a \&quot;removeFromAudience\&quot; effect.
     * @alias module:model/RemoveFromAudienceEffectProps
     */
    constructor() { 
        
        RemoveFromAudienceEffectProps.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoveFromAudienceEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveFromAudienceEffectProps} obj Optional instance to populate.
     * @return {module:model/RemoveFromAudienceEffectProps} The populated <code>RemoveFromAudienceEffectProps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoveFromAudienceEffectProps();

            if (data.hasOwnProperty('audienceId')) {
                obj['audienceId'] = ApiClient.convertToType(data['audienceId'], 'Number');
            }
            if (data.hasOwnProperty('audienceName')) {
                obj['audienceName'] = ApiClient.convertToType(data['audienceName'], 'String');
            }
            if (data.hasOwnProperty('profileIntegrationId')) {
                obj['profileIntegrationId'] = ApiClient.convertToType(data['profileIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The internal ID of the audience.
 * @member {Number} audienceId
 */
RemoveFromAudienceEffectProps.prototype['audienceId'] = undefined;

/**
 * The name of the audience.
 * @member {String} audienceName
 */
RemoveFromAudienceEffectProps.prototype['audienceName'] = undefined;

/**
 * The ID of the customer profile in the third-party integration platform.
 * @member {String} profileIntegrationId
 */
RemoveFromAudienceEffectProps.prototype['profileIntegrationId'] = undefined;

/**
 * The internal ID of the customer profile.
 * @member {Number} profileId
 */
RemoveFromAudienceEffectProps.prototype['profileId'] = undefined;






export default RemoveFromAudienceEffectProps;

