/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
import LoyaltyTier from './LoyaltyTier';

/**
 * The LoyaltyProgram model module.
 * @module model/LoyaltyProgram
 * @version 5.0.0
 */
class LoyaltyProgram {
    /**
     * Constructs a new <code>LoyaltyProgram</code>.
     * 
     * @alias module:model/LoyaltyProgram
     * @param id {Number} The ID of loyalty program. Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param title {String} The display title for the Loyalty Program.
     * @param description {String} Description of our Loyalty Program.
     * @param subscribedApplications {Array.<Number>} A list containing the IDs of all applications that are subscribed to this Loyalty Program.
     * @param defaultValidity {String} The default duration after which new loyalty points should expire. Can be 'unlimited' or a specific time. The time format is a number followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported: - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day. - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. 
     * @param defaultPending {String} The default duration of the pending time after which points should be valid. Can be 'immediate' or a specific time. The time format is a number followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported: - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day. - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. 
     * @param allowSubledger {Boolean} Indicates if this program supports subledgers inside the program.
     * @param sandbox {Boolean} Indicates if this program is a live or sandbox program. Programs of a given type can only be connected to Applications of the same type.
     * @param accountID {Number} The ID of the Talon.One account that owns this program.
     * @param name {String} The internal name for the Loyalty Program. This is an immutable value.
     * @param timezone {String} A string containing an IANA timezone descriptor.
     * @param cardBased {Boolean} Defines the type of loyalty program: - `true`: the program is a card-based. - `false`: the program is profile-based. 
     */
    constructor(id, created, title, description, subscribedApplications, defaultValidity, defaultPending, allowSubledger, sandbox, accountID, name, timezone, cardBased) { 
        
        LoyaltyProgram.initialize(this, id, created, title, description, subscribedApplications, defaultValidity, defaultPending, allowSubledger, sandbox, accountID, name, timezone, cardBased);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, title, description, subscribedApplications, defaultValidity, defaultPending, allowSubledger, sandbox, accountID, name, timezone, cardBased) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['title'] = title;
        obj['description'] = description;
        obj['subscribedApplications'] = subscribedApplications;
        obj['defaultValidity'] = defaultValidity;
        obj['defaultPending'] = defaultPending;
        obj['allowSubledger'] = allowSubledger;
        obj['sandbox'] = sandbox;
        obj['accountID'] = accountID;
        obj['name'] = name;
        obj['timezone'] = timezone;
        obj['cardBased'] = cardBased;
    }

    /**
     * Constructs a <code>LoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgram} The populated <code>LoyaltyProgram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoyaltyProgram();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
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
            if (data.hasOwnProperty('accountID')) {
                obj['accountID'] = ApiClient.convertToType(data['accountID'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [LoyaltyTier]);
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('cardBased')) {
                obj['cardBased'] = ApiClient.convertToType(data['cardBased'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The ID of loyalty program. Internal ID of this entity.
 * @member {Number} id
 */
LoyaltyProgram.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
LoyaltyProgram.prototype['created'] = undefined;

/**
 * The display title for the Loyalty Program.
 * @member {String} title
 */
LoyaltyProgram.prototype['title'] = undefined;

/**
 * Description of our Loyalty Program.
 * @member {String} description
 */
LoyaltyProgram.prototype['description'] = undefined;

/**
 * A list containing the IDs of all applications that are subscribed to this Loyalty Program.
 * @member {Array.<Number>} subscribedApplications
 */
LoyaltyProgram.prototype['subscribedApplications'] = undefined;

/**
 * The default duration after which new loyalty points should expire. Can be 'unlimited' or a specific time. The time format is a number followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported: - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day. - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. 
 * @member {String} defaultValidity
 */
LoyaltyProgram.prototype['defaultValidity'] = undefined;

/**
 * The default duration of the pending time after which points should be valid. Can be 'immediate' or a specific time. The time format is a number followed by one letter indicating the time unit, like '30s', '40m', '1h', '5D', '7W', or 10M'. These rounding suffixes are also supported: - '_D' for rounding down. Can be used as a suffix after 'D', and signifies the start of the day. - '_U' for rounding up. Can be used as a suffix after 'D', 'W', and 'M', and signifies the end of the day, week, and month. 
 * @member {String} defaultPending
 */
LoyaltyProgram.prototype['defaultPending'] = undefined;

/**
 * Indicates if this program supports subledgers inside the program.
 * @member {Boolean} allowSubledger
 */
LoyaltyProgram.prototype['allowSubledger'] = undefined;

/**
 * The max amount of user profiles with whom a card can be shared. This can be set to 0 for no limit. This property is only used when `cardBased` is `true`. 
 * @member {Number} usersPerCardLimit
 */
LoyaltyProgram.prototype['usersPerCardLimit'] = undefined;

/**
 * Indicates if this program is a live or sandbox program. Programs of a given type can only be connected to Applications of the same type.
 * @member {Boolean} sandbox
 */
LoyaltyProgram.prototype['sandbox'] = undefined;

/**
 * The ID of the Talon.One account that owns this program.
 * @member {Number} accountID
 */
LoyaltyProgram.prototype['accountID'] = undefined;

/**
 * The internal name for the Loyalty Program. This is an immutable value.
 * @member {String} name
 */
LoyaltyProgram.prototype['name'] = undefined;

/**
 * The tiers in this loyalty program.
 * @member {Array.<module:model/LoyaltyTier>} tiers
 */
LoyaltyProgram.prototype['tiers'] = undefined;

/**
 * A string containing an IANA timezone descriptor.
 * @member {String} timezone
 */
LoyaltyProgram.prototype['timezone'] = undefined;

/**
 * Defines the type of loyalty program: - `true`: the program is a card-based. - `false`: the program is profile-based. 
 * @member {Boolean} cardBased
 * @default false
 */
LoyaltyProgram.prototype['cardBased'] = false;






export default LoyaltyProgram;

