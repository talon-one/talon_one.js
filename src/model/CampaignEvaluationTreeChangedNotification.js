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
import CampaignSet from './CampaignSet';

/**
 * The CampaignEvaluationTreeChangedNotification model module.
 * @module model/CampaignEvaluationTreeChangedNotification
 * @version 7.0.0
 */
class CampaignEvaluationTreeChangedNotification {
    /**
     * Constructs a new <code>CampaignEvaluationTreeChangedNotification</code>.
     * Notification about an Application whose campaign evaluation tree changed.
     * @alias module:model/CampaignEvaluationTreeChangedNotification
     * @param applicationId {Number} The ID of the Application whose campaign evaluation tree changed.
     * @param evaluationTree {module:model/CampaignSet} 
     */
    constructor(applicationId, evaluationTree) { 
        
        CampaignEvaluationTreeChangedNotification.initialize(this, applicationId, evaluationTree);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId, evaluationTree) { 
        obj['applicationId'] = applicationId;
        obj['evaluationTree'] = evaluationTree;
    }

    /**
     * Constructs a <code>CampaignEvaluationTreeChangedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignEvaluationTreeChangedNotification} obj Optional instance to populate.
     * @return {module:model/CampaignEvaluationTreeChangedNotification} The populated <code>CampaignEvaluationTreeChangedNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignEvaluationTreeChangedNotification();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('oldEvaluationTree')) {
                obj['oldEvaluationTree'] = CampaignSet.constructFromObject(data['oldEvaluationTree']);
            }
            if (data.hasOwnProperty('evaluationTree')) {
                obj['evaluationTree'] = CampaignSet.constructFromObject(data['evaluationTree']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the Application whose campaign evaluation tree changed.
 * @member {Number} applicationId
 */
CampaignEvaluationTreeChangedNotification.prototype['applicationId'] = undefined;

/**
 * @member {module:model/CampaignSet} oldEvaluationTree
 */
CampaignEvaluationTreeChangedNotification.prototype['oldEvaluationTree'] = undefined;

/**
 * @member {module:model/CampaignSet} evaluationTree
 */
CampaignEvaluationTreeChangedNotification.prototype['evaluationTree'] = undefined;






export default CampaignEvaluationTreeChangedNotification;

