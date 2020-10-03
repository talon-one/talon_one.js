export default UpdateAudience;
/**
 * The UpdateAudience model module.
 * @module model/UpdateAudience
 * @version 4.2.0
 */
declare class UpdateAudience {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>UpdateAudience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAudience} obj Optional instance to populate.
     * @return {module:model/UpdateAudience} The populated <code>UpdateAudience</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateAudience</code>.
     * @alias module:model/UpdateAudience
     * @param name {String} The human-friendly display name for this Audience.
     */
    constructor(name: string);
    name: any;
}
