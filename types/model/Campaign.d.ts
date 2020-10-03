export default Campaign;
/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 4.2.0
 */
declare class Campaign {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, applicationId: any, userId: any, name: any, description: any, state: any, tags: any, features: any, limits: any): void;
    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Campaign</code>.
     *
     * @alias module:model/Campaign
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param name {String} A friendly name for this campaign.
     * @param description {String} A detailed description of the campaign.
     * @param state {module:model/Campaign.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons.
     * @param tags {Array.<String>} A list of tags for the campaign.
     * @param features {Array.<module:model/Campaign.FeaturesEnum>} A list of features for the campaign.
     * @param limits {Array.<module:model/LimitConfig>} The set of limits that will operate for this campaign
     */
    constructor(id: number, created: Date, applicationId: number, userId: number, name: string, description: string, state: any, tags: Array<string>, features: Array<any>, limits: Array<any>);
    id: any;
    created: any;
    applicationId: any;
    userId: any;
    name: any;
    description: any;
    startTime: any;
    endTime: any;
    attributes: any;
    state: string;
    activeRulesetId: any;
    tags: any;
    features: any;
    couponSettings: any;
    referralSettings: any;
    limits: any;
    campaignGroups: any;
    couponRedemptionCount: any;
    referralRedemptionCount: any;
    discountCount: any;
    discountEffectCount: any;
    couponCreationCount: any;
    lastActivity: any;
    updated: any;
    createdBy: any;
    updatedBy: any;
}
declare namespace Campaign {
    namespace StateEnum {
        const enabled: string;
        const disabled: string;
        const archived: string;
    }
    namespace FeaturesEnum {
        const coupons: string;
        const referrals: string;
        const loyalty: string;
    }
}
