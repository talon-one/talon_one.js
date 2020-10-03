export default CouponReservations;
/**
 * The CouponReservations model module.
 * @module model/CouponReservations
 * @version 4.2.0
 */
declare class CouponReservations {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationIDs: any): void;
    /**
     * Constructs a <code>CouponReservations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponReservations} obj Optional instance to populate.
     * @return {module:model/CouponReservations} The populated <code>CouponReservations</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CouponReservations</code>.
     * @alias module:model/CouponReservations
     * @param integrationIDs {Array.<String>} List of Integration IDs
     */
    constructor(integrationIDs: Array<string>);
    integrationIDs: any;
}
