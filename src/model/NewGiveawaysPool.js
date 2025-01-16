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
 * The NewGiveawaysPool model module.
 * @module model/NewGiveawaysPool
 * @version 10.0.0
 */
class NewGiveawaysPool {
    /**
     * Constructs a new <code>NewGiveawaysPool</code>.
     * @alias module:model/NewGiveawaysPool
     * @param name {String} The name of this giveaways pool.
     * @param sandbox {Boolean} Indicates if this program is a live or sandbox program. Programs of a given type can only be connected to Applications of the same type.
     */
    constructor(name, sandbox) { 
        
        NewGiveawaysPool.initialize(this, name, sandbox);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, sandbox) { 
        obj['name'] = name;
        obj['sandbox'] = sandbox;
    }

    /**
     * Constructs a <code>NewGiveawaysPool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewGiveawaysPool} obj Optional instance to populate.
     * @return {module:model/NewGiveawaysPool} The populated <code>NewGiveawaysPool</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewGiveawaysPool();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscribedApplicationsIds')) {
                obj['subscribedApplicationsIds'] = ApiClient.convertToType(data['subscribedApplicationsIds'], ['Number']);
            }
            if (data.hasOwnProperty('sandbox')) {
                obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The name of this giveaways pool.
 * @member {String} name
 */
NewGiveawaysPool.prototype['name'] = undefined;

/**
 * The description of this giveaways pool.
 * @member {String} description
 */
NewGiveawaysPool.prototype['description'] = undefined;

/**
 * A list of the IDs of the applications that this giveaways pool is enabled for.
 * @member {Array.<Number>} subscribedApplicationsIds
 */
NewGiveawaysPool.prototype['subscribedApplicationsIds'] = undefined;

/**
 * Indicates if this program is a live or sandbox program. Programs of a given type can only be connected to Applications of the same type.
 * @member {Boolean} sandbox
 */
NewGiveawaysPool.prototype['sandbox'] = undefined;






export default NewGiveawaysPool;

