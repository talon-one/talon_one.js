export default ApplicationEvent;
/**
 * The ApplicationEvent model module.
 * @module model/ApplicationEvent
 * @version 4.2.0
 */
declare class ApplicationEvent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, applicationId: any, type: any, attributes: any, effects: any): void;
    /**
     * Constructs a <code>ApplicationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationEvent} obj Optional instance to populate.
     * @return {module:model/ApplicationEvent} The populated <code>ApplicationEvent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationEvent</code>.
     *
     * @alias module:model/ApplicationEvent
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Additional JSON serialized data associated with the event.
     * @param effects {Array.<Object>} An array containing the effects that were applied as a result of this event.
     */
    constructor(id: number, created: Date, applicationId: number, type: string, attributes: any, effects: Array<any>);
    id: any;
    created: any;
    applicationId: any;
    profileId: any;
    sessionId: any;
    type: any;
    attributes: any;
    effects: any;
}
