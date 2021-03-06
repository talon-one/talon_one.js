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
 * The ModelImport model module.
 * @module model/ModelImport
 * @version 4.3.0
 */
class ModelImport {
    /**
     * Constructs a new <code>ModelImport</code>.
     * 
     * @alias module:model/ModelImport
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param entity {String} The name of the entity that was imported. Possible values are Coupons and LoyaltyPoints.
     * @param amount {Number} The number of members that imported.
     */
    constructor(id, created, accountId, userId, entity, amount) { 
        
        ModelImport.initialize(this, id, created, accountId, userId, entity, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, userId, entity, amount) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['userId'] = userId;
        obj['entity'] = entity;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ModelImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelImport} obj Optional instance to populate.
     * @return {module:model/ModelImport} The populated <code>ModelImport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelImport();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
ModelImport.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
ModelImport.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
ModelImport.prototype['accountId'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */
ModelImport.prototype['userId'] = undefined;

/**
 * The name of the entity that was imported. Possible values are Coupons and LoyaltyPoints.
 * @member {String} entity
 */
ModelImport.prototype['entity'] = undefined;

/**
 * The number of members that imported.
 * @member {Number} amount
 */
ModelImport.prototype['amount'] = undefined;






export default ModelImport;

