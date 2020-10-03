export default IntegrationProfileEntity;
/**
 * The IntegrationProfileEntity model module.
 * @module model/IntegrationProfileEntity
 * @version 4.2.0
 */
declare class IntegrationProfileEntity {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>IntegrationProfileEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationProfileEntity} obj Optional instance to populate.
     * @return {module:model/IntegrationProfileEntity} The populated <code>IntegrationProfileEntity</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    profileId: any;
}
