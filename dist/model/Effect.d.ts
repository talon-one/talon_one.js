export default Effect;
/**
 * The Effect model module.
 * @module model/Effect
 * @version 4.2.0
 */
declare class Effect {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, campaignId: any, rulesetId: any, ruleIndex: any, ruleName: any, effectType: any, props: any): void;
    /**
     * Constructs a <code>Effect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Effect} obj Optional instance to populate.
     * @return {module:model/Effect} The populated <code>Effect</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Effect</code>.
     *
     * @alias module:model/Effect
     * @param campaignId {Number} The ID of the campaign that triggered this effect
     * @param rulesetId {Number} The ID of the ruleset that was active in the campaign when this effect was triggered
     * @param ruleIndex {Number} The position of the rule that triggered this effect within the ruleset
     * @param ruleName {String} The name of the rule that triggered this effect
     * @param effectType {String} The type of effect that was triggered
     * @param props {Object}
     */
    constructor(campaignId: number, rulesetId: number, ruleIndex: number, ruleName: string, effectType: string, props: any);
    campaignId: any;
    rulesetId: any;
    ruleIndex: any;
    ruleName: any;
    effectType: any;
    props: any;
}
