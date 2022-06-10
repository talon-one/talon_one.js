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
import ProfileAudiencesChanges from './ProfileAudiencesChanges';

/**
 * The CustomerProfileIntegrationRequestV2 model module.
 * @module model/CustomerProfileIntegrationRequestV2
 * @version 4.5.0
 */
class CustomerProfileIntegrationRequestV2 {
    /**
     * Constructs a new <code>CustomerProfileIntegrationRequestV2</code>.
     * 
     * @alias module:model/CustomerProfileIntegrationRequestV2
     */
    constructor() { 
        
        CustomerProfileIntegrationRequestV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerProfileIntegrationRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileIntegrationRequestV2} obj Optional instance to populate.
     * @return {module:model/CustomerProfileIntegrationRequestV2} The populated <code>CustomerProfileIntegrationRequestV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProfileIntegrationRequestV2();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('audiencesChanges')) {
                obj['audiencesChanges'] = ProfileAudiencesChanges.constructFromObject(data['audiencesChanges']);
            }
            if (data.hasOwnProperty('responseContent')) {
                obj['responseContent'] = ApiClient.convertToType(data['responseContent'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */
CustomerProfileIntegrationRequestV2.prototype['attributes'] = undefined;

/**
 * @member {module:model/ProfileAudiencesChanges} audiencesChanges
 */
CustomerProfileIntegrationRequestV2.prototype['audiencesChanges'] = undefined;

/**
 * Optional list of requested information to be present on the response related to the customer profile update.  Currently supported: \"customerProfile\", \"triggeredCampaigns\", \"loyalty\", \"event\", \"awardedGiveaways\", \"ruleFailureReasons\".  **Note:** `ruleFailureReasons` is always part of the response when the Application type is `sandbox`. 
 * @member {Array.<module:model/CustomerProfileIntegrationRequestV2.ResponseContentEnum>} responseContent
 */
CustomerProfileIntegrationRequestV2.prototype['responseContent'] = undefined;





/**
 * Allowed values for the <code>responseContent</code> property.
 * @enum {String}
 * @readonly
 */
CustomerProfileIntegrationRequestV2['ResponseContentEnum'] = {

    /**
     * value: "customerProfile"
     * @const
     */
    "customerProfile": "customerProfile",

    /**
     * value: "triggeredCampaigns"
     * @const
     */
    "triggeredCampaigns": "triggeredCampaigns",

    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty",

    /**
     * value: "event"
     * @const
     */
    "event": "event",

    /**
     * value: "awardedGiveaways"
     * @const
     */
    "awardedGiveaways": "awardedGiveaways",

    /**
     * value: "ruleFailureReasons"
     * @const
     */
    "ruleFailureReasons": "ruleFailureReasons"
};



export default CustomerProfileIntegrationRequestV2;

