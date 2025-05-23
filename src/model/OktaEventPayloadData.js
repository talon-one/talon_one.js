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
import OktaEvent from './OktaEvent';

/**
 * The OktaEventPayloadData model module.
 * @module model/OktaEventPayloadData
 * @version 12.0.0
 */
class OktaEventPayloadData {
    /**
     * Constructs a new <code>OktaEventPayloadData</code>.
     * Data part of the event emitted by Okta.
     * @alias module:model/OktaEventPayloadData
     * @param events {Array.<module:model/OktaEvent>} 
     */
    constructor(events) { 
        
        OktaEventPayloadData.initialize(this, events);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, events) { 
        obj['events'] = events;
    }

    /**
     * Constructs a <code>OktaEventPayloadData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OktaEventPayloadData} obj Optional instance to populate.
     * @return {module:model/OktaEventPayloadData} The populated <code>OktaEventPayloadData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OktaEventPayloadData();

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [OktaEvent]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/OktaEvent>} events
 */
OktaEventPayloadData.prototype['events'] = undefined;






export default OktaEventPayloadData;

