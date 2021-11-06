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
import AudienceMembership from './AudienceMembership';
import LoyaltyMembership from './LoyaltyMembership';

/**
 * The ApplicationCustomer model module.
 * @module model/ApplicationCustomer
 * @version 4.4.0
 */
class ApplicationCustomer {
    /**
     * Constructs a new <code>ApplicationCustomer</code>.
     * 
     * @alias module:model/ApplicationCustomer
     * @param id {Number} Unique ID for this entity. Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created.
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system. The integration ID for this entity sent to and used in the Talon.One system.
     * @param attributes {Object} Arbitrary properties associated with this item
     * @param accountId {Number} The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile.
     * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
     * @param totalSales {Number} Sum of all purchases made by this customer
     * @param lastActivity {Date} Timestamp of the most recent event received from this customer
     */
    constructor(id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity) { 
        
        ApplicationCustomer.initialize(this, id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['integrationId'] = integrationId;
        obj['attributes'] = attributes;
        obj['accountId'] = accountId;
        obj['closedSessions'] = closedSessions;
        obj['totalSales'] = totalSales;
        obj['lastActivity'] = lastActivity;
    }

    /**
     * Constructs a <code>ApplicationCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCustomer} obj Optional instance to populate.
     * @return {module:model/ApplicationCustomer} The populated <code>ApplicationCustomer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationCustomer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('closedSessions')) {
                obj['closedSessions'] = ApiClient.convertToType(data['closedSessions'], 'Number');
            }
            if (data.hasOwnProperty('totalSales')) {
                obj['totalSales'] = ApiClient.convertToType(data['totalSales'], 'Number');
            }
            if (data.hasOwnProperty('loyaltyMemberships')) {
                obj['loyaltyMemberships'] = ApiClient.convertToType(data['loyaltyMemberships'], [LoyaltyMembership]);
            }
            if (data.hasOwnProperty('audienceMemberships')) {
                obj['audienceMemberships'] = ApiClient.convertToType(data['audienceMemberships'], [AudienceMembership]);
            }
            if (data.hasOwnProperty('lastActivity')) {
                obj['lastActivity'] = ApiClient.convertToType(data['lastActivity'], 'Date');
            }
            if (data.hasOwnProperty('advocateIntegrationId')) {
                obj['advocateIntegrationId'] = ApiClient.convertToType(data['advocateIntegrationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique ID for this entity. Unique ID for this entity.
 * @member {Number} id
 */
ApplicationCustomer.prototype['id'] = undefined;

/**
 * The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created.
 * @member {Date} created
 */
ApplicationCustomer.prototype['created'] = undefined;

/**
 * The integration ID for this entity sent to and used in the Talon.One system. The integration ID for this entity sent to and used in the Talon.One system.
 * @member {String} integrationId
 */
ApplicationCustomer.prototype['integrationId'] = undefined;

/**
 * Arbitrary properties associated with this item
 * @member {Object} attributes
 */
ApplicationCustomer.prototype['attributes'] = undefined;

/**
 * The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */
ApplicationCustomer.prototype['accountId'] = undefined;

/**
 * The total amount of closed sessions by a customer. A closed session is a successful purchase.
 * @member {Number} closedSessions
 */
ApplicationCustomer.prototype['closedSessions'] = undefined;

/**
 * Sum of all purchases made by this customer
 * @member {Number} totalSales
 */
ApplicationCustomer.prototype['totalSales'] = undefined;

/**
 * A list of loyalty programs joined by the customer
 * @member {Array.<module:model/LoyaltyMembership>} loyaltyMemberships
 */
ApplicationCustomer.prototype['loyaltyMemberships'] = undefined;

/**
 * A list of audiences the customer belongs to
 * @member {Array.<module:model/AudienceMembership>} audienceMemberships
 */
ApplicationCustomer.prototype['audienceMemberships'] = undefined;

/**
 * Timestamp of the most recent event received from this customer
 * @member {Date} lastActivity
 */
ApplicationCustomer.prototype['lastActivity'] = undefined;

/**
 * The Integration ID of the Customer Profile that referred this Customer in the Application.
 * @member {String} advocateIntegrationId
 */
ApplicationCustomer.prototype['advocateIntegrationId'] = undefined;






export default ApplicationCustomer;

