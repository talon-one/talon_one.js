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
 * The ApplicationCIFExpression model module.
 * @module model/ApplicationCIFExpression
 * @version 12.0.0
 */
class ApplicationCIFExpression {
    /**
     * Constructs a new <code>ApplicationCIFExpression</code>.
     * @alias module:model/ApplicationCIFExpression
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param applicationId {Number} The ID of the Application that owns this entity.
     */
    constructor(id, created, applicationId) { 
        
        ApplicationCIFExpression.initialize(this, id, created, applicationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
    }

    /**
     * Constructs a <code>ApplicationCIFExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCIFExpression} obj Optional instance to populate.
     * @return {module:model/ApplicationCIFExpression} The populated <code>ApplicationCIFExpression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCIFExpression();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('cartItemFilterId')) {
                obj['cartItemFilterId'] = ApiClient.convertToType(data['cartItemFilterId'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = ApiClient.convertToType(data['expression'], [Object]);
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
ApplicationCIFExpression.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
ApplicationCIFExpression.prototype['created'] = undefined;

/**
 * The ID of the Application cart item filter.
 * @member {Number} cartItemFilterId
 */
ApplicationCIFExpression.prototype['cartItemFilterId'] = undefined;

/**
 * The ID of the user who created the Application cart item filter.
 * @member {Number} createdBy
 */
ApplicationCIFExpression.prototype['createdBy'] = undefined;

/**
 * Arbitrary additional JSON data associated with the Application cart item filter.
 * @member {Array.<Object>} expression
 */
ApplicationCIFExpression.prototype['expression'] = undefined;

/**
 * The ID of the Application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationCIFExpression.prototype['applicationId'] = undefined;






export default ApplicationCIFExpression;

