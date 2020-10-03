export default CampaignGroupEntity;
/**
 * The CampaignGroupEntity model module.
 * @module model/CampaignGroupEntity
 * @version 4.2.0
 */
declare class CampaignGroupEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CampaignGroupEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignGroupEntity} obj Optional instance to populate.
     * @return {module:model/CampaignGroupEntity} The populated <code>CampaignGroupEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    campaignGroups: any;
}
