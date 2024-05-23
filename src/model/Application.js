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
import AttributesSettings from './AttributesSettings';
import LimitConfig from './LimitConfig';
import LoyaltyProgram from './LoyaltyProgram';

/**
 * The Application model module.
 * @module model/Application
 * @version 7.0.0
 */
class Application {
    /**
     * Constructs a new <code>Application</code>.
     * 
     * @alias module:model/Application
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param modified {Date} The time this entity was last modified.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} The name of this application.
     * @param timezone {String} A string containing an IANA timezone descriptor.
     * @param currency {String} The default currency for new customer sessions.
     * @param loyaltyPrograms {Array.<module:model/LoyaltyProgram>} An array containing all the loyalty programs to which this application is subscribed.
     */
    constructor(id, created, modified, accountId, name, timezone, currency, loyaltyPrograms) { 
        
        Application.initialize(this, id, created, modified, accountId, name, timezone, currency, loyaltyPrograms);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, modified, accountId, name, timezone, currency, loyaltyPrograms) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['modified'] = modified;
        obj['accountId'] = accountId;
        obj['name'] = name;
        obj['timezone'] = timezone;
        obj['currency'] = currency;
        obj['loyaltyPrograms'] = loyaltyPrograms;
    }

    /**
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Application();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('caseSensitivity')) {
                obj['caseSensitivity'] = ApiClient.convertToType(data['caseSensitivity'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], [LimitConfig]);
            }
            if (data.hasOwnProperty('defaultDiscountScope')) {
                obj['defaultDiscountScope'] = ApiClient.convertToType(data['defaultDiscountScope'], 'String');
            }
            if (data.hasOwnProperty('enableCascadingDiscounts')) {
                obj['enableCascadingDiscounts'] = ApiClient.convertToType(data['enableCascadingDiscounts'], 'Boolean');
            }
            if (data.hasOwnProperty('enableFlattenedCartItems')) {
                obj['enableFlattenedCartItems'] = ApiClient.convertToType(data['enableFlattenedCartItems'], 'Boolean');
            }
            if (data.hasOwnProperty('attributesSettings')) {
                obj['attributesSettings'] = AttributesSettings.constructFromObject(data['attributesSettings']);
            }
            if (data.hasOwnProperty('sandbox')) {
                obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
            }
            if (data.hasOwnProperty('enablePartialDiscounts')) {
                obj['enablePartialDiscounts'] = ApiClient.convertToType(data['enablePartialDiscounts'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultDiscountAdditionalCostPerItemScope')) {
                obj['defaultDiscountAdditionalCostPerItemScope'] = ApiClient.convertToType(data['defaultDiscountAdditionalCostPerItemScope'], 'String');
            }
            if (data.hasOwnProperty('defaultEvaluationGroupId')) {
                obj['defaultEvaluationGroupId'] = ApiClient.convertToType(data['defaultEvaluationGroupId'], 'Number');
            }
            if (data.hasOwnProperty('loyaltyPrograms')) {
                obj['loyaltyPrograms'] = ApiClient.convertToType(data['loyaltyPrograms'], [LoyaltyProgram]);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Application.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Application.prototype['created'] = undefined;

/**
 * The time this entity was last modified.
 * @member {Date} modified
 */
