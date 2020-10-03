export default NewEventType;
/**
 * The NewEventType model module.
 * @module model/NewEventType
 * @version 4.2.0
 */
declare class NewEventType {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, applicationIds: any, title: any, name: any, description: any, mimeType: any, handler: any, version: any): void;
    /**
     * Constructs a <code>NewEventType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewEventType} obj Optional instance to populate.
     * @return {module:model/NewEventType} The populated <code>NewEventType</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewEventType</code>.
     *
     * @alias module:model/NewEventType
     * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
     * @param title {String} The human-friendly display name for this event type. Use a short, past-tense, description of the event.
     * @param name {String} The machine-friendly canonical name for this event type. This will be used in URLs, and cannot be changed after an event type has been created.
     * @param description {String} An explanation of when the event type is triggered. Write this with a campaign manager in mind. For example:  > The \"Payment Accepted\" event is triggered after successful processing of a payment by our payment gateway.
     * @param mimeType {module:model/NewEventType.MimeTypeEnum} This defines how the request payload will be parsed before your handler code is run.
     * @param handler {String} Code that will be run after successful parsing & validation of the payload for this event. This code _may_ choose to evaluate campaign rules.
     * @param version {Number} The version of this event type. When updating an existing event type this must be **exactly** `currentVersion + 1`.
     */
    constructor(applicationIds: Array<number>, title: string, name: string, description: string, mimeType: any, handler: string, version: number);
    applicationIds: any;
    title: any;
    name: any;
    description: any;
    mimeType: any;
    examplePayload: any;
    schema: any;
    handlerLanguage: any;
    handler: any;
    version: any;
}
declare namespace NewEventType {
    const MimeTypeEnum: {
        /**
         * value: "application/json"
         * @const
         */
        "application/json": string;
        /**
         * value: "application/x-www-form-urlencoded"
         * @const
         */
        "application/x-www-form-urlencoded": string;
        /**
         * value: "none"
         * @const
         */
        none: string;
    };
    namespace HandlerLanguageEnum {
        const talang: string;
    }
}
