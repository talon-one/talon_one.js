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
import CodeGeneratorSettings from './CodeGeneratorSettings';

/**
 * The CouponCreationJob model module.
 * @module model/CouponCreationJob
 * @version 5.0.0
 */
class CouponCreationJob {
    /**
     * Constructs a new <code>CouponCreationJob</code>.
     * 
     * @alias module:model/CouponCreationJob
     * @param id {Number} Internal ID of this entity.
     * @param created {Date} The time this entity was created.
     * @param campaignId {Number} The ID of the campaign that owns this entity.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param usageLimit {Number} The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
     * @param numberOfCoupons {Number} The number of new coupon codes to generate for the campaign.
     * @param attributes {Object} Arbitrary properties associated with coupons.
     * @param batchId {String} The batch ID coupons created by this job will bear.
     * @param status {String} The current status of this request. Possible values: - `pending` - `completed` - `failed` - `coupon pattern full` 
     * @param createdAmount {Number} The number of coupon codes that were already created for this request.
     * @param failCount {Number} The number of times this job failed.
     * @param errors {Array.<String>} An array of individual problems encountered during the request.
     * @param createdBy {Number} ID of the user who created this effect.
     * @param communicated {Boolean} Whether or not the user that created this job was notified of its final state.
     * @param chunkExecutionCount {Number} The number of times an attempt to create a chunk of coupons was made during the processing of the job.
     */
    constructor(id, created, campaignId, applicationId, accountId, usageLimit, numberOfCoupons, attributes, batchId, status, createdAmount, failCount, errors, createdBy, communicated, chunkExecutionCount) { 
        
        CouponCreationJob.initialize(this, id, created, campaignId, applicationId, accountId, usageLimit, numberOfCoupons, attributes, batchId, status, createdAmount, failCount, errors, createdBy, communicated, chunkExecutionCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, campaignId, applicationId, accountId, usageLimit, numberOfCoupons, attributes, batchId, status, createdAmount, failCount, errors, createdBy, communicated, chunkExecutionCount) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['campaignId'] = campaignId;
        obj['applicationId'] = applicationId;
        obj['accountId'] = accountId;
        obj['usageLimit'] = usageLimit;
        obj['numberOfCoupons'] = numberOfCoupons;
        obj['attributes'] = attributes;
        obj['batchId'] = batchId;
        obj['status'] = status;
        obj['createdAmount'] = createdAmount;
        obj['failCount'] = failCount;
        obj['errors'] = errors;
        obj['createdBy'] = createdBy;
        obj['communicated'] = communicated;
        obj['chunkExecutionCount'] = chunkExecutionCount;
    }

