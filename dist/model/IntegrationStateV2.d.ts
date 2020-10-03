export default IntegrationStateV2;
/**
 * The IntegrationStateV2 model module.
 * @module model/IntegrationStateV2
 * @version 4.2.0
 */
declare class IntegrationStateV2 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, effects: any, createdCoupons: any, createdReferrals: any): void;
    /**
     * Constructs a <code>IntegrationStateV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationStateV2} obj Optional instance to populate.
     * @return {module:model/IntegrationStateV2} The populated <code>IntegrationStateV2</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>IntegrationStateV2</code>.
     * Contains all entities that might interest Talon.One integrations. This is the response type returned by the V2 PUT customer_session endpoint
     * @alias module:model/IntegrationStateV2
     * @param effects {Array.<module:model/Effect>}
     * @param createdCoupons {Array.<module:model/Coupon>}
     * @param createdReferrals {Array.<module:model/Referral>}
     */
    constructor(effects: Array<any>, createdCoupons: Array<any>, createdReferrals: Array<any>);
    customerSession: any;
    customerProfile: any;
    event: any;
    loyalty: any;
    referral: any;
    coupons: any;
    triggeredCampaigns: any;
    effects: any;
    createdCoupons: any;
    createdReferrals: any;
}
