export default NewCampaignSet;
/**
 * The NewCampaignSet model module.
 * @module model/NewCampaignSet
 * @version 4.2.0
 */
declare class NewCampaignSet {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applicationId: any, version: any, set: any): void;
    /**
     * Constructs a <code>NewCampaignSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignSet} obj Optional instance to populate.
     * @return {module:model/NewCampaignSet} The populated <code>NewCampaignSet</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewCampaignSet</code>.
     *
     * @alias module:model/NewCampaignSet
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param version {Number} Version of the campaign set
     * @param set {module:model/CampaignSetBranchNode}
     */
    constructor(applicationId: number, version: number, set: any);
    applicationId: any;
    version: any;
    set: any;
}
