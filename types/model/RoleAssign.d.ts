export default RoleAssign;
/**
 * The RoleAssign model module.
 * @module model/RoleAssign
 * @version 4.2.0
 */
declare class RoleAssign {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, users: any, roles: any): void;
    /**
     * Constructs a <code>RoleAssign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAssign} obj Optional instance to populate.
     * @return {module:model/RoleAssign} The populated <code>RoleAssign</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>RoleAssign</code>.
     *
     * @alias module:model/RoleAssign
     * @param users {Array.<Number>} An array of userIDs
     * @param roles {Array.<Number>} An array of roleIDs
     */
    constructor(users: Array<number>, roles: Array<number>);
    users: any;
    roles: any;
}
