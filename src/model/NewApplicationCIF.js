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
 * The NewApplicationCIF model module.
 * @module model/NewApplicationCIF
 * @version 9.0.0
 */
class NewApplicationCIF {
    /**
     * Constructs a new <code>NewApplicationCIF</code>.
     * @alias module:model/NewApplicationCIF
     * @param name {String} The name of the Application cart item filter used in API requests.
     */
    constructor(name) { 
        
        NewApplicationCIF.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewApplicationCIF</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplicationCIF} obj Optional instance to populate.
     * @return {module:model/NewApplicationCIF} The populated <code>NewApplicationCIF</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewApplicationCIF();

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
        }
        return obj;
    }


}

/**
 * The name of the Application cart item filter used in API requests.
 * @member {String} name
 */
NewApplicationCIF.prototype['name'] = undefined;

/**
 * A short description of the Application cart item filter.
 * @member {String} description
 */
NewApplicationCIF.prototype['description'] = undefined;

/**
 * The ID of the expression that the Application cart item filter uses.
 * @member {Number} activeExpressionId
 */
NewApplicationCIF.prototype['activeExpressionId'] = undefined;

/**
 * The ID of the user who last updated the Application cart item filter.
 * @member {Number} modifiedBy
 */
NewApplicationCIF.prototype['modifiedBy'] = undefined;

/**
 * The ID of the user who created the Application cart item filter.
 * @member {Number} createdBy
 */
NewApplicationCIF.prototype['createdBy'] = undefined;

/**
 * Timestamp of the most recent update to the Application cart item filter.
 * @member {Date} modified
 */
NewApplicationCIF.prototype['modified'] = undefined;






export default NewApplicationCIF;

