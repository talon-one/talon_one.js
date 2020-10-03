export default ReferralCreatedEffectProps;
/**
 * The ReferralCreatedEffectProps model module.
 * @module model/ReferralCreatedEffectProps
 * @version 4.2.0
 */
declare class ReferralCreatedEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any): void;
    /**
     * Constructs a <code>ReferralCreatedEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferralCreatedEffectProps} obj Optional instance to populate.
     * @return {module:model/ReferralCreatedEffectProps} The populated <code>ReferralCreatedEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ReferralCreatedEffectProps</code>.
     * The properties specific to the \&quot;referralCreated\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;create referral\&quot; effect, and a referral code was created for a customer. See \&quot;createdReferrals\&quot; on the response for all details of this referral code.
     * @alias module:model/ReferralCreatedEffectProps
     * @param value {String} The referral code that was created
     */
    constructor(value: string);
    value: any;
}
