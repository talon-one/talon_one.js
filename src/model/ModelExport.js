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
 * The ModelExport model module.
 * @module model/ModelExport
 * @version 10.0.0
 */
class ModelExport {
    /**
     * Constructs a new <code>ModelExport</code>.
     * @alias module:model/ModelExport
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param entity {module:model/ModelExport.EntityEnum} The name of the entity that was exported.
     * @param filter {Object} Map of keys and values that were used to filter the exported rows
     */
    constructor(id, created, accountId, userId, entity, filter) { 
        
        ModelExport.initialize(this, id, created, accountId, userId, entity, filter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, userId, entity, filter) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['userId'] = userId;
        obj['entity'] = entity;
        obj['filter'] = filter;
    }

    /**
     * Constructs a <code>ModelExport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelExport} obj Optional instance to populate.
     * @return {module:model/ModelExport} The populated <code>ModelExport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelExport();

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
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], Object);
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity.
 * @member {Number} id
 */
ModelExport.prototype['id'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
ModelExport.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
ModelExport.prototype['accountId'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} userId
 */
ModelExport.prototype['userId'] = undefined;

/**
 * The name of the entity that was exported.
 * @member {module:model/ModelExport.EntityEnum} entity
 */
ModelExport.prototype['entity'] = undefined;

/**
 * Map of keys and values that were used to filter the exported rows
 * @member {Object} filter
 */
ModelExport.prototype['filter'] = undefined;





/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */
ModelExport['EntityEnum'] = {

    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",

    /**
     * value: "Effect"
     * @const
     */
    "Effect": "Effect",

    /**
     * value: "CustomerSession"
     * @const
     */
    "CustomerSession": "CustomerSession",

    /**
     * value: "LoyaltyLedger"
     * @const
     */
    "LoyaltyLedger": "LoyaltyLedger",

    /**
     * value: "LoyaltyLedgerLog"
     * @const
     */
    "LoyaltyLedgerLog": "LoyaltyLedgerLog"
};



export default ModelExport;

