export default FuncArgDef;
/**
 * The FuncArgDef model module.
 * @module model/FuncArgDef
 * @version 4.2.0
 */
declare class FuncArgDef {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, description: any): void;
    /**
     * Constructs a <code>FuncArgDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FuncArgDef} obj Optional instance to populate.
     * @return {module:model/FuncArgDef} The populated <code>FuncArgDef</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FuncArgDef</code>.
     * @alias module:model/FuncArgDef
     * @param type {module:model/FuncArgDef.TypeEnum} The type of value this argument expects.
     * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
     */
    constructor(type: any, description: string);
    type: any;
    description: any;
}
declare namespace FuncArgDef {
    namespace TypeEnum {
        const string: string;
        const boolean: string;
        const number: string;
        const time: string;
    }
}
