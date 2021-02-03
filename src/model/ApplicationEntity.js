/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
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

/**
 * The ApplicationEntity model module.
 * @module model/ApplicationEntity
 * @version 4.3.0
 */
class ApplicationEntity {
    /**
     * Constructs a new <code>ApplicationEntity</code>.
     * @alias module:model/ApplicationEntity
     * @param applicationId {Number} The ID of the application that owns this entity.
     */
    constructor(applicationId) { 
        
        ApplicationEntity.initialize(this, applicationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applicationId) { 
        obj['applicationId'] = applicationId;
    }

    /**
     * Constructs a <code>ApplicationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEntity} obj Optional instance to populate.
     * @return {module:model/ApplicationEntity} The populated <code>ApplicationEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationEntity();

            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
ApplicationEntity.prototype['applicationId'] = undefined;






export default ApplicationEntity;

