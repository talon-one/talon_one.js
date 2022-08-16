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
import CampaignPrioritiesV2 from './CampaignPrioritiesV2';

/**
 * The CampaignSetV2 model module.
 * @module model/CampaignSetV2
 * @version 4.6.0
 */
class CampaignSetV2 {
    /**
     * Constructs a new <code>CampaignSetV2</code>.
     * 
     * @alias module:model/CampaignSetV2
     * @param id {Number} Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param version {Number} Version of the campaign set.
     * @param set {module:model/CampaignPrioritiesV2} 
     */
    constructor(id, created, applicationId, version, set) { 
        
        CampaignSetV2.initialize(this, id, created, applicationId, version, set);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, version, set) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['version'] = version;
        obj['set'] = set;
    }

    /**
     * Constructs a <code>CampaignSetV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetV2} obj Optional instance to populate.
     * @return {module:model/CampaignSetV2} The populated <code>CampaignSetV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSetV2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('set')) {
                obj['set'] = CampaignPrioritiesV2.constructFromObject(data['set']);
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints.
 * @member {Number} id
 */
CampaignSetV2.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
CampaignSetV2.prototype['created'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
CampaignSetV2.prototype['applicationId'] = undefined;

/**
 * Version of the campaign set.
 * @member {Number} version
 */
CampaignSetV2.prototype['version'] = undefined;

/**
 * @member {module:model/CampaignPrioritiesV2} set
 */
CampaignSetV2.prototype['set'] = undefined;






export default CampaignSetV2;

