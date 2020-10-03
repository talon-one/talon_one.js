export default NewAccount;
/**
 * The NewAccount model module.
 * @module model/NewAccount
 * @version 4.2.0
 */
declare class NewAccount {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, companyName: any): void;
    /**
     * Constructs a <code>NewAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAccount} obj Optional instance to populate.
     * @return {module:model/NewAccount} The populated <code>NewAccount</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewAccount</code>.
     * @alias module:model/NewAccount
     * @param companyName {String}
     */
    constructor(companyName: string);
    companyName: any;
}
