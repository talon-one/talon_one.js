export default UpdateLoyaltyProgram;
/**
 * The UpdateLoyaltyProgram model module.
 * @module model/UpdateLoyaltyProgram
 * @version 4.2.0
 */
declare class UpdateLoyaltyProgram {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UpdateLoyaltyProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLoyaltyProgram} obj Optional instance to populate.
     * @return {module:model/UpdateLoyaltyProgram} The populated <code>UpdateLoyaltyProgram</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    title: any;
    description: any;
    subscribedApplications: any;
    defaultValidity: any;
    defaultPending: any;
    allowSubledger: any;
}
