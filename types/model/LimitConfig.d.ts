export default LimitConfig;
/**
 * The LimitConfig model module.
 * @module model/LimitConfig
 * @version 4.2.0
 */
declare class LimitConfig {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, action: any, limit: any, entities: any): void;
    /**
     * Constructs a <code>LimitConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LimitConfig} obj Optional instance to populate.
     * @return {module:model/LimitConfig} The populated <code>LimitConfig</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LimitConfig</code>.
     * @alias module:model/LimitConfig
     * @param action {module:model/LimitConfig.ActionEnum} The limitable action to which this limit will be applied
     * @param limit {Number} The value to set for the limit
     * @param entities {Array.<module:model/LimitConfig.EntitiesEnum>} The entities that make the address of this limit
     */
    constructor(action: any, limit: number, entities: Array<any>);
    action: any;
    limit: any;
    entities: any;
}
declare namespace LimitConfig {
    namespace ActionEnum {
        const redeemCoupon: string;
        const redeemReferral: string;
        const setDiscount: string;
        const createCoupon: string;
        const setDiscountEffect: string;
    }
    namespace EntitiesEnum {
        const Coupon: string;
        const Referral: string;
        const Profile: string;
        const Identifier: string;
    }
}
