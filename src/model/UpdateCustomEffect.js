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
import TemplateArgDef from './TemplateArgDef';

/**
 * The UpdateCustomEffect model module.
 * @module model/UpdateCustomEffect
 * @version 10.0.0
 */
class UpdateCustomEffect {
    /**
     * Constructs a new <code>UpdateCustomEffect</code>.
     * @alias module:model/UpdateCustomEffect
     * @param name {String} The name of this effect.
     * @param title {String} The title of this effect.
     * @param payload {String} The JSON payload of this effect.
     * @param enabled {Boolean} Determines if this effect is active.
     */
    constructor(name, title, payload, enabled) { 
        
        UpdateCustomEffect.initialize(this, name, title, payload, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, title, payload, enabled) { 
        obj['name'] = name;
        obj['title'] = title;
        obj['payload'] = payload;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>UpdateCustomEffect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCustomEffect} obj Optional instance to populate.
     * @return {module:model/UpdateCustomEffect} The populated <code>UpdateCustomEffect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCustomEffect();

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
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], [TemplateArgDef]);
            }
        }
        return obj;
    }


}

/**
 * The name of this effect.
 * @member {String} name
 */
UpdateCustomEffect.prototype['name'] = undefined;

/**
 * The title of this effect.
 * @member {String} title
 */
UpdateCustomEffect.prototype['title'] = undefined;

/**
 * The JSON payload of this effect.
 * @member {String} payload
 */
UpdateCustomEffect.prototype['payload'] = undefined;

/**
 * The description of this effect.
 * @member {String} description
 */
UpdateCustomEffect.prototype['description'] = undefined;

/**
 * Determines if this effect is active.
 * @member {Boolean} enabled
 */
UpdateCustomEffect.prototype['enabled'] = undefined;

/**
 * A list of the IDs of the applications that this effect is enabled for
 * @member {Array.<Number>} subscribedApplicationsIds
 */
UpdateCustomEffect.prototype['subscribedApplicationsIds'] = undefined;

/**
 * Array of template argument definitions
 * @member {Array.<module:model/TemplateArgDef>} params
 */
UpdateCustomEffect.prototype['params'] = undefined;






export default UpdateCustomEffect;
