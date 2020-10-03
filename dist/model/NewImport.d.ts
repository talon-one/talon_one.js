export default NewImport;
/**
 * The NewImport model module.
 * @module model/NewImport
 * @version 4.2.0
 */
declare class NewImport {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, entity: any): void;
    /**
     * Constructs a <code>NewImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewImport} obj Optional instance to populate.
     * @return {module:model/NewImport} The populated <code>NewImport</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewImport</code>.
     *
     * @alias module:model/NewImport
     * @param entity {module:model/NewImport.EntityEnum} The name of the entity that was imported.
     */
    constructor(entity: any);
    entity: any;
}
declare namespace NewImport {
    namespace EntityEnum {
        const Coupon: string;
    }
}
