export default CodeGeneratorSettings;
/**
 * The CodeGeneratorSettings model module.
 * @module model/CodeGeneratorSettings
 * @version 4.2.0
 */
declare class CodeGeneratorSettings {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, validCharacters: any, couponPattern: any): void;
    /**
     * Constructs a <code>CodeGeneratorSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeGeneratorSettings} obj Optional instance to populate.
     * @return {module:model/CodeGeneratorSettings} The populated <code>CodeGeneratorSettings</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CodeGeneratorSettings</code>.
     * @alias module:model/CodeGeneratorSettings
     * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
     * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set.
     */
    constructor(validCharacters: Array<string>, couponPattern: string);
    validCharacters: any;
    couponPattern: any;
}
