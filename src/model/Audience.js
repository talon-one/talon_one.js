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

/**
 * The Audience model module.
 * @module model/Audience
 * @version 4.2.0
 */
class Audience {
    /**
     * Constructs a new <code>Audience</code>.
     * 
     * @alias module:model/Audience
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param name {String} The human-friendly display name for this Audience.
     * @param integration {module:model/Audience.IntegrationEnum} Integration that this audience was created in.
     * @param integrationId {String} The ID of this Audience in the third-party integration
     */
    constructor(accountId, id, created, name, integration, integrationId) { 
        
        Audience.initialize(this, accountId, id, created, name, integration, integrationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, id, created, name, integration, integrationId) { 
        obj['accountId'] = accountId;
        obj['id'] = id;
        obj['created'] = created;
        obj['name'] = name;
        obj['integration'] = integration;
        obj['integrationId'] = integrationId;
    }

    /**
     * Constructs a <code>Audience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Audience} obj Optional instance to populate.
     * @return {module:model/Audience} The populated <code>Audience</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Audience();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('integration')) {
                obj['integration'] = ApiClient.convertToType(data['integration'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
Audience.prototype['accountId'] = undefined;

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
Audience.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
Audience.prototype['created'] = undefined;

/**
 * The human-friendly display name for this Audience.
 * @member {String} name
 */
Audience.prototype['name'] = undefined;

/**
 * Integration that this audience was created in.
 * @member {module:model/Audience.IntegrationEnum} integration
 */
Audience.prototype['integration'] = undefined;

/**
 * The ID of this Audience in the third-party integration
 * @member {String} integrationId
 */
Audience.prototype['integrationId'] = undefined;





/**
 * Allowed values for the <code>integration</code> property.
 * @enum {String}
 * @readonly
 */
Audience['IntegrationEnum'] = {

    /**
     * value: "mparticle"
     * @const
     */
    "mparticle": "mparticle"
};



export default Audience;
