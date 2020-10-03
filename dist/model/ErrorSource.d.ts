export default ErrorSource;
/**
 * The ErrorSource model module.
 * @module model/ErrorSource
 * @version 4.2.0
 */
declare class ErrorSource {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ErrorSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorSource} obj Optional instance to populate.
     * @return {module:model/ErrorSource} The populated <code>ErrorSource</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    pointer: any;
    parameter: any;
    line: any;
    resource: any;
}
