export default Role;
/**
 * The Role model module.
 * @module model/Role
 * @version 4.2.0
 */
declare class Role {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, accountID: any): void;
    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Role</code>.
     *
     * @alias module:model/Role
     * @param id {Number} The ID of the role corresponding to the DB row
     * @param accountID {Number} The ID of the Talon.One account that owns this role.
     */
    constructor(id: number, accountID: number);
    id: any;
    accountID: any;
    campaignGroupID: any;
    name: any;
    description: any;
    members: any;
    acl: any;
}
