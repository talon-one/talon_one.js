export default InlineResponse2009;
/**
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 4.2.0
 */
declare class InlineResponse2009 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, totalResultSize: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse2009</code>.
     * @alias module:model/InlineResponse2009
     * @param totalResultSize {Number}
     * @param data {Array.<module:model/AccessLogEntry>}
     */
    constructor(totalResultSize: number, data: Array<any>);
    totalResultSize: any;
    data: any;
}
