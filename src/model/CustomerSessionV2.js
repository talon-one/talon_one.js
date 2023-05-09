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
import AdditionalCost from './AdditionalCost';
import CartItem from './CartItem';

/**
 * The CustomerSessionV2 model module.
 * @module model/CustomerSessionV2
 * @version 5.0.0
 */
class CustomerSessionV2 {
    /**
     * Constructs a new <code>CustomerSessionV2</code>.
     * 
     * @alias module:model/CustomerSessionV2
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created. The time this entity was created.
     * @param integrationId {String} The integration ID set by your integration layer.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param profileId {String} ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
     * @param state {module:model/CustomerSessionV2.StateEnum} Indicates the current state of the session. Sessions can be created as `open` or `closed`. The state transitions are:  1. `open` → `closed` 2. `open` → `cancelled` 3. Either:    - `closed` → `cancelled` (**only** via [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2)) or    - `closed` → `partially_returned` (**only** via [Return cart items](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/returnCartItems))    - `closed` → `open` (**only** via [Reopen customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession)) 4. `partially_returned` → `cancelled`  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities#customer-session). 
     * @param cartItems {Array.<module:model/CartItem>} The items to add to this sessions. - If cart item flattening is disabled: **Do not exceed 1000 items** (regardless of their `quantity`) per request. - If cart item flattening is enabled: **Do not exceed 1000 items** and ensure the sum of all cart item's `quantity` **does not exceed 10.000** per request. 
     * @param attributes {Object} Use this property to set a value for the attributes of your choice. Attributes represent any information to attach to your session, like the shipping city.  You can use [built-in attributes](https://docs.talon.one/docs/dev/concepts/attributes#built-in-attributes) or [custom ones](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes). Custom attributes must be created in the Campaign Manager before you set them with this property. 
     * @param firstSession {Boolean} Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
     * @param total {Number} The total sum of cart-items, as well as additional costs, before any discounts applied.
     * @param cartItemTotal {Number} The total sum of cart-items before any discounts applied.
     * @param additionalCostTotal {Number} The total sum of additional costs before any discounts applied.
     * @param updated {Date} Timestamp of the most recent event received on this session.
     */
    constructor(id, created, integrationId, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal, updated) { 
        
        CustomerSessionV2.initialize(this, id, created, integrationId, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal, updated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, integrationId, applicationId, profileId, state, cartItems, attributes, firstSession, total, cartItemTotal, additionalCostTotal, updated) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['integrationId'] = integrationId;
        obj['applicationId'] = applicationId;
        obj['profileId'] = profileId;
        obj['state'] = state;
        obj['cartItems'] = cartItems;
        obj['attributes'] = attributes;
        obj['firstSession'] = firstSession;
        obj['total'] = total;
        obj['cartItemTotal'] = cartItemTotal;
        obj['additionalCostTotal'] = additionalCostTotal;
        obj['updated'] = updated;
    }

