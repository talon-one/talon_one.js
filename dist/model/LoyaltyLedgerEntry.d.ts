export default LoyaltyLedgerEntry;
/**
 * The LoyaltyLedgerEntry model module.
 * @module model/LoyaltyLedgerEntry
 * @version 4.2.0
 */
declare class LoyaltyLedgerEntry {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, created: any, programID: any, customerProfileID: any, type: any, amount: any, name: any, subLedgerID: any): void;
    /**
     * Constructs a <code>LoyaltyLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyLedgerEntry} obj Optional instance to populate.
     * @return {module:model/LoyaltyLedgerEntry} The populated <code>LoyaltyLedgerEntry</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyLedgerEntry</code>.
     * A single row of the ledger, describing one addition or deduction.
     * @alias module:model/LoyaltyLedgerEntry
     * @param created {Date}
     * @param programID {Number}
     * @param customerProfileID {String}
     * @param type {String} The type of the ledger transaction. Possible values are addition, subtraction, expire or expiring (for expiring points ledgers)
     * @param amount {Number}
     * @param name {String} A name referencing the condition or effect that added this entry, or the specific name provided in an API call.
     * @param subLedgerID {String} This specifies if we are adding loyalty points to the main ledger or a subledger
     */
    constructor(created: Date, programID: number, customerProfileID: string, type: string, amount: number, name: string, subLedgerID: string);
    created: any;
    programID: any;
    customerProfileID: any;
    customerSessionID: any;
    eventID: any;
    type: any;
    amount: any;
    startDate: any;
    expiryDate: any;
    name: any;
    subLedgerID: any;
    userID: any;
}
