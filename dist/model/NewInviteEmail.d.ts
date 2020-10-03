export default NewInviteEmail;
/**
 * The NewInviteEmail model module.
 * @module model/NewInviteEmail
 * @version 4.2.0
 */
declare class NewInviteEmail {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any, token: any): void;
    /**
     * Constructs a <code>NewInviteEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInviteEmail} obj Optional instance to populate.
     * @return {module:model/NewInviteEmail} The populated <code>NewInviteEmail</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewInviteEmail</code>.
     * @alias module:model/NewInviteEmail
     * @param email {String}
     * @param token {String}
     */
    constructor(email: string, token: string);
    email: any;
    token: any;
}
