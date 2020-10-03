export default AcceptReferralEffectProps;
/**
 * The AcceptReferralEffectProps model module.
 * @module model/AcceptReferralEffectProps
 * @version 4.2.0
 */
declare class AcceptReferralEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any): void;
    /**
     * Constructs a <code>AcceptReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AcceptReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/AcceptReferralEffectProps} The populated <code>AcceptReferralEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AcceptReferralEffectProps</code>.
     * The properties specific to the \&quot;acceptReferral\&quot; effect. TThis gets triggered whenever the referral code is valid and all other conditions in the rules of its campaign are met.
     * @alias module:model/AcceptReferralEffectProps
     * @param value {String} The referral code that was accepted
     */
    constructor(value: string);
    value: any;
}
