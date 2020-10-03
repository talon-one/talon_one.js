export default Ruleset;
/**
 * The Ruleset model module.
 * @module model/Ruleset
 * @version 4.2.0
 */
declare class Ruleset {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, campaignId: any, userId: any, rules: any, bindings: any): void;
    /**
     * Constructs a <code>Ruleset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ruleset} obj Optional instance to populate.
     * @return {module:model/Ruleset} The populated <code>Ruleset</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Ruleset</code>.
     *
     * @alias module:model/Ruleset
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param campaignId {Number} The ID of the campaign that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param rules {Array.<module:model/Rule>} Set of rules to apply.
     * @param bindings {Array.<module:model/Binding>} An array that provides objects with variable names (name) and talang expressions to whose result they are bound (expression) during rule evaluation. The order of the evaluation is decided by the position in the array.
     */
    constructor(id: number, created: Date, campaignId: number, userId: number, rules: Array<any>, bindings: Array<any>);
    id: any;
    created: any;
    campaignId: any;
    userId: any;
    rules: any;
    bindings: any;
    rbVersion: any;
    activate: any;
    activatedAt: any;
}
