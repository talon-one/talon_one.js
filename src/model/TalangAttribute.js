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
 * The TalangAttribute model module.
 * @module model/TalangAttribute
 * @version 8.0.0
 */
class TalangAttribute {
    /**
     * Constructs a new <code>TalangAttribute</code>.
     * 
     * @alias module:model/TalangAttribute
     * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
     * @param type {String} The talang type of the attribute.
     * @param visible {Boolean} Indicates whether the attribute is visible in the UI or not.
     * @param kind {module:model/TalangAttribute.KindEnum} Indicate the kind of the attribute.
     * @param campaignsCount {Number} The number of campaigns that refer to the attribute.
     */
    constructor(name, type, visible, kind, campaignsCount) { 
        
        TalangAttribute.initialize(this, name, type, visible, kind, campaignsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, visible, kind, campaignsCount) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['visible'] = visible;
        obj['kind'] = kind;
        obj['campaignsCount'] = campaignsCount;
    }

    /**
     * Constructs a <code>TalangAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TalangAttribute} obj Optional instance to populate.
     * @return {module:model/TalangAttribute} The populated <code>TalangAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TalangAttribute();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('campaignsCount')) {
                obj['campaignsCount'] = ApiClient.convertToType(data['campaignsCount'], 'Number');
            }
            if (data.hasOwnProperty('exampleValue')) {
                obj['exampleValue'] = ApiClient.convertToType(data['exampleValue'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The name of the entity of the attribute.
 * @member {module:model/TalangAttribute.EntityEnum} entity
 */
TalangAttribute.prototype['entity'] = undefined;

/**
 * The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload. 
 * @member {String} name
 */
TalangAttribute.prototype['name'] = undefined;

/**
 * The name of the attribute that is displayed to the user in the Campaign Manager.
 * @member {String} title
 */
TalangAttribute.prototype['title'] = undefined;

/**
 * The talang type of the attribute.
 * @member {String} type
 */
TalangAttribute.prototype['type'] = undefined;

/**
 * A description of the attribute.
 * @member {String} description
 */
TalangAttribute.prototype['description'] = undefined;

/**
 * Indicates whether the attribute is visible in the UI or not.
 * @member {Boolean} visible
 * @default true
 */
TalangAttribute.prototype['visible'] = true;

/**
 * Indicate the kind of the attribute.
 * @member {module:model/TalangAttribute.KindEnum} kind
 */
TalangAttribute.prototype['kind'] = undefined;

/**
 * The number of campaigns that refer to the attribute.
 * @member {Number} campaignsCount
 */
TalangAttribute.prototype['campaignsCount'] = undefined;

/**
 * Examples of values that can be assigned to the attribute.
 * @member {Array.<String>} exampleValue
 */
TalangAttribute.prototype['exampleValue'] = undefined;





/**
 * Allowed values for the <code>entity</code> property.
 * @enum {String}
 * @readonly
 */
TalangAttribute['EntityEnum'] = {

    /**
     * value: "AdvocateProfile"
     * @const
     */
    "AdvocateProfile": "AdvocateProfile",

    /**
     * value: "Account"
     * @const
     */
    "Account": "Account",

    /**
     * value: "Application"
     * @const
     */
    "Application": "Application",

    /**
     * value: "AwardedGiveaway"
     * @const
     */
    "AwardedGiveaway": "AwardedGiveaway",

    /**
     * value: "Bundle"
     * @const
     */
    "Bundle": "Bundle",

    /**
     * value: "Campaign"
     * @const
     */
    "Campaign": "Campaign",

    /**
     * value: "CartItem"
     * @const
     */
    "CartItem": "CartItem",

    /**
     * value: "Coupon"
     * @const
     */
    "Coupon": "Coupon",

    /**
     * value: "CustomerProfile"
     * @const
     */
    "CustomerProfile": "CustomerProfile",

    /**
     * value: "CustomerSession"
     * @const
     */
    "CustomerSession": "CustomerSession",

    /**
     * value: "Event"
     * @const
     */
    "Event": "Event",

    /**
     * value: "Item"
     * @const
     */
    "Item": "Item",

    /**
     * value: "Loyalty"
     * @const
     */
    "Loyalty": "Loyalty",

    /**
     * value: "Profile"
     * @const
     */
    "Profile": "Profile",

    /**
     * value: "Giveaway"
     * @const
     */
    "Giveaway": "Giveaway",

    /**
     * value: "Referral"
     * @const
     */
    "Referral": "Referral",

    /**
     * value: "Session"
     * @const
     */
    "Session": "Session",

    /**
     * value: "Store"
     * @const
     */
    "Store": "Store",

    /**
     * value: "Achievements"
     * @const
     */
    "Achievements": "Achievements"
};


/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
TalangAttribute['KindEnum'] = {

    /**
     * value: "built-in"
     * @const
     */
    "built-in": "built-in",

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom"
};



export default TalangAttribute;

