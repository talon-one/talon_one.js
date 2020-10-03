export default LoyaltySubLedger;
/**
 * The LoyaltySubLedger model module.
 * @module model/LoyaltySubLedger
 * @version 4.2.0
 */
declare class LoyaltySubLedger {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, total: any, totalActivePoints: any, totalPendingPoints: any, totalSpentPoints: any, totalExpiredPoints: any): void;
    /**
     * Constructs a <code>LoyaltySubLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltySubLedger} obj Optional instance to populate.
     * @return {module:model/LoyaltySubLedger} The populated <code>LoyaltySubLedger</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltySubLedger</code>.
     * Ledger of Balance in Loyalty Program for a Customer
     * @alias module:model/LoyaltySubLedger
     * @param total {Number} ⚠️ Deprecated: Please use 'totalActivePoints' property instead. Total amount of currently active and available points in the customer's balance
     * @param totalActivePoints {Number} Total amount of currently active and available points in the customer's balance
     * @param totalPendingPoints {Number} Total amount of pending points, which are not active yet but will become active in the future
     * @param totalSpentPoints {Number} Total amount of points already spent by this customer
     * @param totalExpiredPoints {Number} Total amount of points, that expired without ever being spent
     */
    constructor(total: number, totalActivePoints: number, totalPendingPoints: number, totalSpentPoints: number, totalExpiredPoints: number);
    total: any;
    totalActivePoints: any;
    totalPendingPoints: any;
    totalSpentPoints: any;
    totalExpiredPoints: any;
    transactions: any;
    expiringPoints: any;
    activePoints: any;
    pendingPoints: any;
    expiredPoints: any;
}
