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
 * The NewCustomEffect model module.
 * @module model/NewCustomEffect
 * @version 7.0.0
 */
class NewCustomEffect {
    /**
     * Constructs a new <code>NewCustomEffect</code>.
     * 
     * @alias module:model/NewCustomEffect
     * @param applicationIds {Array.<Number>} The IDs of the Applications that are related to this entity.
     * @param name {String} The name of this effect.
     * @param title {String} The title of this effect.
     * @param payload {String} The JSON payload of this effect.
     * @param enabled {Boolean} Determines if this effect is active.
     */
    constructor(applicationIds, name, title, payload, enabled) { 
        
        NewCustomEffect.initialize(this, applicationIds, name, title, payload, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationIds, name, title, payload, enabled) { 
        obj['applicationIds'] = applicationIds;
        obj['name'] = name;
        obj['title'] = title;
        obj['payload'] = payload;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>NewCustomEffect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomEffect} obj Optional instance to populate.
     * @return {module:model/NewCustomEffect} The populated <code>NewCustomEffect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCustomEffect();

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
        }
        return obj;
    }


}

/**
 * The IDs of the Applications that are related to this entity.
 * @member {Array.<Number>} applicationIds
 */
NewCustomEffect.prototype['applicationIds'] = undefined;

/**
 * Indicates if this effect is per item or not.
 * @member {Boolean} isPerItem
 */
NewCustomEffect.prototype['isPerItem'] = undefined;

/**
 * The name of this effect.
 * @member {String} name
 */
NewCustomEffect.prototype['name'] = undefined;

/**
 * The title of this effect.
 * @member {String} title
 */
NewCustomEffect.prototype['title'] = undefined;

/**
 * The JSON payload of this effect.
 * @member {String} payload
 */
NewCustomEffect.prototype['payload'] = undefined;

/**
 * The description of this effect.
 * @member {String} description
 */
NewCustomEffect.prototype['description'] = undefined;

/**
 * Determines if this effect is active.
 * @member {Boolean} enabled
 */
NewCustomEffect.prototype['enabled'] = undefined;

/**
 * Array of template argument definitions.
 * @member {Array.<module:model/TemplateArgDef>} params
 */
NewCustomEffect.prototype['params'] = undefined;






export default NewCustomEffect;

