export default ImportCoupons;
/**
 * The ImportCoupons model module.
 * @module model/ImportCoupons
 * @version 4.2.0
 */
declare class ImportCoupons {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, coupons: any): void;
    /**
     * Constructs a <code>ImportCoupons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportCoupons} obj Optional instance to populate.
     * @return {module:model/ImportCoupons} The populated <code>ImportCoupons</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ImportCoupons</code>.
     * @alias module:model/ImportCoupons
     * @param coupons {String}
     */
    constructor(coupons: string);
    coupons: any;
}
