export default CampaignEntity;
/**
 * The CampaignEntity model module.
 * @module model/CampaignEntity
 * @version 4.2.0
 */
declare class CampaignEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, campaignId: any): void;
    /**
     * Constructs a <code>CampaignEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignEntity} obj Optional instance to populate.
     * @return {module:model/CampaignEntity} The populated <code>CampaignEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignEntity</code>.
     * @alias module:model/CampaignEntity
     * @param campaignId {Number} The ID of the campaign that owns this entity.
     */
    constructor(campaignId: number);
    campaignId: any;
}
