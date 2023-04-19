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
import AdditionalCost from './AdditionalCost';
import CartItem from './CartItem';

/**
 * The NewCustomerSessionV2 model module.
 * @module model/NewCustomerSessionV2
 * @version 5.0.0
 */
class NewCustomerSessionV2 {
    /**
     * Constructs a new <code>NewCustomerSessionV2</code>.
     * The representation of the customer session.
     * @alias module:model/NewCustomerSessionV2
     */
    constructor() { 
        
        NewCustomerSessionV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewCustomerSessionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomerSessionV2} obj Optional instance to populate.
     * @return {module:model/NewCustomerSessionV2} The populated <code>NewCustomerSessionV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCustomerSessionV2();

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
        }
        return obj;
    }


}

/**
 * ID of the customer profile set by your integration layer.  **Note:** If the customer does not yet have a known `profileId`, we recommend you use a guest `profileId`. 
 * @member {String} profileId
 */
NewCustomerSessionV2.prototype['profileId'] = undefined;

/**
 * When using the `dry` query parameter, use this property to list the campaign to be evaluated by the Rule Engine.  These campaigns will be evaluated, even if they are disabled, allowing you to test specific campaigns before activating them. 
 * @member {Array.<Number>} evaluableCampaignIds
 */
NewCustomerSessionV2.prototype['evaluableCampaignIds'] = undefined;

/**
 * Any coupon codes entered.  **Important**: If you [create a coupon budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a coupon code by the time you close it. 
 * @member {Array.<String>} couponCodes
 */
NewCustomerSessionV2.prototype['couponCodes'] = undefined;

/**
 * Any referral code entered.  **Important**: If you [create a referral budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign, ensure the session contains a referral code by the time you close it. 
 * @member {String} referralCode
 */
NewCustomerSessionV2.prototype['referralCode'] = undefined;

/**
 * Any loyalty cards used.
 * @member {Array.<String>} loyaltyCards
 */
NewCustomerSessionV2.prototype['loyaltyCards'] = undefined;

/**
 * Indicates the current state of the session. Sessions can be created as `open` or `closed`. The state transitions are:  1. `open` → `closed` 2. `open` → `cancelled` 3. Either:    - `closed` → `cancelled` (**only** via [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2)) or    - `closed` → `partially_returned` (**only** via [Return cart items](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/returnCartItems))    - `closed` → `open` (**only** via [Reopen customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession)) 4. `partially_returned` → `cancelled`  For more information, see [Customer session states](https://docs.talon.one/docs/dev/concepts/entities#customer-session). 
 * @member {module:model/NewCustomerSessionV2.StateEnum} state
 * @default 'open'
 */
NewCustomerSessionV2.prototype['state'] = 'open';

/**
 * The items to add to this sessions. - If cart item flattening is disabled: **Do not exceed 1000 items** (regardless of their `quantity`) per request. - If cart item flattening is enabled: **Do not exceed 1000 items** and ensure the sum of all cart item's `quantity` **does not exceed 10.000** per request. 
 * @member {Array.<module:model/CartItem>} cartItems
 */
NewCustomerSessionV2.prototype['cartItems'] = undefined;

/**
 * Use this property to set a value for the additional costs of this session, such as a shipping cost.  They must be created in the Campaign Manager before you set them with this property. See [Managing additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs). 
 * @member {Object.<String, module:model/AdditionalCost>} additionalCosts
 */
NewCustomerSessionV2.prototype['additionalCosts'] = undefined;

/**
 * Session custom identifiers that you can set limits on or use inside your rules.  For example, you can use IP addresses as identifiers to potentially identify devices and limit discounts abuse in case of customers creating multiple accounts. See the [tutorial](https://docs.talon.one/docs/dev/tutorials/using-identifiers).  **Important**: Ensure the session contains an identifier by the time you close it if: - You [create a unique identifier budget](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets/#budget-types) for your campaign. - Your campaign has [coupons](https://docs.talon.one/docs/product/campaigns/coupons/coupon-page-overview). 
 * @member {Array.<String>} identifiers
 */
NewCustomerSessionV2.prototype['identifiers'] = undefined;

/**
 * Use this property to set a value for the attributes of your choice. Attributes represent any information to attach to your session, like the shipping city.  You can use [built-in attributes](https://docs.talon.one/docs/dev/concepts/attributes#built-in-attributes) or [custom ones](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes). Custom attributes must be created in the Campaign Manager before you set them with this property. 
 * @member {Object} attributes
 */
NewCustomerSessionV2.prototype['attributes'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
NewCustomerSessionV2['StateEnum'] = {

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



export default NewCustomerSessionV2;

