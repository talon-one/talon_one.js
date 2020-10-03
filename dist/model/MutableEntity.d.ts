export default MutableEntity;
/**
 * The MutableEntity model module.
 * @module model/MutableEntity
 * @version 4.2.0
 */
declare class MutableEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, modified: any): void;
    /**
     * Constructs a <code>MutableEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutableEntity} obj Optional instance to populate.
     * @return {module:model/MutableEntity} The populated <code>MutableEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MutableEntity</code>.
     * @alias module:model/MutableEntity
     * @param modified {Date} The exact moment this entity was last modified.
     */
    constructor(modified: Date);
    modified: any;
}
