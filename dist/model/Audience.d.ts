export default Audience;
/**
 * The Audience model module.
 * @module model/Audience
 * @version 4.2.0
 */
declare class Audience {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, accountId: any, id: any, created: any, name: any, integration: any, integrationId: any): void;
    /**
     * Constructs a <code>Audience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Audience} obj Optional instance to populate.
     * @return {module:model/Audience} The populated <code>Audience</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Audience</code>.
     *
     * @alias module:model/Audience
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param name {String} The human-friendly display name for this Audience.
     * @param integration {module:model/Audience.IntegrationEnum} Integration that this audience was created in.
     * @param integrationId {String} The ID of this Audience in the third-party integration
     */
    constructor(accountId: number, id: number, created: Date, name: string, integration: any, integrationId: string);
    accountId: any;
    id: any;
    created: any;
    name: any;
    integration: any;
    integrationId: any;
}
declare namespace Audience {
    namespace IntegrationEnum {
        const mparticle: string;
    }
}
