export default AudienceMembership;
/**
 * The AudienceMembership model module.
 * @module model/AudienceMembership
 * @version 4.2.0
 */
declare class AudienceMembership {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>AudienceMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AudienceMembership} obj Optional instance to populate.
     * @return {module:model/AudienceMembership} The populated <code>AudienceMembership</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AudienceMembership</code>.
     * @alias module:model/AudienceMembership
     * @param id {Number} The ID of the audience belonging to this entity.
     * @param name {String} The Name of the audience belonging to this entity.
     */
    constructor(id: number, name: string);
    id: any;
    name: any;
}
