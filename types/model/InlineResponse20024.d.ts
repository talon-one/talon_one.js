export default InlineResponse20024;
/**
 * The InlineResponse20024 model module.
 * @module model/InlineResponse20024
 * @version 4.2.0
 */
declare class InlineResponse20024 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, totalResultSize: any, data: any): void;
    /**
     * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>InlineResponse20024</code>.
     * @alias module:model/InlineResponse20024
     * @param totalResultSize {Number}
     * @param data {Array.<module:model/WebhookLogEntry>}
     */
    constructor(totalResultSize: number, data: Array<any>);
    totalResultSize: any;
    data: any;
}
