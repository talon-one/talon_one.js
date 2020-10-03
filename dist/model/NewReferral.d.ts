export default NewReferral;
/**
 * The NewReferral model module.
 * @module model/NewReferral
 * @version 4.2.0
 */
declare class NewReferral {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, campaignId: any, advocateProfileIntegrationId: any): void;
    /**
     * Constructs a <code>NewReferral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewReferral} obj Optional instance to populate.
     * @return {module:model/NewReferral} The populated <code>NewReferral</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewReferral</code>.
     * @alias module:model/NewReferral
     * @param campaignId {Number} ID of the campaign from which the referral received the referral code.
     * @param advocateProfileIntegrationId {String} The Integration Id of the Advocate's Profile
     */
    constructor(campaignId: number, advocateProfileIntegrationId: string);
    campaignId: any;
    advocateProfileIntegrationId: any;
    friendProfileIntegrationId: any;
    startDate: any;
    expiryDate: any;
}
