export default ErrorEffectProps;
/**
 * The ErrorEffectProps model module.
 * @module model/ErrorEffectProps
 * @version 4.2.0
 */
declare class ErrorEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, message: any): void;
    /**
     * Constructs a <code>ErrorEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorEffectProps} obj Optional instance to populate.
     * @return {module:model/ErrorEffectProps} The populated <code>ErrorEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ErrorEffectProps</code>.
     * Whenever an error occurred during evaluation, we return an error effect. This should never happen for rules created in the rule builder.
     * @alias module:model/ErrorEffectProps
     * @param message {String} The error message.
     */
    constructor(message: string);
    message: any;
}
