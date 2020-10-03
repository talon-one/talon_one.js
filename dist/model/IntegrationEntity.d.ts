export default IntegrationEntity;
/**
 * The IntegrationEntity model module.
 * @module model/IntegrationEntity
 * @version 4.2.0
 */
declare class IntegrationEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationId: any, created: any): void;
    /**
     * Constructs a <code>IntegrationEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationEntity} obj Optional instance to populate.
     * @return {module:model/IntegrationEntity} The populated <code>IntegrationEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>IntegrationEntity</code>.
     * @alias module:model/IntegrationEntity
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
     * @param created {Date} The exact moment this entity was created.
     */
    constructor(integrationId: string, created: Date);
    integrationId: any;
    created: any;
}
