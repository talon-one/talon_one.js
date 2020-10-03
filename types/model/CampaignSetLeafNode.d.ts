export default CampaignSetLeafNode;
/**
 * The CampaignSetLeafNode model module.
 * @module model/CampaignSetLeafNode
 * @version 4.2.0
 */
declare class CampaignSetLeafNode {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, campaignId: any): void;
    /**
     * Constructs a <code>CampaignSetLeafNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetLeafNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetLeafNode} The populated <code>CampaignSetLeafNode</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignSetLeafNode</code>.
     * @alias module:model/CampaignSetLeafNode
     * @param type {module:model/CampaignSetLeafNode.TypeEnum} Indicates the node type
     * @param campaignId {Number} ID of the campaign
     */
    constructor(type: any, campaignId: number);
    type: any;
    campaignId: any;
}
declare namespace CampaignSetLeafNode {
    namespace TypeEnum {
        const CAMPAIGN: string;
    }
}
