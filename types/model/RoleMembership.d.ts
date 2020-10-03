export default RoleMembership;
/**
 * The RoleMembership model module.
 * @module model/RoleMembership
 * @version 4.2.0
 */
declare class RoleMembership {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, roleID: any, userID: any): void;
    /**
     * Constructs a <code>RoleMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleMembership} obj Optional instance to populate.
     * @return {module:model/RoleMembership} The populated <code>RoleMembership</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RoleMembership</code>.
     * @alias module:model/RoleMembership
     * @param roleID {Number} ID of role
     * @param userID {Number} ID of User
     */
    constructor(roleID: number, userID: number);
    RoleID: any;
    UserID: any;
}
