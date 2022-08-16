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

/**
 * The MultipleAudiencesItem model module.
 * @module model/MultipleAudiencesItem
 * @version 4.6.0
 */
class MultipleAudiencesItem {
    /**
     * Constructs a new <code>MultipleAudiencesItem</code>.
     * 
     * @alias module:model/MultipleAudiencesItem
     * @param id {Number} Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints.
     * @param created {Date} The exact moment this entity was created.
     * @param name {String} The human-friendly display name for this audience.
     * @param integrationId {String} The ID of this audience in the third-party integration.
     * @param status {module:model/MultipleAudiencesItem.StatusEnum} Indicates whether the audience is new, updated or unmodified by the request. 
     */
    constructor(id, created, name, integrationId, status) { 
        
        MultipleAudiencesItem.initialize(this, id, created, name, integrationId, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, name, integrationId, status) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['name'] = name;
        obj['integrationId'] = integrationId;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>MultipleAudiencesItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleAudiencesItem} obj Optional instance to populate.
     * @return {module:model/MultipleAudiencesItem} The populated <code>MultipleAudiencesItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipleAudiencesItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity. Not to be confused with the Integration ID, which is set by your integration layer and used in most endpoints.
 * @member {Number} id
 */
MultipleAudiencesItem.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
MultipleAudiencesItem.prototype['created'] = undefined;

/**
 * The human-friendly display name for this audience.
 * @member {String} name
 */
MultipleAudiencesItem.prototype['name'] = undefined;

/**
 * The ID of this audience in the third-party integration.
 * @member {String} integrationId
 */
MultipleAudiencesItem.prototype['integrationId'] = undefined;

/**
 * Indicates whether the audience is new, updated or unmodified by the request. 
 * @member {module:model/MultipleAudiencesItem.StatusEnum} status
 */
MultipleAudiencesItem.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MultipleAudiencesItem['StatusEnum'] = {

    /**
     * value: "unmodified"
     * @const
     */
    "unmodified": "unmodified",

    /**
     * value: "updated"
     * @const
     */
    "updated": "updated",

    /**
     * value: "new"
     * @const
     */
    "new": "new"
};



export default MultipleAudiencesItem;
