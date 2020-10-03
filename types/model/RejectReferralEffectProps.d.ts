export default RejectReferralEffectProps;
/**
 * The RejectReferralEffectProps model module.
 * @module model/RejectReferralEffectProps
 * @version 4.2.0
 */
declare class RejectReferralEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any, rejectionReason: any): void;
    /**
     * Constructs a <code>RejectReferralEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectReferralEffectProps} obj Optional instance to populate.
     * @return {module:model/RejectReferralEffectProps} The populated <code>RejectReferralEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RejectReferralEffectProps</code>.
     * The properties specific to the \&quot;rejectReferral\&quot; effect. This gets triggered whenever the referral code was rejected. See rejectionReason for more info on why.
     * @alias module:model/RejectReferralEffectProps
     * @param value {String} The referral code that was rejected
     * @param rejectionReason {String} The reason why this referral code was rejected
     */
    constructor(value: string, rejectionReason: string);
    value: any;
    rejectionReason: any;
}
