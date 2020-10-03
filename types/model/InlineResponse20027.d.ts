export default InlineResponse20027;
/**
 * The InlineResponse20027 model module.
 * @module model/InlineResponse20027
 * @version 4.2.0
 */
declare class InlineResponse20027 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse20027</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20027} obj Optional instance to populate.
     * @return {module:model/InlineResponse20027} The populated <code>InlineResponse20027</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse20027</code>.
     * @alias module:model/InlineResponse20027
     * @param data {Array.<module:model/Change>}
     */
    constructor(data: Array<any>);
    totalResultSize: any;
    hasMore: any;
    data: any;
}
