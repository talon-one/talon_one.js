export default ApplicationSessionEntity;
/**
 * The ApplicationSessionEntity model module.
 * @module model/ApplicationSessionEntity
 * @version 4.2.0
 */
declare class ApplicationSessionEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, sessionId: any): void;
    /**
     * Constructs a <code>ApplicationSessionEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSessionEntity} obj Optional instance to populate.
     * @return {module:model/ApplicationSessionEntity} The populated <code>ApplicationSessionEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationSessionEntity</code>.
     * @alias module:model/ApplicationSessionEntity
     * @param sessionId {Number} The globally unique Talon.One ID of the session where this entity was created.
     */
    constructor(sessionId: number);
    sessionId: any;
}
