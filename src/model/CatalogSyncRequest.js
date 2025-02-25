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
import CatalogAction from './CatalogAction';

/**
 * The CatalogSyncRequest model module.
 * @module model/CatalogSyncRequest
 * @version 11.0.0
 */
class CatalogSyncRequest {
    /**
     * Constructs a new <code>CatalogSyncRequest</code>.
     * @alias module:model/CatalogSyncRequest
     * @param actions {Array.<module:model/CatalogAction>} 
     */
    constructor(actions) { 
        
        CatalogSyncRequest.initialize(this, actions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, actions) { 
        obj['actions'] = actions;
    }

    /**
     * Constructs a <code>CatalogSyncRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogSyncRequest} obj Optional instance to populate.
     * @return {module:model/CatalogSyncRequest} The populated <code>CatalogSyncRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogSyncRequest();

            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [CatalogAction]);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CatalogAction>} actions
 */
CatalogSyncRequest.prototype['actions'] = undefined;

/**
 * The version number of the catalog to apply the actions on.
 * @member {Number} version
 */
CatalogSyncRequest.prototype['version'] = undefined;






export default CatalogSyncRequest;

