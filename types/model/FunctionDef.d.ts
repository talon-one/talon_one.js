export default FunctionDef;
/**
 * The FunctionDef model module.
 * @module model/FunctionDef
 * @version 4.2.0
 */
declare class FunctionDef {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, type: any, args: any): void;
    /**
     * Constructs a <code>FunctionDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionDef} obj Optional instance to populate.
     * @return {module:model/FunctionDef} The populated <code>FunctionDef</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FunctionDef</code>.
     * @alias module:model/FunctionDef
     * @param name {String} The function name used in Talang.
     * @param type {String} The type of this function argument.
     * @param args {Array.<module:model/FuncArgDef>} An array of argument definitions.
     */
    constructor(name: string, type: string, args: Array<any>);
    name: any;
    type: any;
    description: any;
    help: any;
    args: any;
}
