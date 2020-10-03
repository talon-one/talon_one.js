export default NewInvitation;
/**
 * The NewInvitation model module.
 * @module model/NewInvitation
 * @version 4.2.0
 */
declare class NewInvitation {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any, acl: any): void;
    /**
     * Constructs a <code>NewInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInvitation} obj Optional instance to populate.
     * @return {module:model/NewInvitation} The populated <code>NewInvitation</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewInvitation</code>.
     * Parameters for inviting a new user
     * @alias module:model/NewInvitation
     * @param email {String}
     * @param acl {String} a blob of acl json
     */
    constructor(email: string, acl: string);
    name: any;
    email: any;
    acl: any;
    roles: any;
}
