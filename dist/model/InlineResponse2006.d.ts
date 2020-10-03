export default InlineResponse2006;
/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 4.2.0
 */
declare class InlineResponse2006 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, totalResultSize: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse2006</code>.
     * @alias module:model/InlineResponse2006
     * @param totalResultSize {Number}
     * @param data {Array.<module:model/Referral>}
     */
    constructor(totalResultSize: number, data: Array<any>);
    totalResultSize: any;
    data: any;
}
