export default LoyaltyMembership;
/**
 * The LoyaltyMembership model module.
 * @module model/LoyaltyMembership
 * @version 4.2.0
 */
declare class LoyaltyMembership {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, loyaltyProgramId: any): void;
    /**
     * Constructs a <code>LoyaltyMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoyaltyMembership} obj Optional instance to populate.
     * @return {module:model/LoyaltyMembership} The populated <code>LoyaltyMembership</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoyaltyMembership</code>.
     * @alias module:model/LoyaltyMembership
     * @param loyaltyProgramId {Number} The ID of the loyalty program belonging to this entity.
     */
    constructor(loyaltyProgramId: number);
    joined: any;
    loyaltyProgramId: any;
}
