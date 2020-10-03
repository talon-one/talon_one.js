export default LoyaltyProgramBalance;
/**
 * The LoyaltyProgramBalance model module.
 * @module model/LoyaltyProgramBalance
 * @version 4.2.0
 */
declare class LoyaltyProgramBalance {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, currentBalance: any): void;
    /**
     * Constructs a <code>LoyaltyProgramBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgramBalance} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgramBalance} The populated <code>LoyaltyProgramBalance</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyProgramBalance</code>.
     * The balance in a Loyalty Program for some Customer.
     * @alias module:model/LoyaltyProgramBalance
     * @param currentBalance {Number}
     */
    constructor(currentBalance: number);
    currentBalance: any;
}
