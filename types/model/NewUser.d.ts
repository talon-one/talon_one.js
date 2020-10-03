export default NewUser;
/**
 * The NewUser model module.
 * @module model/NewUser
 * @version 4.2.0
 */
declare class NewUser {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any, password: any, inviteToken: any): void;
    /**
     * Constructs a <code>NewUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUser} obj Optional instance to populate.
     * @return {module:model/NewUser} The populated <code>NewUser</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewUser</code>.
     *
     * @alias module:model/NewUser
     * @param email {String} The email address associated with your account.
     * @param password {String} The password for your account.
     * @param inviteToken {String}
     */
    constructor(email: string, password: string, inviteToken: string);
    email: any;
    password: any;
    name: any;
    inviteToken: any;
}
