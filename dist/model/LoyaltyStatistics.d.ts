export default LoyaltyStatistics;
/**
 * The LoyaltyStatistics model module.
 * @module model/LoyaltyStatistics
 * @version 4.2.0
 */
declare class LoyaltyStatistics {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, totalActivePoints: any, totalPendingPoints: any, totalSpentPoints: any, totalExpiredPoints: any): void;
    /**
     * Constructs a <code>LoyaltyStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyStatistics} obj Optional instance to populate.
     * @return {module:model/LoyaltyStatistics} The populated <code>LoyaltyStatistics</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyStatistics</code>.
     *
     * @alias module:model/LoyaltyStatistics
     * @param totalActivePoints {Number} Total of active points for this loyalty program
     * @param totalPendingPoints {Number} Total of pending points for this loyalty program
     * @param totalSpentPoints {Number} Total of spent points for this loyalty program
     * @param totalExpiredPoints {Number} Total of expired points for this loyalty program
     */
    constructor(totalActivePoints: number, totalPendingPoints: number, totalSpentPoints: number, totalExpiredPoints: number);
    totalActivePoints: any;
    totalPendingPoints: any;
    totalSpentPoints: any;
    totalExpiredPoints: any;
}
