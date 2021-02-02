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
 * The Change model module.
 * @module model/Change
 * @version 4.3.0
 */
class Change {
    /**
     * Constructs a new <code>Change</code>.
     * 
     * @alias module:model/Change
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param entity {String} API endpoint on which the change was initiated.
     */
    constructor(id, created, userId, entity) { 
        
        Change.initialize(this, id, created, userId, entity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, userId, entity) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['userId'] = userId;
        obj['entity'] = entity;
    }

    /**
     * Constructs a <code>Change</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Change} obj Optional instance to populate.
     * @return {module:model/Change} The populated <code>Change</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Change();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('old')) {
                obj['old'] = ApiClient.convertToType(data['old'], Object);
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], Object);
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
Change.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
Change.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */
Change.prototype['userId'] = undefined;

/**
 * ID of application associated with change
 * @member {Number} applicationId
 */
Change.prototype['applicationId'] = undefined;

/**
 * API endpoint on which the change was initiated.
 * @member {String} entity
 */
Change.prototype['entity'] = undefined;

/**
 * Resource before the change occurred.
 * @member {Object} old
 */
Change.prototype['old'] = undefined;

/**
 * Resource after the change occurred.
 * @member {Object} new
 */
Change.prototype['new'] = undefined;






export default Change;

