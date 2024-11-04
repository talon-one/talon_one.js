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
 * The ApplicationCIF model module.
 * @module model/ApplicationCIF
 * @version 9.0.0
 */
class ApplicationCIF {
    /**
     * Constructs a new <code>ApplicationCIF</code>.
     * 
     * @alias module:model/ApplicationCIF
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param name {String} The name of the Application cart item filter used in API requests.
     * @param applicationId {Number} The ID of the application that owns this entity.
     */
    constructor(id, created, name, applicationId) { 
        
        ApplicationCIF.initialize(this, id, created, name, applicationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, name, applicationId) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['name'] = name;
        obj['applicationId'] = applicationId;
    }

    /**
     * Constructs a <code>ApplicationCIF</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCIF} obj Optional instance to populate.
     * @return {module:model/ApplicationCIF} The populated <code>ApplicationCIF</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCIF();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('activeExpressionId')) {
                obj['activeExpressionId'] = ApiClient.convertToType(data['activeExpressionId'], 'Number');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
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
ApplicationCIF.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
ApplicationCIF.prototype['created'] = undefined;

/**
 * The name of the Application cart item filter used in API requests.
 * @member {String} name
 */
ApplicationCIF.prototype['name'] = undefined;

/**
 * A short description of the Application cart item filter.
 * @member {String} description
 */
ApplicationCIF.prototype['description'] = undefined;

/**
 * The ID of the expression that the Application cart item filter uses.
 * @member {Number} activeExpressionId
 */
ApplicationCIF.prototype['activeExpressionId'] = undefined;

/**
 * The ID of the user who last updated the Application cart item filter.
 * @member {Number} modifiedBy
 */
ApplicationCIF.prototype['modifiedBy'] = undefined;

/**
 * The ID of the user who created the Application cart item filter.
 * @member {Number} createdBy
 */
ApplicationCIF.prototype['createdBy'] = undefined;

/**
 * Timestamp of the most recent update to the Application cart item filter.
 * @member {Date} modified
 */
ApplicationCIF.prototype['modified'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationCIF.prototype['applicationId'] = undefined;






export default ApplicationCIF;
