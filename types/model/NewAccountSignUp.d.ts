export default NewAccountSignUp;
/**
 * The NewAccountSignUp model module.
 * @module model/NewAccountSignUp
 * @version 4.2.0
 */
declare class NewAccountSignUp {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any, password: any, companyName: any): void;
    /**
     * Constructs a <code>NewAccountSignUp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccountSignUp} obj Optional instance to populate.
     * @return {module:model/NewAccountSignUp} The populated <code>NewAccountSignUp</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewAccountSignUp</code>.
     *
     * @alias module:model/NewAccountSignUp
     * @param email {String} The email address associated with your account.
     * @param password {String} The password for your account.
     * @param companyName {String}
     */
    constructor(email: string, password: string, companyName: string);
    email: any;
    password: any;
    companyName: any;
}
