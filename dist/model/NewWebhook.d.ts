export default NewWebhook;
/**
 * The NewWebhook model module.
 * @module model/NewWebhook
 * @version 4.2.0
 */
declare class NewWebhook {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applicationIds: any, title: any, verb: any, url: any, headers: any, params: any, enabled: any): void;
    /**
     * Constructs a <code>NewWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewWebhook} obj Optional instance to populate.
     * @return {module:model/NewWebhook} The populated <code>NewWebhook</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewWebhook</code>.
     *
     * @alias module:model/NewWebhook
     * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
     * @param title {String} Friendly title for this webhook
     * @param verb {module:model/NewWebhook.VerbEnum} API method for this webhook
     * @param url {String} API url (supports templating using parameters) for this webhook
     * @param headers {Array.<String>} List of API HTTP headers for this webhook
     * @param params {Array.<module:model/TemplateArgDef>} Array of template argument definitions
     * @param enabled {Boolean} Enables or disables webhook from showing in rule builder
     */
    constructor(applicationIds: Array<number>, title: string, verb: any, url: string, headers: Array<string>, params: Array<any>, enabled: boolean);
    applicationIds: any;
    title: any;
    verb: any;
    url: any;
    headers: any;
    payload: any;
    params: any;
    enabled: any;
}
declare namespace NewWebhook {
    namespace VerbEnum {
        const POST: string;
        const PUT: string;
        const GET: string;
        const DELETE: string;
        const PATCH: string;
    }
}
