export default ReferralRejectionReason;
/**
 * The ReferralRejectionReason model module.
 * @module model/ReferralRejectionReason
 * @version 4.2.0
 */
declare class ReferralRejectionReason {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, campaignId: any, referralId: any, reason: any): void;
    /**
     * Constructs a <code>ReferralRejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferralRejectionReason} obj Optional instance to populate.
     * @return {module:model/ReferralRejectionReason} The populated <code>ReferralRejectionReason</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ReferralRejectionReason</code>.
     * Holds a reference to the campaign, the referral and the reason for which that referral was rejected. Should only be present when there is a &#39;rejectReferral&#39; effect.
     * @alias module:model/ReferralRejectionReason
     * @param campaignId {Number}
     * @param referralId {Number}
     * @param reason {module:model/ReferralRejectionReason.ReasonEnum}
     */
    constructor(campaignId: number, referralId: number, reason: any);
    campaignId: any;
    referralId: any;
    reason: any;
}
declare namespace ReferralRejectionReason {
    namespace ReasonEnum {
        const ReferralNotFound: string;
        const ReferralRecipientIdSameAsAdvocate: string;
        const ReferralPartOfNotRunningCampaign: string;
        const ReferralLimitReached: string;
        const CampaignLimitReached: string;
        const ProfileLimitReached: string;
        const ReferralRecipientDoesNotMatch: string;
        const ReferralExpired: string;
        const ReferralStartDateInFuture: string;
        const ReferralRejectedByCondition: string;
        const EffectCouldNotBeApplied: string;
    }
}
