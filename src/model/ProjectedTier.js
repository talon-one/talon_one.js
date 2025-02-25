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
 * The ProjectedTier model module.
 * @module model/ProjectedTier
 * @version 11.0.0
 */
class ProjectedTier {
    /**
     * Constructs a new <code>ProjectedTier</code>.
     * @alias module:model/ProjectedTier
     * @param projectedActivePoints {Number} The active points of the customer when their current tier expires.
     */
    constructor(projectedActivePoints) { 
        
        ProjectedTier.initialize(this, projectedActivePoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectedActivePoints) { 
        obj['projectedActivePoints'] = projectedActivePoints;
    }

    /**
     * Constructs a <code>ProjectedTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectedTier} obj Optional instance to populate.
     * @return {module:model/ProjectedTier} The populated <code>ProjectedTier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectedTier();

            if (data.hasOwnProperty('projectedActivePoints')) {
                obj['projectedActivePoints'] = ApiClient.convertToType(data['projectedActivePoints'], 'Number');
            }
            if (data.hasOwnProperty('stayInTierPoints')) {
                obj['stayInTierPoints'] = ApiClient.convertToType(data['stayInTierPoints'], 'Number');
            }
            if (data.hasOwnProperty('projectedTierName')) {
                obj['projectedTierName'] = ApiClient.convertToType(data['projectedTierName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The active points of the customer when their current tier expires.
 * @member {Number} projectedActivePoints
 */
ProjectedTier.prototype['projectedActivePoints'] = undefined;

/**
 * The number of points the customer needs to stay in the current tier.  **Note**: This is included in the response when the customer is projected to be downgraded. 
 * @member {Number} stayInTierPoints
 */
ProjectedTier.prototype['stayInTierPoints'] = undefined;

/**
 * The name of the tier the user will enter once their current tier expires.
 * @member {String} projectedTierName
 */
ProjectedTier.prototype['projectedTierName'] = undefined;






export default ProjectedTier;

