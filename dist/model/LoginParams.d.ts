export default LoginParams;
/**
 * The LoginParams model module.
 * @module model/LoginParams
 * @version 4.2.0
 */
declare class LoginParams {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any, password: any): void;
    /**
     * Constructs a <code>LoginParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginParams} obj Optional instance to populate.
     * @return {module:model/LoginParams} The populated <code>LoginParams</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LoginParams</code>.
     *
     * @alias module:model/LoginParams
     * @param email {String} The email address associated with your account.
     * @param password {String} The password for your account.
     */
    constructor(email: string, password: string);
    email: any;
    password: any;
}
