export default Webhook;
/**
 * The Webhook model module.
 * @module model/Webhook
 * @version 4.2.0
 */
declare class Webhook {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, modified: any, applicationIds: any, title: any, verb: any, url: any, headers: any, params: any, enabled: any): void;
    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Webhook</code>.
     *
     * @alias module:model/Webhook
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param modified {Date} The exact moment this entity was last modified.
     * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity. The IDs of the applications that are related to this entity.
     * @param title {String} Friendly title for this webhook
     * @param verb {module:model/Webhook.VerbEnum} API method for this webhook
     * @param url {String} API url (supports templating using parameters) for this webhook
     * @param headers {Array.<String>} List of API HTTP headers for this webhook
     * @param params {Array.<module:model/TemplateArgDef>} Array of template argument definitions
     * @param enabled {Boolean} Enables or disables webhook from showing in rule builder
     */
    constructor(id: number, created: Date, modified: Date, applicationIds: Array<number>, title: string, verb: any, url: string, headers: Array<string>, params: Array<any>, enabled: boolean);
    id: any;
    created: any;
    modified: any;
    applicationIds: any;
    title: any;
    verb: any;
    url: any;
    headers: any;
    payload: any;
    params: any;
    enabled: any;
}
declare namespace Webhook {
    namespace VerbEnum {
        const POST: string;
        const PUT: string;
        const GET: string;
        const DELETE: string;
        const PATCH: string;
    }
}
