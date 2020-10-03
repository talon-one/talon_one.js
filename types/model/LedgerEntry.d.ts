export default LedgerEntry;
/**
 * The LedgerEntry model module.
 * @module model/LedgerEntry
 * @version 4.2.0
 */
declare class LedgerEntry {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, profileId: any, accountId: any, loyaltyProgramId: any, eventId: any, amount: any, reason: any, expiryDate: any): void;
    /**
     * Constructs a <code>LedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LedgerEntry} obj Optional instance to populate.
     * @return {module:model/LedgerEntry} The populated <code>LedgerEntry</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LedgerEntry</code>.
     *
     * @alias module:model/LedgerEntry
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
     * @param accountId {Number} The ID of the Talon.One account that owns this profile.
     * @param loyaltyProgramId {Number} ID of the ledger
     * @param eventId {Number} ID of the related event
     * @param amount {Number} Amount of loyalty points
     * @param reason {String} reason for awarding/deducting points
     * @param expiryDate {Date} Expiry date of the points
     */
    constructor(id: number, created: Date, profileId: string, accountId: number, loyaltyProgramId: number, eventId: number, amount: number, reason: string, expiryDate: Date);
    id: any;
    created: any;
    profileId: any;
    accountId: any;
    loyaltyProgramId: any;
    eventId: any;
    amount: any;
    reason: any;
    expiryDate: any;
    referenceId: any;
}
