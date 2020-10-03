export default TriggerWebhookEffectProps;
/**
 * The TriggerWebhookEffectProps model module.
 * @module model/TriggerWebhookEffectProps
 * @version 4.2.0
 */
declare class TriggerWebhookEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, webhookId: any, webhookName: any): void;
    /**
     * Constructs a <code>TriggerWebhookEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerWebhookEffectProps} obj Optional instance to populate.
     * @return {module:model/TriggerWebhookEffectProps} The populated <code>TriggerWebhookEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>TriggerWebhookEffectProps</code>.
     * The properties specific to the \&quot;triggerWebhook\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;trigger webhook\&quot; effect. This is communicated as an FYI and should usually not require action on your side.
     * @alias module:model/TriggerWebhookEffectProps
     * @param webhookId {Number} The ID of the webhook that was triggered
     * @param webhookName {String} The name of the webhook that was triggered
     */
    constructor(webhookId: number, webhookName: string);
    webhookId: any;
    webhookName: any;
}