    /**
     * Constructs a <code>CustomerSessionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerSessionV2} obj Optional instance to populate.
     * @return {module:model/CustomerSessionV2} The populated <code>CustomerSessionV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerSessionV2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('evaluableCampaignIds')) {
                obj['evaluableCampaignIds'] = ApiClient.convertToType(data['evaluableCampaignIds'], ['Number']);
            }
            if (data.hasOwnProperty('couponCodes')) {
                obj['couponCodes'] = ApiClient.convertToType(data['couponCodes'], ['String']);
            }
            if (data.hasOwnProperty('referralCode')) {
                obj['referralCode'] = ApiClient.convertToType(data['referralCode'], 'String');
            }
            if (data.hasOwnProperty('loyaltyCards')) {
                obj['loyaltyCards'] = ApiClient.convertToType(data['loyaltyCards'], ['String']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('cartItems')) {
                obj['cartItems'] = ApiClient.convertToType(data['cartItems'], [CartItem]);
            }
            if (data.hasOwnProperty('additionalCosts')) {
                obj['additionalCosts'] = ApiClient.convertToType(data['additionalCosts'], {'String': AdditionalCost});
            }
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ApiClient.convertToType(data['identifiers'], ['String']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('firstSession')) {
                obj['firstSession'] = ApiClient.convertToType(data['firstSession'], 'Boolean');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('cartItemTotal')) {
                obj['cartItemTotal'] = ApiClient.convertToType(data['cartItemTotal'], 'Number');
            }
            if (data.hasOwnProperty('additionalCostTotal')) {
                obj['additionalCostTotal'] = ApiClient.convertToType(data['additionalCostTotal'], 'Number');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CustomerSessionV2.prototype['id'] = undefined;

/**
 * The time this entity was created. The time this entity was created.
 * @member {Date} created
 */
CustomerSessionV2.prototype['created'] = undefined;

/**
 * The integration ID set by your integration layer.
 * @member {String} integrationId
 */
CustomerSessionV2.prototype['integrationId'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
CustomerSessionV2.prototype['applicationId'] = undefined;

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
CustomerSessionV2.prototype['profileId'] = undefined;

/**
 * When using the `dry` query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them. 
 * @member {Array.<Number>} evaluableCampaignIds
 */
CustomerSessionV2.prototype['evaluableCampaignIds'] = undefined;

/**
 * Any coupon codes entered.  **Important**: If you [create a coupon budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a coupon code by the time you close it. 
 * @member {Array.<String>} couponCodes
 */
CustomerSessionV2.prototype['couponCodes'] = undefined;

/**
 * Any referral code entered.  **Important**: If you [create a referral budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a referral code by the time you close it. 
 * @member {String} referralCode
 */
CustomerSessionV2.prototype['referralCode'] = undefined;

/**
 * Any loyalty cards used.
 * @member {Array.<String>} loyaltyCards
 */
CustomerSessionV2.prototype['loyaltyCards'] = undefined;

/**
 * Indicates the current state of the session. Sessions can be created as `open` or `closed`. The state transitions are:  1. `open` → `closed` 2. `open` → `cancelled` 3. Either:    - `closed` → `cancelled` (**only** via [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2)) or    - `closed` → `partially_returned` (**only** via [Return cart items](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/returnCartItems))    - `closed` → `open` (**only** via [Reopen customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession)) 4. `partially_returned` → `cancelled`  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities#customer-session). 
 * @member {module:model/CustomerSessionV2.StateEnum} state
 * @default 'open'
 */
CustomerSessionV2.prototype['state'] = 'open';

/**
 * The items to add to this sessions. - If cart item flattening is disabled: **Do not exceed 1000 items** (regardless of their `quantity`) per request. - If cart item flattening is enabled: **Do not exceed 1000 items** and ensure the sum of all cart item's `quantity` **does not exceed 10.000** per request. 
 * @member {Array.<module:model/CartItem>} cartItems
 */
CustomerSessionV2.prototype['cartItems'] = undefined;

/**
 * Use this property to set a value for the additional costs of this session, such as a shipping cost.  They must be created in the Campaign Manager before you set them with this property. See [Managing additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs). 
 * @member {Object.<String, module:model/AdditionalCost>} additionalCosts
 */
CustomerSessionV2.prototype['additionalCosts'] = undefined;

/**
 * Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts. See the [tutorial](https://docs.talon.one/docs/dev/tutorials/using-identifiers).  **Important**: Ensure the session contains an identifier by the time you close it if: - You [create a unique identifier budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign. - Your campaign has [coupons](https://docs.talon.one/docs/product/campaigns/coupons/coupon-page-overview). 
 * @member {Array.<String>} identifiers
 */
CustomerSessionV2.prototype['identifiers'] = undefined;

/**
 * Use this property to set a value for the attributes of your choice. Attributes represent any information to attach to your session, like the shipping city.  You can use [built-in attributes](https://docs.talon.one/docs/dev/concepts/attributes#built-in-attributes) or [custom ones](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes). Custom attributes must be created in the Campaign Manager before you set them with this property. 
 * @member {Object} attributes
 */
CustomerSessionV2.prototype['attributes'] = undefined;

/**
 * Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
 * @member {Boolean} firstSession
 */
CustomerSessionV2.prototype['firstSession'] = undefined;

/**
 * The total sum of cart-items, as well as additional costs, before any discounts applied.
 * @member {Number} total
 */
CustomerSessionV2.prototype['total'] = undefined;

/**
 * The total sum of cart-items before any discounts applied.
 * @member {Number} cartItemTotal
 */
CustomerSessionV2.prototype['cartItemTotal'] = undefined;

/**
 * The total sum of additional costs before any discounts applied.
 * @member {Number} additionalCostTotal
 */
CustomerSessionV2.prototype['additionalCostTotal'] = undefined;

/**
 * Timestamp of the most recent event received on this session.
 * @member {Date} updated
 */
CustomerSessionV2.prototype['updated'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
CustomerSessionV2['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",

    /**
     * value: "partially_returned"
     * @const
     */
    "partially_returned": "partially_returned",

    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"
};



export default CustomerSessionV2;

