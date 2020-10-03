export default NewPasswordEmail;
/**
 * The NewPasswordEmail model module.
 * @module model/NewPasswordEmail
 * @version 4.2.0
 */
declare class NewPasswordEmail {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any): void;
    /**
     * Constructs a <code>NewPasswordEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewPasswordEmail} obj Optional instance to populate.
     * @return {module:model/NewPasswordEmail} The populated <code>NewPasswordEmail</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewPasswordEmail</code>.
     * @alias module:model/NewPasswordEmail
     * @param email {String}
     */
    constructor(email: string);
    email: any;
}
