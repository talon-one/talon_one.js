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
 * The NewApplicationCIFExpression model module.
 * @module model/NewApplicationCIFExpression
 * @version 9.0.0
 */
class NewApplicationCIFExpression {
    /**
     * Constructs a new <code>NewApplicationCIFExpression</code>.
     * @alias module:model/NewApplicationCIFExpression
     */
    constructor() { 
        
        NewApplicationCIFExpression.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewApplicationCIFExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplicationCIFExpression} obj Optional instance to populate.
     * @return {module:model/NewApplicationCIFExpression} The populated <code>NewApplicationCIFExpression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewApplicationCIFExpression();

            if (data.hasOwnProperty('cartItemFilterId')) {
                obj['cartItemFilterId'] = ApiClient.convertToType(data['cartItemFilterId'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = ApiClient.convertToType(data['expression'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * The ID of the Application cart item filter.
 * @member {Number} cartItemFilterId
 */
NewApplicationCIFExpression.prototype['cartItemFilterId'] = undefined;

/**
 * The ID of the user who created the Application cart item filter.
 * @member {Number} createdBy
 */
NewApplicationCIFExpression.prototype['createdBy'] = undefined;

/**
 * Arbitrary additional JSON data associated with the Application cart item filter.
 * @member {Array.<Object>} expression
 */
NewApplicationCIFExpression.prototype['expression'] = undefined;






export default NewApplicationCIFExpression;

