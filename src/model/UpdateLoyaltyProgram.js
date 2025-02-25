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
import CodeGeneratorSettings from './CodeGeneratorSettings';
import NewLoyaltyTier from './NewLoyaltyTier';

/**
 * The UpdateLoyaltyProgram model module.
 * @module model/UpdateLoyaltyProgram
 * @version 11.0.0
 */
class UpdateLoyaltyProgram {
    /**
     * Constructs a new <code>UpdateLoyaltyProgram</code>.
     * An updated loyalty program.
     * @alias module:model/UpdateLoyaltyProgram
     */
    constructor() { 
        
        UpdateLoyaltyProgram.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateLoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/UpdateLoyaltyProgram} The populated <code>UpdateLoyaltyProgram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateLoyaltyProgram();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplications')) {
                obj['subscribedApplications'] = ApiClient.convertToType(data['subscribedApplications'], ['Number']);
            }
            if (data.hasOwnProperty('defaultValidity')) {
                obj['defaultValidity'] = ApiClient.convertToType(data['defaultValidity'], 'String');
            }
            if (data.hasOwnProperty('defaultPending')) {
                obj['defaultPending'] = ApiClient.convertToType(data['defaultPending'], 'String');
            }
            if (data.hasOwnProperty('allowSubledger')) {
                obj['allowSubledger'] = ApiClient.convertToType(data['allowSubledger'], 'Boolean');
            }
            if (data.hasOwnProperty('usersPerCardLimit')) {
                obj['usersPerCardLimit'] = ApiClient.convertToType(data['usersPerCardLimit'], 'Number');
            }
            if (data.hasOwnProperty('sandbox')) {
                obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
            }
            if (data.hasOwnProperty('programJoinPolicy')) {
                obj['programJoinPolicy'] = ApiClient.convertToType(data['programJoinPolicy'], 'String');
            }
            if (data.hasOwnProperty('tiersExpirationPolicy')) {
                obj['tiersExpirationPolicy'] = ApiClient.convertToType(data['tiersExpirationPolicy'], 'String');
            }
            if (data.hasOwnProperty('tierCycleStartDate')) {
                obj['tierCycleStartDate'] = ApiClient.convertToType(data['tierCycleStartDate'], 'Date');
            }
            if (data.hasOwnProperty('tiersExpireIn')) {
                obj['tiersExpireIn'] = ApiClient.convertToType(data['tiersExpireIn'], 'String');
            }
            if (data.hasOwnProperty('tiersDowngradePolicy')) {
                obj['tiersDowngradePolicy'] = ApiClient.convertToType(data['tiersDowngradePolicy'], 'String');
            }
            if (data.hasOwnProperty('cardCodeSettings')) {
                obj['cardCodeSettings'] = CodeGeneratorSettings.constructFromObject(data['cardCodeSettings']);
            }
            if (data.hasOwnProperty('returnPolicy')) {
                obj['returnPolicy'] = ApiClient.convertToType(data['returnPolicy'], 'String');
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [NewLoyaltyTier]);
            }
        }
        return obj;
    }


}

/**
 * The display title for the Loyalty Program.
 * @member {String} title
 */
UpdateLoyaltyProgram.prototype['title'] = undefined;

/**
 * Description of our Loyalty Program.
 * @member {String} description
 */
UpdateLoyaltyProgram.prototype['description'] = undefined;

/**
 * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
 * @member {Array.<Number>} subscribedApplications
 */
UpdateLoyaltyProgram.prototype['subscribedApplications'] = undefined;

/**
 * The default duration after which new loyalty points should expire. Can be 'unlimited' or a specific time. The time format is a number followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported: - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day. - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. 
 * @member {String} defaultValidity
 */
UpdateLoyaltyProgram.prototype['defaultValidity'] = undefined;

/**
 * The default duration of the pending time after which points should be valid. Can be 'immediate' or a specific time. The time format is a number followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported: - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day. - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. 
 * @member {String} defaultPending
 */
UpdateLoyaltyProgram.prototype['defaultPending'] = undefined;

/**
 * Indicates if this program supports subledgers inside the program.
 * @member {Boolean} allowSubledger
 */
UpdateLoyaltyProgram.prototype['allowSubledger'] = undefined;

/**
 * The max amount of user profiles with whom a card can be shared. This can be set to 0 for no limit. This property is only used when `cardBased` is `true`. 
 * @member {Number} usersPerCardLimit
 */
UpdateLoyaltyProgram.prototype['usersPerCardLimit'] = undefined;

/**
 * Indicates if this program is a live or sandbox program. Programs of a given type can only be connected to Applications of the same type.
 * @member {Boolean} sandbox
 */
UpdateLoyaltyProgram.prototype['sandbox'] = undefined;

/**
 * The policy that defines when the customer joins the loyalty program.   - `not_join`: The customer does not join the loyalty program but can still earn and spend loyalty points.       **Note**: The customer does not have a program join date.   - `points_activated`: The customer joins the loyalty program only when their earned loyalty points become active for the first time.   - `points_earned`: The customer joins the loyalty program when they earn loyalty points for the first time. 
 * @member {module:model/UpdateLoyaltyProgram.ProgramJoinPolicyEnum} programJoinPolicy
 */
