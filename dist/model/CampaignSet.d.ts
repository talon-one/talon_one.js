export default CampaignSet;
/**
 * The CampaignSet model module.
 * @module model/CampaignSet
 * @version 4.2.0
 */
declare class CampaignSet {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, applicationId: any, version: any, set: any): void;
    /**
     * Constructs a <code>CampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSet} obj Optional instance to populate.
     * @return {module:model/CampaignSet} The populated <code>CampaignSet</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignSet</code>.
     *
     * @alias module:model/CampaignSet
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param version {Number} Version of the campaign set
     * @param set {module:model/CampaignSetBranchNode}
     */
    constructor(id: number, created: Date, applicationId: number, version: number, set: any);
    id: any;
    created: any;
    applicationId: any;
    version: any;
    set: any;
}
