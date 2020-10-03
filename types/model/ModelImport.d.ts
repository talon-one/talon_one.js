export default ModelImport;
/**
 * The ModelImport model module.
 * @module model/ModelImport
 * @version 4.2.0
 */
declare class ModelImport {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, accountId: any, userId: any, entity: any, amount: any): void;
    /**
     * Constructs a <code>ModelImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelImport} obj Optional instance to populate.
     * @return {module:model/ModelImport} The populated <code>ModelImport</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ModelImport</code>.
     *
     * @alias module:model/ModelImport
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param entity {module:model/ModelImport.EntityEnum} The name of the entity that was imported.
     * @param amount {Number} The number of members that imported.
     */
    constructor(id: number, created: Date, accountId: number, userId: number, entity: any, amount: number);
    id: any;
    created: any;
    accountId: any;
    userId: any;
    entity: any;
    amount: any;
}
declare namespace ModelImport {
    namespace EntityEnum {
        const Coupon: string;
    }
}
