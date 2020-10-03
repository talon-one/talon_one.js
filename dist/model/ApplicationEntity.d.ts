export default ApplicationEntity;
/**
 * The ApplicationEntity model module.
 * @module model/ApplicationEntity
 * @version 4.2.0
 */
declare class ApplicationEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applicationId: any): void;
    /**
     * Constructs a <code>ApplicationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEntity} obj Optional instance to populate.
     * @return {module:model/ApplicationEntity} The populated <code>ApplicationEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationEntity</code>.
     * @alias module:model/ApplicationEntity
     * @param applicationId {Number} The ID of the application that owns this entity.
     */
    constructor(applicationId: number);
    applicationId: any;
}
