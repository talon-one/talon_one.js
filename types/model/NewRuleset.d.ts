export default NewRuleset;
/**
 * The NewRuleset model module.
 * @module model/NewRuleset
 * @version 4.2.0
 */
declare class NewRuleset {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, rules: any, bindings: any): void;
    /**
     * Constructs a <code>NewRuleset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRuleset} obj Optional instance to populate.
     * @return {module:model/NewRuleset} The populated <code>NewRuleset</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewRuleset</code>.
     * @alias module:model/NewRuleset
     * @param rules {Array.<module:model/Rule>} Set of rules to apply.
     * @param bindings {Array.<module:model/Binding>} An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
     */
    constructor(rules: Array<any>, bindings: Array<any>);
    rules: any;
    bindings: any;
    rbVersion: any;
    activate: any;
}
