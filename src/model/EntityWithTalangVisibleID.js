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
 * The EntityWithTalangVisibleID model module.
 * @module model/EntityWithTalangVisibleID
 * @version 4.3.0
 */
class EntityWithTalangVisibleID {
    /**
     * Constructs a new <code>EntityWithTalangVisibleID</code>.
     * @alias module:model/EntityWithTalangVisibleID
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     */
    constructor(id, created) { 
        
        EntityWithTalangVisibleID.initialize(this, id, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created) { 
        obj['id'] = id;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>EntityWithTalangVisibleID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityWithTalangVisibleID} obj Optional instance to populate.
     * @return {module:model/EntityWithTalangVisibleID} The populated <code>EntityWithTalangVisibleID</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityWithTalangVisibleID();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
EntityWithTalangVisibleID.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
EntityWithTalangVisibleID.prototype['created'] = undefined;






export default EntityWithTalangVisibleID;

