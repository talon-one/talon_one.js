export default RedeemReferralEffectProps;
/**
 * The RedeemReferralEffectProps model module.
 * @module model/RedeemReferralEffectProps
 * @version 4.2.0
 */
declare class RedeemReferralEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, value: any): void;
    /**
     * Constructs a <code>RedeemReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedeemReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RedeemReferralEffectProps} The populated <code>RedeemReferralEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RedeemReferralEffectProps</code>.
     * The properties specific to the \&quot;redeemReferral\&quot; effect. This gets triggered whenever the referral code is valid, and a rule was triggered that contains a \&quot;redeem referral\&quot; effect.
     * @alias module:model/RedeemReferralEffectProps
     * @param id {Number} The id of the referral code that was redeemed
     * @param value {String} The referral code that was redeemed
     */
    constructor(id: number, value: string);
    id: any;
    value: any;
}
