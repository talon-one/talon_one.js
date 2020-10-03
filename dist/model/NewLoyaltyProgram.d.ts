export default NewLoyaltyProgram;
/**
 * The NewLoyaltyProgram model module.
 * @module model/NewLoyaltyProgram
 * @version 4.2.0
 */
declare class NewLoyaltyProgram {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, title: any, defaultValidity: any, defaultPending: any, allowSubledger: any): void;
    /**
     * Constructs a <code>NewLoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewLoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/NewLoyaltyProgram} The populated <code>NewLoyaltyProgram</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewLoyaltyProgram</code>.
     * A new loyalty program
     * @alias module:model/NewLoyaltyProgram
     * @param name {String} The internal name for the Loyalty Program. This is an immutable value.
     * @param title {String} The display title for the Loyalty Program.
     * @param defaultValidity {String} Indicates the default duration after which new loyalty points should expire. The format is a number, followed by one letter indicating the unit; like '1h' or '40m'.
     * @param defaultPending {String} Indicates the default duration for the pending time, after which points will be valid. The format is a number followed by a duration unit, like '1h' or '40m'.
     * @param allowSubledger {Boolean} Indicates if this program supports subledgers inside the program
     */
    constructor(name: string, title: string, defaultValidity: string, defaultPending: string, allowSubledger: boolean);
    name: any;
    title: any;
    description: any;
    subscribedApplications: any;
    defaultValidity: any;
    defaultPending: any;
    allowSubledger: any;
}
