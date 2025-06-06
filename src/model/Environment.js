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
import AccountAdditionalCost from './AccountAdditionalCost';
import Achievement from './Achievement';
import ApplicationCIF from './ApplicationCIF';
import Attribute from './Attribute';
import Audience from './Audience';
import Collection from './Collection';
import FunctionDef from './FunctionDef';
import GiveawaysPool from './GiveawaysPool';
import LoyaltyProgram from './LoyaltyProgram';
import SlotDef from './SlotDef';
import TemplateDef from './TemplateDef';

/**
 * The Environment model module.
 * @module model/Environment
 * @version 12.0.0
 */
class Environment {
    /**
     * Constructs a new <code>Environment</code>.
     * @alias module:model/Environment
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param applicationId {Number} The ID of the Application that owns this entity.
     * @param slots {Array.<module:model/SlotDef>} The slots defined for this application.
     * @param functions {Array.<module:model/FunctionDef>} The functions defined for this application.
     * @param templates {Array.<module:model/TemplateDef>} The templates defined for this application.
     * @param variables {String} A stringified version of the environment's Talang variables scope.
     */
    constructor(id, created, applicationId, slots, functions, templates, variables) { 
        
        Environment.initialize(this, id, created, applicationId, slots, functions, templates, variables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, applicationId, slots, functions, templates, variables) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['applicationId'] = applicationId;
        obj['slots'] = slots;
        obj['functions'] = functions;
        obj['templates'] = templates;
        obj['variables'] = variables;
    }

    /**
     * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment} obj Optional instance to populate.
     * @return {module:model/Environment} The populated <code>Environment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Environment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('slots')) {
                obj['slots'] = ApiClient.convertToType(data['slots'], [SlotDef]);
            }
            if (data.hasOwnProperty('functions')) {
                obj['functions'] = ApiClient.convertToType(data['functions'], [FunctionDef]);
            }
            if (data.hasOwnProperty('templates')) {
                obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateDef]);
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], 'String');
            }
            if (data.hasOwnProperty('giveawaysPools')) {
                obj['giveawaysPools'] = ApiClient.convertToType(data['giveawaysPools'], [GiveawaysPool]);
            }
            if (data.hasOwnProperty('loyaltyPrograms')) {
                obj['loyaltyPrograms'] = ApiClient.convertToType(data['loyaltyPrograms'], [LoyaltyProgram]);
            }
            if (data.hasOwnProperty('achievements')) {
                obj['achievements'] = ApiClient.convertToType(data['achievements'], [Achievement]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
            if (data.hasOwnProperty('additionalCosts')) {
                obj['additionalCosts'] = ApiClient.convertToType(data['additionalCosts'], [AccountAdditionalCost]);
            }
            if (data.hasOwnProperty('audiences')) {
                obj['audiences'] = ApiClient.convertToType(data['audiences'], [Audience]);
            }
            if (data.hasOwnProperty('collections')) {
                obj['collections'] = ApiClient.convertToType(data['collections'], [Collection]);
            }
            if (data.hasOwnProperty('applicationCartItemFilters')) {
                obj['applicationCartItemFilters'] = ApiClient.convertToType(data['applicationCartItemFilters'], [ApplicationCIF]);
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
Environment.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
Environment.prototype['created'] = undefined;

/**
 * The ID of the Application that owns this entity.
 * @member {Number} applicationId
 */
Environment.prototype['applicationId'] = undefined;

/**
 * The slots defined for this application.
 * @member {Array.<module:model/SlotDef>} slots
 */
Environment.prototype['slots'] = undefined;

/**
 * The functions defined for this application.
 * @member {Array.<module:model/FunctionDef>} functions
 */
Environment.prototype['functions'] = undefined;

/**
 * The templates defined for this application.
 * @member {Array.<module:model/TemplateDef>} templates
 */
Environment.prototype['templates'] = undefined;

/**
 * A stringified version of the environment's Talang variables scope.
 * @member {String} variables
 */
Environment.prototype['variables'] = undefined;

/**
 * The giveaways pools that the application is subscribed to.
 * @member {Array.<module:model/GiveawaysPool>} giveawaysPools
 */
Environment.prototype['giveawaysPools'] = undefined;

/**
 * The loyalty programs that the application is subscribed to.
 * @member {Array.<module:model/LoyaltyProgram>} loyaltyPrograms
 */
Environment.prototype['loyaltyPrograms'] = undefined;

/**
 * The achievements, linked to the campaigns, belonging to the application.
 * @member {Array.<module:model/Achievement>} achievements
 */
Environment.prototype['achievements'] = undefined;

/**
 * The attributes that the application is subscribed to.
 * @member {Array.<module:model/Attribute>} attributes
 */
Environment.prototype['attributes'] = undefined;

/**
 * The additional costs that the application is subscribed to.
 * @member {Array.<module:model/AccountAdditionalCost>} additionalCosts
 */
Environment.prototype['additionalCosts'] = undefined;

/**
 * The audiences contained in the account which the application belongs to.
 * @member {Array.<module:model/Audience>} audiences
 */
Environment.prototype['audiences'] = undefined;

/**
 * The account-level collections that the application is subscribed to.
 * @member {Array.<module:model/Collection>} collections
 */
Environment.prototype['collections'] = undefined;

/**
 * The cart item filters belonging to the Application.
 * @member {Array.<module:model/ApplicationCIF>} applicationCartItemFilters
 */
Environment.prototype['applicationCartItemFilters'] = undefined;






export default Environment;

