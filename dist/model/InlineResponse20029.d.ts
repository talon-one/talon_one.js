export default InlineResponse20029;
/**
 * The InlineResponse20029 model module.
 * @module model/InlineResponse20029
 * @version 4.2.0
 */
declare class InlineResponse20029 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, totalResultSize: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse20029</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20029} obj Optional instance to populate.
     * @return {module:model/InlineResponse20029} The populated <code>InlineResponse20029</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse20029</code>.
     * @alias module:model/InlineResponse20029
     * @param totalResultSize {Number}
     * @param data {Array.<module:model/ModelImport>}
     */
    constructor(totalResultSize: number, data: Array<any>);
    totalResultSize: any;
    data: any;
}
