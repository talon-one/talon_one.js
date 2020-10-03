export default ModelExport;
/**
 * The ModelExport model module.
 * @module model/ModelExport
 * @version 4.2.0
 */
declare class ModelExport {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, accountId: any, userId: any, entity: any, filter: any): void;
    /**
     * Constructs a <code>ModelExport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelExport} obj Optional instance to populate.
     * @return {module:model/ModelExport} The populated <code>ModelExport</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ModelExport</code>.
     *
     * @alias module:model/ModelExport
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param entity {module:model/ModelExport.EntityEnum} The name of the entity that was exported.
     * @param filter {Object} Map of keys and values that were used to filter the exported rows
     */
    constructor(id: number, created: Date, accountId: number, userId: number, entity: any, filter: any);
    id: any;
    created: any;
    accountId: any;
    userId: any;
    entity: any;
    filter: any;
}
declare namespace ModelExport {
    namespace EntityEnum {
        const Coupon: string;
        const Effect: string;
        const CustomerSession: string;
    }
}
