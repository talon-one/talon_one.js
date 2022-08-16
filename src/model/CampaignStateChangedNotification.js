/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Campaign from './Campaign';

/**
 * The CampaignStateChangedNotification model module.
 * @module model/CampaignStateChangedNotification
 * @version 4.6.0
 */
class CampaignStateChangedNotification {
    /**
     * Constructs a new <code>CampaignStateChangedNotification</code>.
     * A notification regarding a campaign whose state changed.
     * @alias module:model/CampaignStateChangedNotification
     * @param campaign {module:model/Campaign} 
     * @param oldState {String} The campaign's old state. Can be one of the following: ['running', 'disabled', 'scheduled', 'expired', 'draft', 'archived'] 
     * @param newState {String} The campaign's new state. Can be one of the following: ['running', 'disabled', 'scheduled', 'expired', 'draft', 'archived'] 
     */
    constructor(campaign, oldState, newState) { 
        
        CampaignStateChangedNotification.initialize(this, campaign, oldState, newState);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaign, oldState, newState) { 
        obj['campaign'] = campaign;
        obj['oldState'] = oldState;
        obj['newState'] = newState;
    }

    /**
     * Constructs a <code>CampaignStateChangedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignStateChangedNotification} obj Optional instance to populate.
     * @return {module:model/CampaignStateChangedNotification} The populated <code>CampaignStateChangedNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignStateChangedNotification();

            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = Campaign.constructFromObject(data['campaign']);
            }
            if (data.hasOwnProperty('oldState')) {
                obj['oldState'] = ApiClient.convertToType(data['oldState'], 'String');
            }
            if (data.hasOwnProperty('newState')) {
                obj['newState'] = ApiClient.convertToType(data['newState'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Campaign} campaign
 */
CampaignStateChangedNotification.prototype['campaign'] = undefined;

/**
 * The campaign's old state. Can be one of the following: ['running', 'disabled', 'scheduled', 'expired', 'draft', 'archived'] 
 * @member {String} oldState
 */
CampaignStateChangedNotification.prototype['oldState'] = undefined;

/**
 * The campaign's new state. Can be one of the following: ['running', 'disabled', 'scheduled', 'expired', 'draft', 'archived'] 
 * @member {String} newState
 */
CampaignStateChangedNotification.prototype['newState'] = undefined;






export default CampaignStateChangedNotification;

