/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerSession](https://docs.talon.one/integration-api/#operation/updateCustomerSessionV2) endpoint is `https://mycompany.talon.one/v2/customer_sessions/{Id}` 
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
import NewLoyaltyTier from './NewLoyaltyTier';

/**
 * The UpdateLoyaltyProgram model module.
 * @module model/UpdateLoyaltyProgram
 * @version 4.5.0
 */
class UpdateLoyaltyProgram {
    /**
     * Constructs a new <code>UpdateLoyaltyProgram</code>.
     * 
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
 * Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m'.
 * @member {String} defaultValidity
 */
UpdateLoyaltyProgram.prototype['defaultValidity'] = undefined;

/**
 * Indicates the default duration for the pending time, after which points will be valid. The format is a number followed by a duration unit, like '1h' or '40m'.
 * @member {String} defaultPending
 */
UpdateLoyaltyProgram.prototype['defaultPending'] = undefined;

/**
 * Indicates if this program supports subledgers inside the program
 * @member {Boolean} allowSubledger
 */
UpdateLoyaltyProgram.prototype['allowSubledger'] = undefined;

/**
 * The max amount of user profiles with whom a card can be shared. This can be set to 0 for no limit. This property is only used when `cardBased` is `true`. 
 * @member {Number} usersPerCardLimit
 */
UpdateLoyaltyProgram.prototype['usersPerCardLimit'] = undefined;

/**
 * The tiers in this loyalty program
 * @member {Array.<module:model/NewLoyaltyTier>} tiers
 */
UpdateLoyaltyProgram.prototype['tiers'] = undefined;






export default UpdateLoyaltyProgram;

