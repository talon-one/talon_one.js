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
import Campaign from './Campaign';
import Coupon from './Coupon';
import CustomerProfile from './CustomerProfile';
import CustomerSessionV2 from './CustomerSessionV2';
import Effect from './Effect';
import Event from './Event';
import Giveaway from './Giveaway';
import IntegrationCoupon from './IntegrationCoupon';
import InventoryReferral from './InventoryReferral';
import Loyalty from './Loyalty';
import ModelReturn from './ModelReturn';
import Referral from './Referral';
import RuleFailureReason from './RuleFailureReason';

/**
 * The IntegrationStateV2 model module.
 * @module model/IntegrationStateV2
 * @version 10.0.0
 */
class IntegrationStateV2 {
    /**
     * Constructs a new <code>IntegrationStateV2</code>.
     * Contains all entities that might interest Talon.One integrations. 
     * @alias module:model/IntegrationStateV2
     * @param effects {Array.<module:model/Effect>} The effects generated by the rules in your running campaigns. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
     * @param createdCoupons {Array.<module:model/Coupon>} 
     * @param createdReferrals {Array.<module:model/Referral>} 
     */
    constructor(effects, createdCoupons, createdReferrals) { 
        
        IntegrationStateV2.initialize(this, effects, createdCoupons, createdReferrals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, effects, createdCoupons, createdReferrals) { 
        obj['effects'] = effects;
        obj['createdCoupons'] = createdCoupons;
        obj['createdReferrals'] = createdReferrals;
    }

    /**
     * Constructs a <code>IntegrationStateV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationStateV2} obj Optional instance to populate.
     * @return {module:model/IntegrationStateV2} The populated <code>IntegrationStateV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationStateV2();

            if (data.hasOwnProperty('customerSession')) {
                obj['customerSession'] = CustomerSessionV2.constructFromObject(data['customerSession']);
            }
            if (data.hasOwnProperty('customerProfile')) {
                obj['customerProfile'] = CustomerProfile.constructFromObject(data['customerProfile']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = Event.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('loyalty')) {
                obj['loyalty'] = Loyalty.constructFromObject(data['loyalty']);
            }
            if (data.hasOwnProperty('referral')) {
                obj['referral'] = InventoryReferral.constructFromObject(data['referral']);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [IntegrationCoupon]);
            }
            if (data.hasOwnProperty('triggeredCampaigns')) {
                obj['triggeredCampaigns'] = ApiClient.convertToType(data['triggeredCampaigns'], [Campaign]);
            }
            if (data.hasOwnProperty('effects')) {
                obj['effects'] = ApiClient.convertToType(data['effects'], [Effect]);
            }
            if (data.hasOwnProperty('ruleFailureReasons')) {
                obj['ruleFailureReasons'] = ApiClient.convertToType(data['ruleFailureReasons'], [RuleFailureReason]);
            }
            if (data.hasOwnProperty('createdCoupons')) {
                obj['createdCoupons'] = ApiClient.convertToType(data['createdCoupons'], [Coupon]);
            }
            if (data.hasOwnProperty('createdReferrals')) {
                obj['createdReferrals'] = ApiClient.convertToType(data['createdReferrals'], [Referral]);
            }
            if (data.hasOwnProperty('awardedGiveaways')) {
                obj['awardedGiveaways'] = ApiClient.convertToType(data['awardedGiveaways'], [Giveaway]);
            }
            if (data.hasOwnProperty('return')) {
                obj['return'] = ModelReturn.constructFromObject(data['return']);
            }
            if (data.hasOwnProperty('previousReturns')) {
                obj['previousReturns'] = ApiClient.convertToType(data['previousReturns'], [ModelReturn]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CustomerSessionV2} customerSession
 */
IntegrationStateV2.prototype['customerSession'] = undefined;

/**
 * @member {module:model/CustomerProfile} customerProfile
 */
IntegrationStateV2.prototype['customerProfile'] = undefined;

/**
 * @member {module:model/Event} event
 */
IntegrationStateV2.prototype['event'] = undefined;

/**
 * @member {module:model/Loyalty} loyalty
 */
IntegrationStateV2.prototype['loyalty'] = undefined;

/**
 * @member {module:model/InventoryReferral} referral
 */
IntegrationStateV2.prototype['referral'] = undefined;

/**
 * @member {Array.<module:model/IntegrationCoupon>} coupons
 */
IntegrationStateV2.prototype['coupons'] = undefined;

/**
 * @member {Array.<module:model/Campaign>} triggeredCampaigns
 */
IntegrationStateV2.prototype['triggeredCampaigns'] = undefined;

/**
 * The effects generated by the rules in your running campaigns. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects).
 * @member {Array.<module:model/Effect>} effects
 */
IntegrationStateV2.prototype['effects'] = undefined;

/**
 * @member {Array.<module:model/RuleFailureReason>} ruleFailureReasons
 */
IntegrationStateV2.prototype['ruleFailureReasons'] = undefined;

/**
 * @member {Array.<module:model/Coupon>} createdCoupons
 */
IntegrationStateV2.prototype['createdCoupons'] = undefined;

/**
 * @member {Array.<module:model/Referral>} createdReferrals
 */
IntegrationStateV2.prototype['createdReferrals'] = undefined;

/**
 * @member {Array.<module:model/Giveaway>} awardedGiveaways
 */
IntegrationStateV2.prototype['awardedGiveaways'] = undefined;

/**
 * @member {module:model/ModelReturn} return
 */
IntegrationStateV2.prototype['return'] = undefined;

/**
 * @member {Array.<module:model/ModelReturn>} previousReturns
 */
IntegrationStateV2.prototype['previousReturns'] = undefined;






export default IntegrationStateV2;

