export default Referral;
/**
 * The Referral model module.
 * @module model/Referral
 * @version 4.2.0
 */
declare class Referral {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, campaignId: any, advocateProfileIntegrationId: any, code: any, usageCounter: any, usageLimit: any): void;
    /**
     * Constructs a <code>Referral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Referral} obj Optional instance to populate.
     * @return {module:model/Referral} The populated <code>Referral</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Referral</code>.
     *
     * @alias module:model/Referral
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
     * @param advocateProfileIntegrationId {String} The Integration Id of the Advocate's Profile
     * @param code {String} The actual referral code.
     * @param usageCounter {Number} The number of times this referral code has been successfully used.
     * @param usageLimit {Number} The number of times a referral code can be used. This can be set to 0 for no limit, but any campaign usage limits will still apply.
     */
    constructor(id: number, created: Date, campaignId: number, advocateProfileIntegrationId: string, code: string, usageCounter: number, usageLimit: number);
    id: any;
    created: any;
    campaignId: any;
    advocateProfileIntegrationId: any;
    friendProfileIntegrationId: any;
    startDate: any;
    expiryDate: any;
    code: any;
    usageCounter: any;
    usageLimit: any;
}
