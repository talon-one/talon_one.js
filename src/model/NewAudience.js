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
 * The NewAudience model module.
 * @module model/NewAudience
 * @version 5.0.1
 */
class NewAudience {
    /**
     * Constructs a new <code>NewAudience</code>.
     * 
     * @alias module:model/NewAudience
     * @param name {String} The human-friendly display name for this audience.
     */
    constructor(name) { 
        
        NewAudience.initialize(this, name);
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
     * Constructs a <code>NewAudience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAudience} obj Optional instance to populate.
     * @return {module:model/NewAudience} The populated <code>NewAudience</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewAudience();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sandbox')) {
                obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('integration')) {
                obj['integration'] = ApiClient.convertToType(data['integration'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('createdIn3rdParty')) {
                obj['createdIn3rdParty'] = ApiClient.convertToType(data['createdIn3rdParty'], 'Boolean');
            }
            if (data.hasOwnProperty('lastUpdate')) {
                obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The human-friendly display name for this audience.
 * @member {String} name
 */
NewAudience.prototype['name'] = undefined;

/**
 * Indicates if this is a live or sandbox Application.
 * @member {Boolean} sandbox
 */
NewAudience.prototype['sandbox'] = undefined;

/**
 * A description of the audience.
 * @member {String} description
 */
NewAudience.prototype['description'] = undefined;

/**
 * The Talon.One-supported [3rd-party platform](https://docs.talon.one/docs/dev/technology-partners/overview) that this audience was created in.  For example, `mParticle`, `Segment`, `Selligent`, `Braze`, or `Iterable`.  **Note:** If you do not integrate with any of these platforms, do not use this property. 
 * @member {String} integration
 */
NewAudience.prototype['integration'] = undefined;

/**
 * The ID of this audience in the third-party integration.  **Note:** To create an audience that doesn't come from a 3rd party platform, do not use this property. 
 * @member {String} integrationId
 */
NewAudience.prototype['integrationId'] = undefined;

/**
 * Determines if this audience is a 3rd party audience or not.
 * @member {Boolean} createdIn3rdParty
 */
NewAudience.prototype['createdIn3rdParty'] = undefined;

/**
 * The last time that the audience memberships changed.
 * @member {Date} lastUpdate
 */
NewAudience.prototype['lastUpdate'] = undefined;






export default NewAudience;

