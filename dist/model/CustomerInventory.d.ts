export default CustomerInventory;
/**
 * The CustomerInventory model module.
 * @module model/CustomerInventory
 * @version 4.2.0
 */
declare class CustomerInventory {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CustomerInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerInventory} obj Optional instance to populate.
     * @return {module:model/CustomerInventory} The populated <code>CustomerInventory</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    profile: any;
    loyalty: any;
    referrals: any;
    coupons: any;
}
