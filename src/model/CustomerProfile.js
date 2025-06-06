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
import AudienceMembership from './AudienceMembership';
import LoyaltyMembership from './LoyaltyMembership';

/**
 * The CustomerProfile model module.
 * @module model/CustomerProfile
 * @version 12.0.0
 */
class CustomerProfile {
    /**
     * Constructs a new <code>CustomerProfile</code>.
     * @alias module:model/CustomerProfile
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param integrationId {String} The integration ID set by your integration layer.
     * @param attributes {Object} Arbitrary properties associated with this item.
     * @param accountId {Number} The ID of the Talon.One account that owns this profile.
     * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
     * @param totalSales {Number} The total amount of money spent by the customer **before** discounts are applied.  The total sales amount excludes the following: - Cancelled or reopened sessions. - Returned items. 
     * @param lastActivity {Date} Timestamp of the most recent event received from this customer. This field is updated on calls that trigger the Rule Engine and that are not [dry requests](https://docs.talon.one/docs/dev/integration-api/dry-requests/#overlay).  For example, [reserving a coupon](https://docs.talon.one/integration-api#operation/createCouponReservation) for a customer doesn't impact this field. 
     */
    constructor(id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity) { 
        
        CustomerProfile.initialize(this, id, created, integrationId, attributes, accountId, closedSessions, totalSales, lastActivity);
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
     * Constructs a <code>CustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfile} obj Optional instance to populate.
     * @return {module:model/CustomerProfile} The populated <code>CustomerProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProfile();

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
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CustomerProfile.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
CustomerProfile.prototype['created'] = undefined;

/**
 * The integration ID set by your integration layer.
 * @member {String} integrationId
 */
CustomerProfile.prototype['integrationId'] = undefined;

/**
 * Arbitrary properties associated with this item.
 * @member {Object} attributes
 */
CustomerProfile.prototype['attributes'] = undefined;

/**
 * The ID of the Talon.One account that owns this profile.
 * @member {Number} accountId
 */
CustomerProfile.prototype['accountId'] = undefined;

/**
 * The total amount of closed sessions by a customer. A closed session is a successful purchase.
 * @member {Number} closedSessions
 */
CustomerProfile.prototype['closedSessions'] = undefined;

/**
 * The total amount of money spent by the customer **before** discounts are applied.  The total sales amount excludes the following: - Cancelled or reopened sessions. - Returned items. 
 * @member {Number} totalSales
 */
CustomerProfile.prototype['totalSales'] = undefined;

/**
 * **DEPRECATED** A list of loyalty programs joined by the customer. 
 * @member {Array.<module:model/LoyaltyMembership>} loyaltyMemberships
 */
CustomerProfile.prototype['loyaltyMemberships'] = undefined;

/**
 * The audiences the customer belongs to.
 * @member {Array.<module:model/AudienceMembership>} audienceMemberships
 */
CustomerProfile.prototype['audienceMemberships'] = undefined;

/**
 * Timestamp of the most recent event received from this customer. This field is updated on calls that trigger the Rule Engine and that are not [dry requests](https://docs.talon.one/docs/dev/integration-api/dry-requests/#overlay).  For example, [reserving a coupon](https://docs.talon.one/integration-api#operation/createCouponReservation) for a customer doesn't impact this field. 
 * @member {Date} lastActivity
 */
CustomerProfile.prototype['lastActivity'] = undefined;

/**
 * An indicator of whether the customer is part of a sandbox or live Application. See the [docs](https://docs.talon.one/docs/product/applications/overview#application-environments). 
 * @member {Boolean} sandbox
 */
CustomerProfile.prototype['sandbox'] = undefined;






export default CustomerProfile;

