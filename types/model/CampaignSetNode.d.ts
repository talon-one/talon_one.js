export default CampaignSetNode;
/**
 * The CampaignSetNode model module.
 * @module model/CampaignSetNode
 * @version 4.2.0
 */
declare class CampaignSetNode {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any): void;
    /**
     * Constructs a <code>CampaignSetNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetNode} The populated <code>CampaignSetNode</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignSetNode</code>.
     * @alias module:model/CampaignSetNode
     * @param type {String}
     */
    constructor(type: string);
    type: any;
}
