export default CampaignCopy;
/**
 * The CampaignCopy model module.
 * @module model/CampaignCopy
 * @version 4.2.0
 */
declare class CampaignCopy {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applicationIds: any): void;
    /**
     * Constructs a <code>CampaignCopy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignCopy} obj Optional instance to populate.
     * @return {module:model/CampaignCopy} The populated <code>CampaignCopy</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignCopy</code>.
     * @alias module:model/CampaignCopy
     * @param applicationIds {Array.<Number>} Application IDs of the applications to which a campaign should be copied to
     */
    constructor(applicationIds: Array<number>);
    name: any;
    applicationIds: any;
    description: any;
    startTime: any;
    endTime: any;
    tags: any;
}
