export default UpdateAccount;
/**
 * The UpdateAccount model module.
 * @module model/UpdateAccount
 * @version 4.2.0
 */
declare class UpdateAccount {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, companyName: any, billingEmail: any): void;
    /**
     * Constructs a <code>UpdateAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAccount} obj Optional instance to populate.
     * @return {module:model/UpdateAccount} The populated <code>UpdateAccount</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateAccount</code>.
     * @alias module:model/UpdateAccount
     * @param companyName {String} Name of your company.
     * @param billingEmail {String} The billing email address associated with your company account.
     */
    constructor(companyName: string, billingEmail: string);
    attributes: any;
    companyName: any;
    billingEmail: any;
    state: any;
    planExpires: any;
}
declare namespace UpdateAccount {
    namespace StateEnum {
        const active: string;
        const deactivated: string;
    }
}