UpdateLoyaltyProgram.prototype['programJoinPolicy'] = undefined;

/**
 * The policy that defines how tier expiration, used to reevaluate the customer's current tier, is determined.  - `tier_start_date`: The tier expiration is relative to when the customer joined the current tier.  - `program_join_date`: The tier expiration is relative to when the customer joined the loyalty program.  - `customer_attribute`: The tier expiration is determined by a custom customer attribute.  - `absolute_expiration`: The tier is reevaluated at the start of each tier cycle. For this policy, it is required to provide a `tierCycleStartDate`. 
 * @member {module:model/UpdateLoyaltyProgram.TiersExpirationPolicyEnum} tiersExpirationPolicy
 */
UpdateLoyaltyProgram.prototype['tiersExpirationPolicy'] = undefined;

/**
 * Timestamp at which the tier cycle starts for all customers in the loyalty program.  **Note**: This is only required when the tier expiration policy is set to `absolute_expiration`. 
 * @member {Date} tierCycleStartDate
 */
UpdateLoyaltyProgram.prototype['tierCycleStartDate'] = undefined;

/**
 * The amount of time after which the tier expires and is reevaluated.  The time format is an **integer** followed by one letter indicating the time unit. Examples: `30s`, `40m`, `1h`, `5D`, `7W`, `10M`, `15Y`.  Available units:  - `s`: seconds - `m`: minutes - `h`: hours - `D`: days - `W`: weeks - `M`: months - `Y`: years  You can round certain units up or down: - `_D` for rounding down days only. Signifies the start of the day. - `_U` for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year. 
 * @member {String} tiersExpireIn
 */
UpdateLoyaltyProgram.prototype['tiersExpireIn'] = undefined;

/**
 * The policy that defines how customer tiers are downgraded in the loyalty program after tier reevaluation.  - `one_down`: If the customer doesn't have enough points to stay in the current tier, they are downgraded by one tier.  - `balance_based`: The customer's tier is reevaluated based on the amount of active points they have at the moment. 
 * @member {module:model/UpdateLoyaltyProgram.TiersDowngradePolicyEnum} tiersDowngradePolicy
 */
UpdateLoyaltyProgram.prototype['tiersDowngradePolicy'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} cardCodeSettings
 */
UpdateLoyaltyProgram.prototype['cardCodeSettings'] = undefined;

/**
 * The policy that defines the rollback of points in case of a partially returned, cancelled, or reopened [customer session](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions). - `only_pending`: Only pending points can be rolled back. - `within_balance`: Available active points can be rolled back if there aren't enough pending points. The active balance of the customer cannot be negative. - `unlimited`: Allows negative balance without any limit. 
 * @member {module:model/UpdateLoyaltyProgram.ReturnPolicyEnum} returnPolicy
 */
UpdateLoyaltyProgram.prototype['returnPolicy'] = undefined;

/**
 * The tiers in this loyalty program.
 * @member {Array.<module:model/NewLoyaltyTier>} tiers
 */
UpdateLoyaltyProgram.prototype['tiers'] = undefined;





/**
 * Allowed values for the <code>programJoinPolicy</code> property.
 * @enum {String}
 * @readonly
 */
UpdateLoyaltyProgram['ProgramJoinPolicyEnum'] = {

    /**
     * value: "not_join"
     * @const
     */
    "not_join": "not_join",

    /**
     * value: "points_activated"
     * @const
     */
    "points_activated": "points_activated",

    /**
     * value: "points_earned"
     * @const
     */
    "points_earned": "points_earned"
};


/**
 * Allowed values for the <code>tiersExpirationPolicy</code> property.
 * @enum {String}
 * @readonly
 */
UpdateLoyaltyProgram['TiersExpirationPolicyEnum'] = {

    /**
     * value: "tier_start_date"
     * @const
     */
    "tier_start_date": "tier_start_date",

    /**
     * value: "program_join_date"
     * @const
     */
    "program_join_date": "program_join_date",

    /**
     * value: "customer_attribute"
     * @const
     */
    "customer_attribute": "customer_attribute",

    /**
     * value: "absolute_expiration"
     * @const
     */
    "absolute_expiration": "absolute_expiration"
};


/**
 * Allowed values for the <code>tiersDowngradePolicy</code> property.
 * @enum {String}
 * @readonly
 */
UpdateLoyaltyProgram['TiersDowngradePolicyEnum'] = {

    /**
     * value: "one_down"
     * @const
     */
    "one_down": "one_down",

    /**
     * value: "balance_based"
     * @const
     */
    "balance_based": "balance_based"
};


/**
 * Allowed values for the <code>returnPolicy</code> property.
 * @enum {String}
 * @readonly
 */
UpdateLoyaltyProgram['ReturnPolicyEnum'] = {

    /**
     * value: "only_pending"
     * @const
     */
    "only_pending": "only_pending",

    /**
     * value: "within_balance"
     * @const
     */
    "within_balance": "within_balance",

    /**
     * value: "unlimited"
     * @const
     */
    "unlimited": "unlimited"
};



export default UpdateLoyaltyProgram;