    /**
     * Constructs a <code>CouponCreationJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponCreationJob} obj Optional instance to populate.
     * @return {module:model/CouponCreationJob} The populated <code>CouponCreationJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponCreationJob();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('campaignId')) {
                obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Number');
            }
            if (data.hasOwnProperty('applicationId')) {
                obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('usageLimit')) {
                obj['usageLimit'] = ApiClient.convertToType(data['usageLimit'], 'Number');
            }
            if (data.hasOwnProperty('discountLimit')) {
                obj['discountLimit'] = ApiClient.convertToType(data['discountLimit'], 'Number');
            }
            if (data.hasOwnProperty('reservationLimit')) {
                obj['reservationLimit'] = ApiClient.convertToType(data['reservationLimit'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Date');
            }
            if (data.hasOwnProperty('numberOfCoupons')) {
                obj['numberOfCoupons'] = ApiClient.convertToType(data['numberOfCoupons'], 'Number');
            }
            if (data.hasOwnProperty('couponSettings')) {
                obj['couponSettings'] = CodeGeneratorSettings.constructFromObject(data['couponSettings']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
            }
            if (data.hasOwnProperty('batchId')) {
                obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('createdAmount')) {
                obj['createdAmount'] = ApiClient.convertToType(data['createdAmount'], 'Number');
            }
            if (data.hasOwnProperty('failCount')) {
                obj['failCount'] = ApiClient.convertToType(data['failCount'], 'Number');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('communicated')) {
                obj['communicated'] = ApiClient.convertToType(data['communicated'], 'Boolean');
            }
            if (data.hasOwnProperty('chunkExecutionCount')) {
                obj['chunkExecutionCount'] = ApiClient.convertToType(data['chunkExecutionCount'], 'Number');
            }
            if (data.hasOwnProperty('chunkSize')) {
                obj['chunkSize'] = ApiClient.convertToType(data['chunkSize'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Internal ID of this entity.
 * @member {Number} id
 */
CouponCreationJob.prototype['id'] = undefined;

/**
 * The time this entity was created.
 * @member {Date} created
 */
CouponCreationJob.prototype['created'] = undefined;

/**
 * The ID of the campaign that owns this entity.
 * @member {Number} campaignId
 */
CouponCreationJob.prototype['campaignId'] = undefined;

/**
 * The ID of the application that owns this entity.
 * @member {Number} applicationId
 */
CouponCreationJob.prototype['applicationId'] = undefined;

/**
 * The ID of the account that owns this entity.
 * @member {Number} accountId
 */
CouponCreationJob.prototype['accountId'] = undefined;

/**
 * The number of times the coupon code can be redeemed. `0` means unlimited redemptions but any campaign usage limits will still apply. 
 * @member {Number} usageLimit
 */
CouponCreationJob.prototype['usageLimit'] = undefined;

/**
 * The total discount value that the code can give. Typically used to represent a gift card value. 
 * @member {Number} discountLimit
 */
CouponCreationJob.prototype['discountLimit'] = undefined;

/**
 * The number of reservations that can be made with this coupon code. 
 * @member {Number} reservationLimit
 */
CouponCreationJob.prototype['reservationLimit'] = undefined;

/**
 * Timestamp at which point the coupon becomes valid.
 * @member {Date} startDate
 */
CouponCreationJob.prototype['startDate'] = undefined;

/**
 * Expiration date of the coupon. Coupon never expires if this is omitted, zero, or negative.
 * @member {Date} expiryDate
 */
CouponCreationJob.prototype['expiryDate'] = undefined;

/**
 * The number of new coupon codes to generate for the campaign.
 * @member {Number} numberOfCoupons
 */
CouponCreationJob.prototype['numberOfCoupons'] = undefined;

/**
 * @member {module:model/CodeGeneratorSettings} couponSettings
 */
CouponCreationJob.prototype['couponSettings'] = undefined;

/**
 * Arbitrary properties associated with coupons.
 * @member {Object} attributes
 */
CouponCreationJob.prototype['attributes'] = undefined;

/**
 * The batch ID coupons created by this job will bear.
 * @member {String} batchId
 */
CouponCreationJob.prototype['batchId'] = undefined;

/**
 * The current status of this request. Possible values: - `pending` - `completed` - `failed` - `coupon pattern full` 
 * @member {String} status
 */
CouponCreationJob.prototype['status'] = undefined;

/**
 * The number of coupon codes that were already created for this request.
 * @member {Number} createdAmount
 */
CouponCreationJob.prototype['createdAmount'] = undefined;

/**
 * The number of times this job failed.
 * @member {Number} failCount
 */
CouponCreationJob.prototype['failCount'] = undefined;

/**
 * An array of individual problems encountered during the request.
 * @member {Array.<String>} errors
 */
CouponCreationJob.prototype['errors'] = undefined;

/**
 * ID of the user who created this effect.
 * @member {Number} createdBy
 */
CouponCreationJob.prototype['createdBy'] = undefined;

/**
 * Whether or not the user that created this job was notified of its final state.
 * @member {Boolean} communicated
 */
CouponCreationJob.prototype['communicated'] = undefined;

/**
 * The number of times an attempt to create a chunk of coupons was made during the processing of the job.
 * @member {Number} chunkExecutionCount
 */
CouponCreationJob.prototype['chunkExecutionCount'] = undefined;

/**
 * The number of coupons that will be created in a single transactions. Coupons will be created in chunks until arriving at the requested amount.
 * @member {Number} chunkSize
 */
CouponCreationJob.prototype['chunkSize'] = undefined;






export default CouponCreationJob;

