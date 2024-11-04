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
 * The OktaEventTarget model module.
 * @module model/OktaEventTarget
 * @version 9.0.0
 */
class OktaEventTarget {
    /**
     * Constructs a new <code>OktaEventTarget</code>.
     * Target of the specific Okta event.
     * @alias module:model/OktaEventTarget
     * @param type {String} Type of the event target.
     * @param alternateId {String} Identifier of the event target, depending on its type.
     * @param displayName {String} Display name of the event target.
     */
    constructor(type, alternateId, displayName) { 
        
        OktaEventTarget.initialize(this, type, alternateId, displayName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, alternateId, displayName) { 
        obj['type'] = type;
        obj['alternateId'] = alternateId;
        obj['displayName'] = displayName;
    }

    /**
     * Constructs a <code>OktaEventTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OktaEventTarget} obj Optional instance to populate.
     * @return {module:model/OktaEventTarget} The populated <code>OktaEventTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OktaEventTarget();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('alternateId')) {
                obj['alternateId'] = ApiClient.convertToType(data['alternateId'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Type of the event target.
 * @member {String} type
 */
OktaEventTarget.prototype['type'] = undefined;

/**
 * Identifier of the event target, depending on its type.
 * @member {String} alternateId
 */
OktaEventTarget.prototype['alternateId'] = undefined;

/**
 * Display name of the event target.
 * @member {String} displayName
 */
OktaEventTarget.prototype['displayName'] = undefined;






export default OktaEventTarget;
