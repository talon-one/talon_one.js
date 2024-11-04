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
import Campaign from './Campaign';
import CollectionWithoutPayload from './CollectionWithoutPayload';
import Ruleset from './Ruleset';

/**
 * The CampaignCollectionEditedNotification model module.
 * @module model/CampaignCollectionEditedNotification
 * @version 9.0.0
 */
class CampaignCollectionEditedNotification {
    /**
     * Constructs a new <code>CampaignCollectionEditedNotification</code>.
     * A notification regarding a collection that was edited.
     * @alias module:model/CampaignCollectionEditedNotification
     * @param campaign {module:model/Campaign} 
     * @param collection {module:model/CollectionWithoutPayload} 
     */
    constructor(campaign, collection) { 
        
        CampaignCollectionEditedNotification.initialize(this, campaign, collection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, campaign, collection) { 
        obj['campaign'] = campaign;
        obj['collection'] = collection;
    }

    /**
     * Constructs a <code>CampaignCollectionEditedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignCollectionEditedNotification} obj Optional instance to populate.
     * @return {module:model/CampaignCollectionEditedNotification} The populated <code>CampaignCollectionEditedNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignCollectionEditedNotification();

            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = Campaign.constructFromObject(data['campaign']);
            }
            if (data.hasOwnProperty('ruleset')) {
                obj['ruleset'] = Ruleset.constructFromObject(data['ruleset']);
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = CollectionWithoutPayload.constructFromObject(data['collection']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Campaign} campaign
 */
CampaignCollectionEditedNotification.prototype['campaign'] = undefined;

/**
 * @member {module:model/Ruleset} ruleset
 */
CampaignCollectionEditedNotification.prototype['ruleset'] = undefined;

/**
 * @member {module:model/CollectionWithoutPayload} collection
 */
CampaignCollectionEditedNotification.prototype['collection'] = undefined;






export default CampaignCollectionEditedNotification;
