export default AccountEntity;
/**
 * The AccountEntity model module.
 * @module model/AccountEntity
 * @version 4.2.0
 */
declare class AccountEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, accountId: any): void;
    /**
     * Constructs a <code>AccountEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountEntity} obj Optional instance to populate.
     * @return {module:model/AccountEntity} The populated <code>AccountEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AccountEntity</code>.
     * @alias module:model/AccountEntity
     * @param accountId {Number} The ID of the account that owns this entity.
     */
    constructor(accountId: number);
    accountId: any;
}
