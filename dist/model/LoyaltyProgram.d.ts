export default LoyaltyProgram;
/**
 * The LoyaltyProgram model module.
 * @module model/LoyaltyProgram
 * @version 4.2.0
 */
declare class LoyaltyProgram {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, accountID: any, name: any, title: any, description: any, subscribedApplications: any, defaultValidity: any, defaultPending: any, allowSubledger: any): void;
    /**
     * Constructs a <code>LoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/LoyaltyProgram} The populated <code>LoyaltyProgram</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyProgram</code>.
     * A Loyalty Program
     * @alias module:model/LoyaltyProgram
     * @param id {Number} The ID of loyalty program.
     * @param accountID {Number} The ID of the Talon.One account that owns this program.
     * @param name {String} The internal name for the Loyalty Program.
     * @param title {String} The display title for the Loyalty Program.
     * @param description {String} Description of our Loyalty Program.
     * @param subscribedApplications {Array.<Number>} A list containing the IDs of all applications that are subscribed to this Loyalty Program.
     * @param defaultValidity {String} Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m'.
     * @param defaultPending {String} Indicates the default duration for the pending time, after which points will be valid. The format is a number followed by a duration unit, like '1h' or '40m'.
     * @param allowSubledger {Boolean} Indicates if this program supports subledgers inside the program
     */
    constructor(id: number, accountID: number, name: string, title: string, description: string, subscribedApplications: Array<number>, defaultValidity: string, defaultPending: string, allowSubledger: boolean);
    id: any;
    accountID: any;
    name: any;
    title: any;
    description: any;
    subscribedApplications: any;
    defaultValidity: any;
    defaultPending: any;
    allowSubledger: any;
}
