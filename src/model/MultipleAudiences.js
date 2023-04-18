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
import MultipleAudiencesItem from './MultipleAudiencesItem';

/**
 * The MultipleAudiences model module.
 * @module model/MultipleAudiences
 * @version 5.0.0
 */
class MultipleAudiences {
    /**
     * Constructs a new <code>MultipleAudiences</code>.
     * @alias module:model/MultipleAudiences
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param audiences {Array.<module:model/MultipleAudiencesItem>} 
     */
    constructor(accountId, audiences) { 
        
        MultipleAudiences.initialize(this, accountId, audiences);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, audiences) { 
        obj['accountId'] = accountId;
        obj['audiences'] = audiences;
    }

    /**
     * Constructs a <code>MultipleAudiences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleAudiences} obj Optional instance to populate.
     * @return {module:model/MultipleAudiences} The populated <code>MultipleAudiences</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultipleAudiences();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('audiences')) {
                obj['audiences'] = ApiClient.convertToType(data['audiences'], [MultipleAudiencesItem]);
            }
        }
        return obj;
    }


}

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
MultipleAudiences.prototype['accountId'] = undefined;

/**
 * @member {Array.<module:model/MultipleAudiencesItem>} audiences
 */
MultipleAudiences.prototype['audiences'] = undefined;






export default MultipleAudiences;

