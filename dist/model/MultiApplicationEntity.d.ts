export default MultiApplicationEntity;
/**
 * The MultiApplicationEntity model module.
 * @module model/MultiApplicationEntity
 * @version 4.2.0
 */
declare class MultiApplicationEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applicationIds: any): void;
    /**
     * Constructs a <code>MultiApplicationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiApplicationEntity} obj Optional instance to populate.
     * @return {module:model/MultiApplicationEntity} The populated <code>MultiApplicationEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MultiApplicationEntity</code>.
     * @alias module:model/MultiApplicationEntity
     * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
     */
    constructor(applicationIds: Array<number>);
    applicationIds: any;
}
