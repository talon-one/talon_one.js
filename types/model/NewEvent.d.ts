export default NewEvent;
/**
 * The NewEvent model module.
 * @module model/NewEvent
 * @version 4.2.0
 */
declare class NewEvent {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, attributes: any, sessionId: any): void;
    /**
     * Constructs a <code>NewEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewEvent} obj Optional instance to populate.
     * @return {module:model/NewEvent} The populated <code>NewEvent</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewEvent</code>.
     *
     * @alias module:model/NewEvent
     * @param type {String} A string representing the event. Must not be a reserved event name.
     * @param attributes {Object} Arbitrary additional JSON data associated with the event.
     * @param sessionId {String} The ID of the session that this event occurred in.
     */
    constructor(type: string, attributes: any, sessionId: string);
    profileId: any;
    type: any;
    attributes: any;
    sessionId: any;
}
