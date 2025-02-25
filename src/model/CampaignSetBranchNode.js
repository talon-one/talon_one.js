/**
 * Talon.One API
 * Use the Talon.One API to integrate with your application and to manage applications and campaigns:  - Use the operations in the [Integration API section](#integration-api) are used to integrate with our platform - Use the operation in the [Management API section](#management-api) to manage applications and campaigns.  ## Determining the base URL of the endpoints  The API is available at the same hostname as your Campaign Manager deployment. For example, if you access the Campaign Manager at `https://yourbaseurl.talon.one/`, the URL for the [updateCustomerSessionV2](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint is `https://yourbaseurl.talon.one/v2/customer_sessions/{Id}` 
 *
 * The version of the OpenAPI document: 
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
 * @version 11.0.0
 */
class CampaignSetBranchNode {
    /**
     * Constructs a new <code>CampaignSetBranchNode</code>.
     * @alias module:model/CampaignSetBranchNode
     * @param type {module:model/CampaignSetBranchNode.TypeEnum} Indicates the node type.
     * @param name {String} Name of the set.
     * @param operator {module:model/CampaignSetBranchNode.OperatorEnum} An indicator of how the set operates on its elements.
     * @param elements {Array.<module:model/CampaignSetNode>} Child elements of this set.
     * @param groupId {Number} The ID of the campaign set.
     * @param locked {Boolean} An indicator of whether the campaign set is locked for modification.
     * @param evaluationMode {module:model/CampaignSetBranchNode.EvaluationModeEnum} The mode by which campaigns in the campaign evaluation group are evaluated.
     * @param evaluationScope {module:model/CampaignSetBranchNode.EvaluationScopeEnum} The evaluation scope of the campaign evaluation group.
     */
    constructor(type, name, operator, elements, groupId, locked, evaluationMode, evaluationScope) { 
        
        CampaignSetBranchNode.initialize(this, type, name, operator, elements, groupId, locked, evaluationMode, evaluationScope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, operator, elements, groupId, locked, evaluationMode, evaluationScope) { 
        obj['type'] = type;
        obj['name'] = name;
        obj['operator'] = operator;
        obj['elements'] = elements;
        obj['groupId'] = groupId;
        obj['locked'] = locked;
        obj['evaluationMode'] = evaluationMode;
        obj['evaluationScope'] = evaluationScope;
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
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('evaluationMode')) {
                obj['evaluationMode'] = ApiClient.convertToType(data['evaluationMode'], 'String');
            }
            if (data.hasOwnProperty('evaluationScope')) {
                obj['evaluationScope'] = ApiClient.convertToType(data['evaluationScope'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates the node type.
 * @member {module:model/CampaignSetBranchNode.TypeEnum} type
 */
CampaignSetBranchNode.prototype['type'] = undefined;

/**
 * Name of the set.
 * @member {String} name
 */
CampaignSetBranchNode.prototype['name'] = undefined;

/**
 * An indicator of how the set operates on its elements.
 * @member {module:model/CampaignSetBranchNode.OperatorEnum} operator
 */
CampaignSetBranchNode.prototype['operator'] = undefined;

/**
 * Child elements of this set.
 * @member {Array.<module:model/CampaignSetNode>} elements
 */
CampaignSetBranchNode.prototype['elements'] = undefined;

/**
 * The ID of the campaign set.
 * @member {Number} groupId
 */
CampaignSetBranchNode.prototype['groupId'] = undefined;

/**
 * An indicator of whether the campaign set is locked for modification.
 * @member {Boolean} locked
 */
CampaignSetBranchNode.prototype['locked'] = undefined;

/**
 * A description of the campaign set.
 * @member {String} description
 */
CampaignSetBranchNode.prototype['description'] = undefined;

/**
 * The mode by which campaigns in the campaign evaluation group are evaluated.
 * @member {module:model/CampaignSetBranchNode.EvaluationModeEnum} evaluationMode
 */
CampaignSetBranchNode.prototype['evaluationMode'] = undefined;

/**
 * The evaluation scope of the campaign evaluation group.
 * @member {module:model/CampaignSetBranchNode.EvaluationScopeEnum} evaluationScope
 */
CampaignSetBranchNode.prototype['evaluationScope'] = undefined;





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


/**
 * Allowed values for the <code>evaluationMode</code> property.
 * @enum {String}
 * @readonly
 */
CampaignSetBranchNode['EvaluationModeEnum'] = {

    /**
     * value: "stackable"
     * @const
     */
    "stackable": "stackable",

    /**
     * value: "listOrder"
     * @const
     */
    "listOrder": "listOrder",

    /**
     * value: "lowestDiscount"
     * @const
     */
    "lowestDiscount": "lowestDiscount",

    /**
     * value: "highestDiscount"
     * @const
     */
    "highestDiscount": "highestDiscount"
};


/**
 * Allowed values for the <code>evaluationScope</code> property.
 * @enum {String}
 * @readonly
 */
CampaignSetBranchNode['EvaluationScopeEnum'] = {

    /**
     * value: "cartItem"
     * @const
     */
    "cartItem": "cartItem",

    /**
     * value: "session"
     * @const
     */
    "session": "session"
};



export default CampaignSetBranchNode;

