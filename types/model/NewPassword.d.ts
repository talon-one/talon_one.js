export default NewPassword;
/**
 * The NewPassword model module.
 * @module model/NewPassword
 * @version 4.2.0
 */
declare class NewPassword {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, password: any, resetToken: any): void;
    /**
     * Constructs a <code>NewPassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewPassword} obj Optional instance to populate.
     * @return {module:model/NewPassword} The populated <code>NewPassword</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewPassword</code>.
     * @alias module:model/NewPassword
     * @param password {String} The new password for your account.
     * @param resetToken {String}
     */
    constructor(password: string, resetToken: string);
    password: any;
    resetToken: any;
}
