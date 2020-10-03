export default Rule;
/**
 * The Rule model module.
 * @module model/Rule
 * @version 4.2.0
 */
declare class Rule {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, condition: any, effects: any): void;
    /**
     * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rule} obj Optional instance to populate.
     * @return {module:model/Rule} The populated <code>Rule</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Rule</code>.
     * @alias module:model/Rule
     * @param title {String} A short description of the rule.
     * @param condition {Array.<Object>} A Talang expression that will be evaluated in the context of the given event.
     * @param effects {Array.<Object>} An array of effectful Talang expressions in arrays that will be evaluated when a rule matches.
     */
    constructor(title: string, condition: Array<any>, effects: Array<any>);
    title: any;
    description: any;
    bindings: any;
    condition: any;
    effects: any;
}
