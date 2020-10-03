export default CampaignSearch;
/**
 * The CampaignSearch model module.
 * @module model/CampaignSearch
 * @version 4.2.0
 */
declare class CampaignSearch {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, attributes: any): void;
    /**
     * Constructs a <code>CampaignSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CampaignSearch} obj Optional instance to populate.
     * @return {module:model/CampaignSearch} The populated <code>CampaignSearch</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CampaignSearch</code>.
     * @alias module:model/CampaignSearch
     * @param attributes {Object} Properties to match against a campaign. All provided attributes will be exactly matched against campaign attributes
     */
    constructor(attributes: any);
    attributes: any;
}
