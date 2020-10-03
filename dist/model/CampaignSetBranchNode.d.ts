export default CampaignSetBranchNode;
/**
 * The CampaignSetBranchNode model module.
 * @module model/CampaignSetBranchNode
 * @version 4.2.0
 */
declare class CampaignSetBranchNode {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, name: any, operator: any, elements: any): void;
    /**
     * Constructs a <code>CampaignSetBranchNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetBranchNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetBranchNode} The populated <code>CampaignSetBranchNode</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignSetBranchNode</code>.
     * @alias module:model/CampaignSetBranchNode
     * @param type {module:model/CampaignSetBranchNode.TypeEnum} Indicates the node type
     * @param name {String} Name of the set
     * @param operator {module:model/CampaignSetBranchNode.OperatorEnum} How does the set operates on its elements
     * @param elements {Array.<module:model/CampaignSetNode>} Child elements of this set
     */
    constructor(type: any, name: string, operator: any, elements: Array<any>);
    type: any;
    name: any;
    operator: any;
    elements: any;
}
declare namespace CampaignSetBranchNode {
    namespace TypeEnum {
        const SET: string;
    }
    namespace OperatorEnum {
        const ALL: string;
        const FIRST: string;
    }
}
