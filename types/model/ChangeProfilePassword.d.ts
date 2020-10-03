export default ChangeProfilePassword;
/**
 * The ChangeProfilePassword model module.
 * @module model/ChangeProfilePassword
 * @version 4.2.0
 */
declare class ChangeProfilePassword {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, password: any, newPassword: any): void;
    /**
     * Constructs a <code>ChangeProfilePassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeProfilePassword} obj Optional instance to populate.
     * @return {module:model/ChangeProfilePassword} The populated <code>ChangeProfilePassword</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ChangeProfilePassword</code>.
     * @alias module:model/ChangeProfilePassword
     * @param password {String} Your old password.
     * @param newPassword {String} Your new password.
     */
    constructor(password: string, newPassword: string);
    password: any;
    newPassword: any;
}
