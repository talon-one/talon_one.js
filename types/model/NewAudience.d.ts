export default NewAudience;
/**
 * The NewAudience model module.
 * @module model/NewAudience
 * @version 4.2.0
 */
declare class NewAudience {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, integration: any, integrationId: any): void;
    /**
     * Constructs a <code>NewAudience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAudience} obj Optional instance to populate.
     * @return {module:model/NewAudience} The populated <code>NewAudience</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewAudience</code>.
     * @alias module:model/NewAudience
     * @param name {String} The human-friendly display name for this Audience.
     * @param integration {module:model/NewAudience.IntegrationEnum} Integration that this audience was created in.
     * @param integrationId {String} The ID of this Audience in the third-party integration
     */
    constructor(name: string, integration: any, integrationId: string);
    name: any;
    integration: any;
    integrationId: any;
}
declare namespace NewAudience {
    namespace IntegrationEnum {
        const mparticle: string;
    }
}
