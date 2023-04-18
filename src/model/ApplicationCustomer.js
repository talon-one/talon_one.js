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
import AudienceMembership from './AudienceMembership';
import LoyaltyMembership from './LoyaltyMembership';

/**
 * The ApplicationCustomer model module.
 * @module model/ApplicationCustomer
 * @version 5.0.0
 */
class ApplicationCustomer {
    /**
     * Constructs a new <code>ApplicationCustomer</code>.
     * 
     * @alias module:model/ApplicationCustomer
     * @param id {Number} Internal ID of this entity. Internal ID of this entity.
     * @param created {Date} The time this entity was created. The time this entity was created. The time this entity was created. The time this entity was created.
     * @param integrationId {String} The integration ID set by your integration layer. The integration ID set by your integration layer.
     * @param attributes {Object} Arbitrary properties associated with this item.
     * @param accountId {Number} The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile.
     * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
     * @param totalSales {Number} The total amount of money spent by the customer **before** discounts are applied.  The total sales amount excludes the following: - Cancelled or reopened sessions. - Returned items. 
     * @param lastActivity {Date} Timestamp of the most recent event received from this customer. This field is updated on calls that trigger the rule-engine and that are not [dry requests](https://docs.talon.one/docs/dev/integration-api/dry-requests/#overlay).  For example, [reserving a coupon](https://docs.talon.one/integration-api#operation/createCouponReservation) for a customer doesn't impact this field. 
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
            if (data.hasOwnProperty('sandbox')) {
                obj['sandbox'] = ApiClient.convertToType(data['sandbox'], 'Boolean');
            }
            if (data.hasOwnProperty('advocateIntegrationId')) {
                obj['advocateIntegrationId'] = ApiClient.convertToType(data['advocateIntegrationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity. Internal ID of this entity.
 * @member {Number} id
 */
ApplicationCustomer.prototype['id'] = undefined;

/**
 * The time this entity was created. The time this entity was created. The time this entity was created. The time this entity was created.
 * @member {Date} created
 */
ApplicationCustomer.prototype['created'] = undefined;

/**
 * The integration ID set by your integration layer. The integration ID set by your integration layer.
 * @member {String} integrationId
 */
ApplicationCustomer.prototype['integrationId'] = undefined;

/**
 * Arbitrary properties associated with this item.
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
 * The total amount of money spent by the customer **before** discounts are applied.  The total sales amount excludes the following: - Cancelled or reopened sessions. - Returned items. 
 * @member {Number} totalSales
 */
ApplicationCustomer.prototype['totalSales'] = undefined;

/**
 * **DEPRECATED** A list of loyalty programs joined by the customer. 
 * @member {Array.<module:model/LoyaltyMembership>} loyaltyMemberships
 */
ApplicationCustomer.prototype['loyaltyMemberships'] = undefined;

/**
 * The audiences the customer belongs to.
 * @member {Array.<module:model/AudienceMembership>} audienceMemberships
 */
ApplicationCustomer.prototype['audienceMemberships'] = undefined;

/**
 * Timestamp of the most recent event received from this customer. This field is updated on calls that trigger the rule-engine and that are not [dry requests](https://docs.talon.one/docs/dev/integration-api/dry-requests/#overlay).  For example, [reserving a coupon](https://docs.talon.one/integration-api#operation/createCouponReservation) for a customer doesn't impact this field. 
 * @member {Date} lastActivity
 */
ApplicationCustomer.prototype['lastActivity'] = undefined;

/**
 * Shows whether the customer is part of a sandbox or live Application. See the [docs](https://docs.talon.one/docs/product/applications/overview#application-environments). 
 * @member {Boolean} sandbox
 */
ApplicationCustomer.prototype['sandbox'] = undefined;

/**
 * The Integration ID of the Customer Profile that referred this Customer in the Application.
 * @member {String} advocateIntegrationId
 */
ApplicationCustomer.prototype['advocateIntegrationId'] = undefined;






export default ApplicationCustomer;

