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
import Coupon from './Coupon';
import CustomerProfile from './CustomerProfile';
import CustomerSession from './CustomerSession';
import Event from './Event';
import Loyalty from './Loyalty';

/**
 * The IntegrationState model module.
 * @module model/IntegrationState
 * @version 7.0.0
 */
class IntegrationState {
    /**
     * Constructs a new <code>IntegrationState</code>.
     * Contains all state that might interest application integration plugins. This is the response type returned by all of the Integration API operations. 
     * @alias module:model/IntegrationState
     * @param session {module:model/CustomerSession} 
     * @param profile {module:model/CustomerProfile} 
     * @param event {module:model/Event} 
     */
    constructor(session, profile, event) { 
        
        IntegrationState.initialize(this, session, profile, event);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, session, profile, event) { 
        obj['session'] = session;
        obj['profile'] = profile;
        obj['event'] = event;
    }

    /**
     * Constructs a <code>IntegrationState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationState} obj Optional instance to populate.
     * @return {module:model/IntegrationState} The populated <code>IntegrationState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationState();

            if (data.hasOwnProperty('session')) {
                obj['session'] = CustomerSession.constructFromObject(data['session']);
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = CustomerProfile.constructFromObject(data['profile']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = Event.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('loyalty')) {
                obj['loyalty'] = Loyalty.constructFromObject(data['loyalty']);
            }
            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = Coupon.constructFromObject(data['coupon']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CustomerSession} session
 */
IntegrationState.prototype['session'] = undefined;

/**
 * @member {module:model/CustomerProfile} profile
 */
IntegrationState.prototype['profile'] = undefined;

/**
 * @member {module:model/Event} event
 */
IntegrationState.prototype['event'] = undefined;

/**
 * @member {module:model/Loyalty} loyalty
 */
IntegrationState.prototype['loyalty'] = undefined;

/**
 * @member {module:model/Coupon} coupon
 */
IntegrationState.prototype['coupon'] = undefined;






export default IntegrationState;

