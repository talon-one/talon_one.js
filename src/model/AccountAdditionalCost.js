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

/**
 * The AccountAdditionalCost model module.
 * @module model/AccountAdditionalCost
 * @version 5.0.0
 */
class AccountAdditionalCost {
    /**
     * Constructs a new <code>AccountAdditionalCost</code>.
     * 
     * @alias module:model/AccountAdditionalCost
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} The internal name used in API requests.
     * @param title {String} The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
     * @param description {String} A description of this additional cost.
     */
    constructor(id, created, accountId, name, title, description) { 
        
        AccountAdditionalCost.initialize(this, id, created, accountId, name, title, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, accountId, name, title, description) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['accountId'] = accountId;
        obj['name'] = name;
        obj['title'] = title;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>AccountAdditionalCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAdditionalCost} obj Optional instance to populate.
     * @return {module:model/AccountAdditionalCost} The populated <code>AccountAdditionalCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountAdditionalCost();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
AccountAdditionalCost.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
AccountAdditionalCost.prototype['created'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
AccountAdditionalCost.prototype['accountId'] = undefined;

/**
 * The internal name used in API requests.
 * @member {String} name
 */
AccountAdditionalCost.prototype['name'] = undefined;

/**
 * The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
 * @member {String} title
 */
AccountAdditionalCost.prototype['title'] = undefined;

/**
 * A description of this additional cost.
 * @member {String} description
 */
AccountAdditionalCost.prototype['description'] = undefined;

/**
 * A list of the IDs of the applications that are subscribed to this additional cost.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
AccountAdditionalCost.prototype['subscribedApplicationsIds'] = undefined;

/**
 * The type of additional cost. Possible value: - `session`: Additional cost will be added per session. - `item`: Additional cost will be added per item. - `both`: Additional cost will be added per item and session. 
 * @member {module:model/AccountAdditionalCost.TypeEnum} type
 * @default 'session'
 */
AccountAdditionalCost.prototype['type'] = 'session';





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AccountAdditionalCost['TypeEnum'] = {

    /**
     * value: "session"
     * @const
     */
    "session": "session",

    /**
     * value: "item"
     * @const
     */
    "item": "item",

    /**
     * value: "both"
     * @const
     */
    "both": "both"
};



export default AccountAdditionalCost;

