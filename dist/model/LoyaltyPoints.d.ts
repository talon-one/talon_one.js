export default LoyaltyPoints;
/**
 * The LoyaltyPoints model module.
 * @module model/LoyaltyPoints
 * @version 4.2.0
 */
declare class LoyaltyPoints {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, points: any): void;
    /**
     * Constructs a <code>LoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyPoints} obj Optional instance to populate.
     * @return {module:model/LoyaltyPoints} The populated <code>LoyaltyPoints</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyPoints</code>.
     * Points to add or deduct
     * @alias module:model/LoyaltyPoints
     * @param points {Number} Amount of loyalty points
     */
    constructor(points: number);
    points: any;
    name: any;
    validityDuration: any;
    pendingDuration: any;
    subLedgerID: any;
}
