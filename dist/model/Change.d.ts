export default Change;
/**
 * The Change model module.
 * @module model/Change
 * @version 4.2.0
 */
declare class Change {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, userId: any, entity: any): void;
    /**
     * Constructs a <code>Change</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Change} obj Optional instance to populate.
     * @return {module:model/Change} The populated <code>Change</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Change</code>.
     *
     * @alias module:model/Change
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param userId {Number} The ID of the account that owns this entity.
     * @param entity {String} API endpoint on which the change was initiated.
     */
    constructor(id: number, created: Date, userId: number, entity: string);
    id: any;
    created: any;
    userId: any;
    entity: any;
    old: any;
    new: any;
}
