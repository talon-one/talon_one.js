export default CampaignGroup;
/**
 * The CampaignGroup model module.
 * @module model/CampaignGroup
 * @version 4.2.0
 */
declare class CampaignGroup {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, modified: any, accountId: any, name: any): void;
    /**
     * Constructs a <code>CampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignGroup} obj Optional instance to populate.
     * @return {module:model/CampaignGroup} The populated <code>CampaignGroup</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignGroup</code>.
     *
     * @alias module:model/CampaignGroup
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param modified {Date} The exact moment this entity was last modified.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} The name of this campaign group.
     */
    constructor(id: number, created: Date, modified: Date, accountId: number, name: string);
    id: any;
    created: any;
    modified: any;
    accountId: any;
    name: any;
    description: any;
    subscribedApplicationsIds: any;
    campaignIds: any;
}
