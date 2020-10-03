export default NewCoupons;
/**
 * The NewCoupons model module.
 * @module model/NewCoupons
 * @version 4.2.0
 */
declare class NewCoupons {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, usageLimit: any, validCharacters: any, couponPattern: any, numberOfCoupons: any): void;
    /**
     * Constructs a <code>NewCoupons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCoupons} obj Optional instance to populate.
     * @return {module:model/NewCoupons} The populated <code>NewCoupons</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewCoupons</code>.
     *
     * @alias module:model/NewCoupons
     * @param usageLimit {Number} The number of times a coupon code can be redeemed. This can be set to 0 for no limit, but any campaign usage limits will still apply.
     * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
     * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set.
     * @param numberOfCoupons {Number} The number of new coupon codes to generate for the campaign. Must be at least 1.
     */
    constructor(usageLimit: number, validCharacters: Array<string>, couponPattern: string, numberOfCoupons: number);
    usageLimit: any;
    discountLimit: any;
    startDate: any;
    expiryDate: any;
    validCharacters: any;
    couponPattern: any;
    numberOfCoupons: any;
    uniquePrefix: any;
    attributes: any;
    recipientIntegrationId: any;
}
