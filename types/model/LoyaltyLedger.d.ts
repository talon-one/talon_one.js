export default LoyaltyLedger;
/**
 * The LoyaltyLedger model module.
 * @module model/LoyaltyLedger
 * @version 4.2.0
 */
declare class LoyaltyLedger {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, ledger: any): void;
    /**
     * Constructs a <code>LoyaltyLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyLedger} obj Optional instance to populate.
     * @return {module:model/LoyaltyLedger} The populated <code>LoyaltyLedger</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyLedger</code>.
     * Ledger of Balance in Loyalty Program for a Customer
     * @alias module:model/LoyaltyLedger
     * @param ledger {module:model/LoyaltySubLedger}
     */
    constructor(ledger: any);
    ledger: any;
    subLedgers: any;
}
