export default DeductLoyaltyPointsEffectProps;
/**
 * The DeductLoyaltyPointsEffectProps model module.
 * @module model/DeductLoyaltyPointsEffectProps
 * @version 4.2.0
 */
declare class DeductLoyaltyPointsEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, ruleTitle: any, programId: any, subLedgerId: any, value: any): void;
    /**
     * Constructs a <code>DeductLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeductLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/DeductLoyaltyPointsEffectProps} The populated <code>DeductLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>DeductLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;deductLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained a condition to only trigger when the given number of loyalty points could be deduced. These points are automatically stored and managed inside Talon.One.
     * @alias module:model/DeductLoyaltyPointsEffectProps
     * @param ruleTitle {String} The title of the rule that contained triggered this points deduction
     * @param programId {Number} The ID of the loyalty program where these points were added
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added
     * @param value {Number} The amount of points that were deducted
     */
    constructor(ruleTitle: string, programId: number, subLedgerId: string, value: number);
    ruleTitle: any;
    programId: any;
    subLedgerId: any;
    value: any;
}
