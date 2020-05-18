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
 * The IntegrationEntity model module.
 * @module model/IntegrationEntity
 * @version 4.1.0
 */
class IntegrationEntity {
    /**
     * Constructs a new <code>IntegrationEntity</code>.
     * @alias module:model/IntegrationEntity
     * @param integrationId {String} The ID used for this entity in the application system.
     * @param created {Date} The exact moment this entity was created.
     */
    constructor(integrationId, created) { 
        
        IntegrationEntity.initialize(this, integrationId, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, integrationId, created) { 
        obj['integrationId'] = integrationId;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>IntegrationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationEntity} obj Optional instance to populate.
     * @return {module:model/IntegrationEntity} The populated <code>IntegrationEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationEntity();

            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The ID used for this entity in the application system.
 * @member {String} integrationId
 */
IntegrationEntity.prototype['integrationId'] = undefined;

/**
 * The exact moment this entity was created.
 * @member {Date} created
 */
IntegrationEntity.prototype['created'] = undefined;






export default IntegrationEntity;

