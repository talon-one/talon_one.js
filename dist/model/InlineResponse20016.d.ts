export default InlineResponse20016;
/**
 * The InlineResponse20016 model module.
 * @module model/InlineResponse20016
 * @version 4.2.0
 */
declare class InlineResponse20016 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse20016</code>.
     * @alias module:model/InlineResponse20016
     * @param data {Array.<module:model/ApplicationSession>}
     */
    constructor(data: Array<any>);
    hasMore: any;
    data: any;
}
