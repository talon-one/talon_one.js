export default EmailEntity;
/**
 * The EmailEntity model module.
 * @module model/EmailEntity
 * @version 4.2.0
 */
declare class EmailEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, email: any): void;
    /**
     * Constructs a <code>EmailEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailEntity} obj Optional instance to populate.
     * @return {module:model/EmailEntity} The populated <code>EmailEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>EmailEntity</code>.
     * @alias module:model/EmailEntity
     * @param email {String} The email address associated with your account.
     */
    constructor(email: string);
    email: any;
}
