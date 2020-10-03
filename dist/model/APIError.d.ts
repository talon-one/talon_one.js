export default APIError;
/**
 * The APIError model module.
 * @module model/APIError
 * @version 4.2.0
 */
declare class APIError {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, source: any): void;
    /**
     * Constructs a <code>APIError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIError} obj Optional instance to populate.
     * @return {module:model/APIError} The populated <code>APIError</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>APIError</code>.
     * @alias module:model/APIError
     * @param title {String} Short description of the problem.
     * @param source {module:model/ErrorSource}
     */
    constructor(title: string, source: any);
    title: any;
    details: any;
    source: any;
}
