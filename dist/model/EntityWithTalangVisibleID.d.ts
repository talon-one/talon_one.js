export default EntityWithTalangVisibleID;
/**
 * The EntityWithTalangVisibleID model module.
 * @module model/EntityWithTalangVisibleID
 * @version 4.2.0
 */
declare class EntityWithTalangVisibleID {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any): void;
    /**
     * Constructs a <code>EntityWithTalangVisibleID</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityWithTalangVisibleID} obj Optional instance to populate.
     * @return {module:model/EntityWithTalangVisibleID} The populated <code>EntityWithTalangVisibleID</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>EntityWithTalangVisibleID</code>.
     * @alias module:model/EntityWithTalangVisibleID
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     */
    constructor(id: number, created: Date);
    id: any;
    created: any;
}
