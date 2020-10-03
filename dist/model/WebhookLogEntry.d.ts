export default WebhookLogEntry;
/**
 * The WebhookLogEntry model module.
 * @module model/WebhookLogEntry
 * @version 4.2.0
 */
declare class WebhookLogEntry {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, integrationRequestUuid: any, webhookId: any, url: any, request: any, requestTime: any): void;
    /**
     * Constructs a <code>WebhookLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookLogEntry} obj Optional instance to populate.
     * @return {module:model/WebhookLogEntry} The populated <code>WebhookLogEntry</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>WebhookLogEntry</code>.
     * Log of webhook api calls
     * @alias module:model/WebhookLogEntry
     * @param id {String} UUID reference of the webhook request
     * @param integrationRequestUuid {String} UUID reference of the integration request linked to this webhook request
     * @param webhookId {Number} ID of the webhook that triggered the request
     * @param url {String} Target url of request
     * @param request {String} Request message
     * @param requestTime {Date} Timestamp of request
     */
    constructor(id: string, integrationRequestUuid: string, webhookId: number, url: string, request: string, requestTime: Date);
    id: any;
    integrationRequestUuid: any;
    webhookId: any;
    applicationId: any;
    url: any;
    request: any;
    response: any;
    status: any;
    requestTime: any;
    responseTime: any;
}
