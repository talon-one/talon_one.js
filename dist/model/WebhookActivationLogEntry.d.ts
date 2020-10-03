export default WebhookActivationLogEntry;
/**
 * The WebhookActivationLogEntry model module.
 * @module model/WebhookActivationLogEntry
 * @version 4.2.0
 */
declare class WebhookActivationLogEntry {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationRequestUuid: any, webhookId: any, applicationId: any, campaignId: any, created: any): void;
    /**
     * Constructs a <code>WebhookActivationLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookActivationLogEntry} obj Optional instance to populate.
     * @return {module:model/WebhookActivationLogEntry} The populated <code>WebhookActivationLogEntry</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>WebhookActivationLogEntry</code>.
     * Log of activated webhooks
     * @alias module:model/WebhookActivationLogEntry
     * @param integrationRequestUuid {String} UUID reference of the integration request that triggered the effect with the webhook
     * @param webhookId {Number} ID of the webhook that triggered the request
     * @param applicationId {Number} ID of the application that triggered the webhook
     * @param campaignId {Number} ID of the campaign that triggered the webhook
     * @param created {Date} Timestamp of request
     */
    constructor(integrationRequestUuid: string, webhookId: number, applicationId: number, campaignId: number, created: Date);
    integrationRequestUuid: any;
    webhookId: any;
    applicationId: any;
    campaignId: any;
    created: any;
}
