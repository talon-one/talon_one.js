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
import TemplateArgDef from './TemplateArgDef';

/**
 * The CustomEffect model module.
 * @module model/CustomEffect
 * @version 12.0.0
 */
class CustomEffect {
    /**
     * Constructs a new <code>CustomEffect</code>.
     * @alias module:model/CustomEffect
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param modified {Date} The time this entity was last modified.
     * @param applicationIds {Array.<Number>} The IDs of the Applications that are related to this entity.
     * @param name {String} The name of this effect.
     * @param title {String} The title of this effect.
     * @param payload {String} The JSON payload of this effect.
     * @param enabled {Boolean} Determines if this effect is active.
     * @param createdBy {Number} ID of the user who created this effect.
     */
    constructor(id, created, accountId, modified, applicationIds, name, title, payload, enabled, createdBy) { 
        
        CustomEffect.initialize(this, id, created, accountId, modified, applicationIds, name, title, payload, enabled, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, modified, applicationIds, name, title, payload, enabled, createdBy) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['modified'] = modified;
        obj['applicationIds'] = applicationIds;
        obj['name'] = name;
        obj['title'] = title;
        obj['payload'] = payload;
        obj['enabled'] = enabled;
        obj['createdBy'] = createdBy;
    }

    /**
     * Constructs a <code>CustomEffect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomEffect} obj Optional instance to populate.
     * @return {module:model/CustomEffect} The populated <code>CustomEffect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEffect();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('applicationIds')) {
                obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
            }
            if (data.hasOwnProperty('isPerItem')) {
                obj['isPerItem'] = ApiClient.convertToType(data['isPerItem'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [TemplateArgDef]);
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CustomEffect.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
CustomEffect.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
CustomEffect.prototype['accountId'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
CustomEffect.prototype['modified'] = undefined;

/**
 * The IDs of the Applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */
CustomEffect.prototype['applicationIds'] = undefined;

/**
 * Indicates if this effect is per item or not.
 * @member {Boolean} isPerItem
 */
CustomEffect.prototype['isPerItem'] = undefined;

/**
 * The name of this effect.
 * @member {String} name
 */
CustomEffect.prototype['name'] = undefined;

/**
 * The title of this effect.
 * @member {String} title
 */
CustomEffect.prototype['title'] = undefined;

/**
 * The JSON payload of this effect.
 * @member {String} payload
 */
CustomEffect.prototype['payload'] = undefined;

/**
 * The description of this effect.
 * @member {String} description
 */
CustomEffect.prototype['description'] = undefined;

/**
 * Determines if this effect is active.
 * @member {Boolean} enabled
 */
CustomEffect.prototype['enabled'] = undefined;

/**
 * Array of template argument definitions.
 * @member {Array.<module:model/TemplateArgDef>} params
 */
CustomEffect.prototype['params'] = undefined;

/**
 * ID of the user who last updated this effect if available.
 * @member {Number} modifiedBy
 */
CustomEffect.prototype['modifiedBy'] = undefined;

/**
 * ID of the user who created this effect.
 * @member {Number} createdBy
 */
CustomEffect.prototype['createdBy'] = undefined;






export default CustomEffect;

