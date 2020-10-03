export default NewRole;
/**
 * The NewRole model module.
 * @module model/NewRole
 * @version 4.2.0
 */
declare class NewRole {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, acl: any, users: any): void;
    /**
     * Constructs a <code>NewRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewRole} obj Optional instance to populate.
     * @return {module:model/NewRole} The populated <code>NewRole</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewRole</code>.
     *
     * @alias module:model/NewRole
     * @param name {String} Name of the role
     * @param acl {String} Role Policy this should be a stringified blob of json
     * @param users {Array.<Number>} An array of userIDs
     */
    constructor(name: string, acl: string, users: Array<number>);
    name: any;
    description: any;
    acl: any;
    users: any;
}
