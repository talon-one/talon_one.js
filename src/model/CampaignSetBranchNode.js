/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CampaignSetNode from './CampaignSetNode';

/**
 * The CampaignSetBranchNode model module.
 * @module model/CampaignSetBranchNode
 * @version 4.0.0
 */
class CampaignSetBranchNode {
    /**
     * Constructs a new <code>CampaignSetBranchNode</code>.
     * @alias module:model/CampaignSetBranchNode
     * @param type {module:model/CampaignSetBranchNode.TypeEnum} Indicates the node type
     * @param name {String} Name of the set
     * @param operator {module:model/CampaignSetBranchNode.OperatorEnum} How does the set operates on its elements
     * @param elements {Array.<module:model/CampaignSetNode>} Child elements of this set
     */
    constructor(type, name, operator, elements) { 
        
        CampaignSetBranchNode.initialize(this, type, name, operator, elements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, operator, elements) { 
        obj['type'] = type;
        obj['name'] = name;
        obj['operator'] = operator;
        obj['elements'] = elements;
    }

    /**
     * Constructs a <code>CampaignSetBranchNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSetBranchNode} obj Optional instance to populate.
     * @return {module:model/CampaignSetBranchNode} The populated <code>CampaignSetBranchNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSetBranchNode();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], [CampaignSetNode]);
            }
        }
        return obj;
    }


}

/**
 * Indicates the node type
 * @member {module:model/CampaignSetBranchNode.TypeEnum} type
 */
CampaignSetBranchNode.prototype['type'] = undefined;

/**
 * Name of the set
 * @member {String} name
 */
CampaignSetBranchNode.prototype['name'] = undefined;

/**
 * How does the set operates on its elements
 * @member {module:model/CampaignSetBranchNode.OperatorEnum} operator
 */
CampaignSetBranchNode.prototype['operator'] = undefined;

/**
 * Child elements of this set
 * @member {Array.<module:model/CampaignSetNode>} elements
 */
CampaignSetBranchNode.prototype['elements'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignSetBranchNode['TypeEnum'] = {

    /**
     * value: "SET"
     * @const
     */
    "SET": "SET"
};


/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
CampaignSetBranchNode['OperatorEnum'] = {

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",

    /**
     * value: "FIRST"
     * @const
     */
    "FIRST": "FIRST"
};



export default CampaignSetBranchNode;

