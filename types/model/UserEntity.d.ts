export default UserEntity;
/**
 * The UserEntity model module.
 * @module model/UserEntity
 * @version 4.2.0
 */
declare class UserEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any): void;
    /**
     * Constructs a <code>UserEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserEntity} obj Optional instance to populate.
     * @return {module:model/UserEntity} The populated <code>UserEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UserEntity</code>.
     * @alias module:model/UserEntity
     * @param userId {Number} The ID of the account that owns this entity.
     */
    constructor(userId: number);
    userId: any;
}
