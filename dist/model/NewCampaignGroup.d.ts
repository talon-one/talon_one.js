export default NewCampaignGroup;
/**
 * The NewCampaignGroup model module.
 * @module model/NewCampaignGroup
 * @version 4.2.0
 */
declare class NewCampaignGroup {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>NewCampaignGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaignGroup} obj Optional instance to populate.
     * @return {module:model/NewCampaignGroup} The populated <code>NewCampaignGroup</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewCampaignGroup</code>.
     * @alias module:model/NewCampaignGroup
     * @param name {String} The name of this campaign group.
     */
    constructor(name: string);
    name: any;
    description: any;
    subscribedApplicationsIds: any;
    campaignIds: any;
}
