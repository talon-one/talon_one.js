export default LoyaltyProgramLedgers;
/**
 * The LoyaltyProgramLedgers model module.
 * @module model/LoyaltyProgramLedgers
 * @version 4.2.0
 */
declare class LoyaltyProgramLedgers {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, name: any, ledger: any): void;
    /**
     * Constructs a <code>LoyaltyProgramLedgers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgramLedgers} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgramLedgers} The populated <code>LoyaltyProgramLedgers</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyProgramLedgers</code>.
     * Customer specific information about loyalty points.
     * @alias module:model/LoyaltyProgramLedgers
     * @param title {String} Visible name of loyalty program
     * @param name {String} Internal name of loyalty program
     * @param ledger {module:model/LoyaltyProgramBalance}
     */
    constructor(title: string, name: string, ledger: any);
    title: any;
    name: any;
    ledger: any;
    subLedgers: any;
}
