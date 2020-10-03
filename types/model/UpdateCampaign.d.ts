export default UpdateCampaign;
/**
 * The UpdateCampaign model module.
 * @module model/UpdateCampaign
 * @version 4.2.0
 */
declare class UpdateCampaign {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, tags: any, features: any, limits: any): void;
    /**
     * Constructs a <code>UpdateCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCampaign} obj Optional instance to populate.
     * @return {module:model/UpdateCampaign} The populated <code>UpdateCampaign</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateCampaign</code>.
     * @alias module:model/UpdateCampaign
     * @param name {String} A friendly name for this campaign.
     * @param tags {Array.<String>} A list of tags for the campaign.
     * @param features {Array.<module:model/UpdateCampaign.FeaturesEnum>} A list of features for the campaign.
     * @param limits {Array.<module:model/LimitConfig>} The set of limits that will operate for this campaign
     */
    constructor(name: string, tags: Array<string>, features: Array<any>, limits: Array<any>);
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
}
declare namespace UpdateCampaign {
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
