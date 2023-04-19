/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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

/**
 * The NewApplication model module.
 * @module model/NewApplication
 * @version 5.0.0
 */
class NewApplication {
    /**
     * Constructs a new <code>NewApplication</code>.
     * 
     * @alias module:model/NewApplication
     * @param name {String} The name of this application.
     * @param timezone {String} A string containing an IANA timezone descriptor.
     * @param currency {String} The default currency for new customer sessions.
     */
    constructor(name, timezone, currency) { 
        
        NewApplication.initialize(this, name, timezone, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, timezone, currency) { 
        obj['name'] = name;
        obj['timezone'] = timezone;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>NewApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplication} obj Optional instance to populate.
     * @return {module:model/NewApplication} The populated <code>NewApplication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewApplication();

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
            if (data.hasOwnProperty('campaignPriority')) {
                obj['campaignPriority'] = ApiClient.convertToType(data['campaignPriority'], 'String');
            }
            if (data.hasOwnProperty('exclusiveCampaignsStrategy')) {
                obj['exclusiveCampaignsStrategy'] = ApiClient.convertToType(data['exclusiveCampaignsStrategy'], 'String');
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of this application.
 * @member {String} name
 */
NewApplication.prototype['name'] = undefined;

/**
 * A longer description of the application.
 * @member {String} description
 */
NewApplication.prototype['description'] = undefined;

/**
 * A string containing an IANA timezone descriptor.
 * @member {String} timezone
 */
NewApplication.prototype['timezone'] = undefined;

/**
 * The default currency for new customer sessions.
 * @member {String} currency
 */
NewApplication.prototype['currency'] = undefined;

/**
 * The case sensitivity behavior to check coupon codes in the campaigns of this Application.
 * @member {module:model/NewApplication.CaseSensitivityEnum} caseSensitivity
 */
NewApplication.prototype['caseSensitivity'] = undefined;

/**
 * Arbitrary properties associated with this campaign.
 * @member {Object} attributes
 */
NewApplication.prototype['attributes'] = undefined;

/**
 * Default limits for campaigns created in this application.
 * @member {Array.<module:model/LimitConfig>} limits
 */
NewApplication.prototype['limits'] = undefined;

/**
 * Default [priority](https://docs.talon.one/docs/product/applications/setting-up-campaign-priorities) for campaigns created in this Application. 
 * @member {module:model/NewApplication.CampaignPriorityEnum} campaignPriority
 * @default 'universal'
 */
NewApplication.prototype['campaignPriority'] = 'universal';

/**
 * The strategy used when choosing exclusive campaigns for evaluation.
 * @member {module:model/NewApplication.ExclusiveCampaignsStrategyEnum} exclusiveCampaignsStrategy
 * @default 'listOrder'
 */
NewApplication.prototype['exclusiveCampaignsStrategy'] = 'listOrder';

/**
 * The default scope to apply `setDiscount` effects on if no scope was provided with the effect. 
 * @member {module:model/NewApplication.DefaultDiscountScopeEnum} defaultDiscountScope
 */
NewApplication.prototype['defaultDiscountScope'] = undefined;

/**
 * Indicates if discounts should cascade for this Application.
 * @member {Boolean} enableCascadingDiscounts
 */
NewApplication.prototype['enableCascadingDiscounts'] = undefined;

/**
 * Indicates if cart items of quantity larger than one should be separated into different items of quantity one. See the [docs](https://docs.talon.one/docs/product/campaigns/campaign-evaluation#flattening). 
 * @member {Boolean} enableFlattenedCartItems
 */
NewApplication.prototype['enableFlattenedCartItems'] = undefined;

/**
 * @member {module:model/AttributesSettings} attributesSettings
 */
NewApplication.prototype['attributesSettings'] = undefined;

/**
 * Indicates if this is a live or sandbox Application.
 * @member {Boolean} sandbox
 */
NewApplication.prototype['sandbox'] = undefined;

/**
 * Indicates if this Application supports partial discounts.
 * @member {Boolean} enablePartialDiscounts
 */
NewApplication.prototype['enablePartialDiscounts'] = undefined;

/**
 * The default scope to apply `setDiscountPerItem` effects on if no scope was provided with the effect. 
 * @member {module:model/NewApplication.DefaultDiscountAdditionalCostPerItemScopeEnum} defaultDiscountAdditionalCostPerItemScope
 */
NewApplication.prototype['defaultDiscountAdditionalCostPerItemScope'] = undefined;

/**
 * Hex key for HMAC-signing API calls as coming from this application (16 hex digits).
 * @member {String} key
 */
NewApplication.prototype['key'] = undefined;





/**
 * Allowed values for the <code>caseSensitivity</code> property.
 * @enum {String}
 * @readonly
 */
NewApplication['CaseSensitivityEnum'] = {

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
 * Allowed values for the <code>campaignPriority</code> property.
 * @enum {String}
 * @readonly
 */
NewApplication['CampaignPriorityEnum'] = {

    /**
     * value: "universal"
     * @const
     */
    "universal": "universal",

    /**
     * value: "stackable"
     * @const
     */
    "stackable": "stackable",

    /**
     * value: "exclusive"
     * @const
     */
    "exclusive": "exclusive"
};


/**
 * Allowed values for the <code>exclusiveCampaignsStrategy</code> property.
 * @enum {String}
 * @readonly
 */
NewApplication['ExclusiveCampaignsStrategyEnum'] = {

    /**
     * value: "listOrder"
     * @const
     */
    "listOrder": "listOrder",

    /**
     * value: "lowestDiscount"
     * @const
     */
    "lowestDiscount": "lowestDiscount",

    /**
     * value: "highestDiscount"
     * @const
     */
    "highestDiscount": "highestDiscount"
};


/**
 * Allowed values for the <code>defaultDiscountScope</code> property.
 * @enum {String}
 * @readonly
 */
NewApplication['DefaultDiscountScopeEnum'] = {

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
NewApplication['DefaultDiscountAdditionalCostPerItemScopeEnum'] = {

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



export default NewApplication;

