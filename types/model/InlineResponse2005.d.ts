export default InlineResponse2005;
/**
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 * @version 4.2.0
 */
declare class InlineResponse2005 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, hasMore: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse2005</code>.
     * @alias module:model/InlineResponse2005
     * @param hasMore {Boolean}
     * @param data {Array.<module:model/Coupon>}
     */
    constructor(hasMore: boolean, data: Array<any>);
    hasMore: any;
    data: any;
}
