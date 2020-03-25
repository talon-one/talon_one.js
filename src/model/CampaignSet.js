/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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
import CampaignSetBranchNode from './CampaignSetBranchNode';

/**
 * The CampaignSet model module.
 * @module model/CampaignSet
 * @version 4.0.0
 */
class CampaignSet {
    /**
     * Constructs a new <code>CampaignSet</code>.
     * 
     * @alias module:model/CampaignSet
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param set {module:model/CampaignSetBranchNode} 
     */
    constructor(id, created, applicationId, set) { 
        
        CampaignSet.initialize(this, id, created, applicationId, set);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, set) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['set'] = set;
    }

    /**
     * Constructs a <code>CampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSet} obj Optional instance to populate.
     * @return {module:model/CampaignSet} The populated <code>CampaignSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSet();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('set')) {
                obj['set'] = CampaignSetBranchNode.constructFromObject(data['set']);
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
CampaignSet.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
CampaignSet.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
CampaignSet.prototype['applicationId'] = undefined;

/**
 * @member {module:model/CampaignSetBranchNode} set
 */
CampaignSet.prototype['set'] = undefined;






export default CampaignSet;