Application.prototype['modified'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
Application.prototype['accountId'] = undefined;

/**
 * The name of this application.
 * @member {String} name
 */
Application.prototype['name'] = undefined;

/**
 * A longer description of the application.
 * @member {String} description
 */
Application.prototype['description'] = undefined;

/**
 * A string containing an IANA timezone descriptor.
 * @member {String} timezone
 */
Application.prototype['timezone'] = undefined;

/**
 * The default currency for new customer sessions.
 * @member {String} currency
 */
Application.prototype['currency'] = undefined;

/**
 * The case sensitivity behavior to check coupon codes in the campaigns of this Application.
 * @member {module:model/Application.CaseSensitivityEnum} caseSensitivity
 */
Application.prototype['caseSensitivity'] = undefined;

/**
 * Arbitrary properties associated with this campaign.
 * @member {Object} attributes
 */
Application.prototype['attributes'] = undefined;

/**
 * Default limits for campaigns created in this application.
 * @member {Array.<module:model/LimitConfig>} limits
 */
Application.prototype['limits'] = undefined;

/**
 * The default scope to apply `setDiscount` effects on if no scope was provided with the effect. 
 * @member {module:model/Application.DefaultDiscountScopeEnum} defaultDiscountScope
 */
Application.prototype['defaultDiscountScope'] = undefined;

/**
 * Indicates if discounts should cascade for this Application.
 * @member {Boolean} enableCascadingDiscounts
 */
Application.prototype['enableCascadingDiscounts'] = undefined;

/**
 * Indicates if cart items of quantity larger than one should be separated into different items of quantity one. 
 * @member {Boolean} enableFlattenedCartItems
 */
Application.prototype['enableFlattenedCartItems'] = undefined;

/**
 * @member {module:model/AttributesSettings} attributesSettings
 */
Application.prototype['attributesSettings'] = undefined;

/**
 * Indicates if this is a live or sandbox Application.
 * @member {Boolean} sandbox
 */
Application.prototype['sandbox'] = undefined;

/**
 * Indicates if this Application supports partial discounts.
 * @member {Boolean} enablePartialDiscounts
 */
Application.prototype['enablePartialDiscounts'] = undefined;

/**
 * The default scope to apply `setDiscountPerItem` effects on if no scope was provided with the effect. 
 * @member {module:model/Application.DefaultDiscountAdditionalCostPerItemScopeEnum} defaultDiscountAdditionalCostPerItemScope
 */
Application.prototype['defaultDiscountAdditionalCostPerItemScope'] = undefined;

/**
 * The ID of the default campaign evaluation group to which new campaigns will be added unless a different group is selected when creating the campaign.
 * @member {Number} defaultEvaluationGroupId
 */
Application.prototype['defaultEvaluationGroupId'] = undefined;

/**
 * An array containing all the loyalty programs to which this application is subscribed.
 * @member {Array.<module:model/LoyaltyProgram>} loyaltyPrograms
 */
Application.prototype['loyaltyPrograms'] = undefined;





/**
 * Allowed values for the <code>caseSensitivity</code> property.
 * @enum {String}
 * @readonly
 */
Application['CaseSensitivityEnum'] = {

    /**
     * value: "sensitive"
     * @const
     */
    "sensitive": "sensitive",

    /**
     * value: "insensitive-uppercase"
     * @const
     */
    "insensitive-uppercase": "insensitive-uppercase",

    /**
     * value: "insensitive-lowercase"
     * @const
     */
    "insensitive-lowercase": "insensitive-lowercase"
};


/**
 * Allowed values for the <code>defaultDiscountScope</code> property.
 * @enum {String}
 * @readonly
 */
Application['DefaultDiscountScopeEnum'] = {

    /**
     * value: "sessionTotal"
     * @const
     */
    "sessionTotal": "sessionTotal",

    /**
     * value: "cartItems"
     * @const
     */
    "cartItems": "cartItems",

    /**
     * value: "additionalCosts"
     * @const
     */
    "additionalCosts": "additionalCosts"
};


/**
 * Allowed values for the <code>defaultDiscountAdditionalCostPerItemScope</code> property.
 * @enum {String}
 * @readonly
 */
Application['DefaultDiscountAdditionalCostPerItemScopeEnum'] = {

    /**
     * value: "price"
     * @const
     */
    "price": "price",

    /**
     * value: "itemTotal"
     * @const
     */
    "itemTotal": "itemTotal",

    /**
     * value: "additionalCosts"
     * @const
     */
    "additionalCosts": "additionalCosts"
};



export default Application;

