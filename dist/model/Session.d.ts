export default Session;
/**
 * The Session model module.
 * @module model/Session
 * @version 4.2.0
 */
declare class Session {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any, token: any, created: any): void;
    /**
     * Constructs a <code>Session</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Session} obj Optional instance to populate.
     * @return {module:model/Session} The populated <code>Session</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Session</code>.
     * @alias module:model/Session
     * @param userId {Number} The ID of the user of this session
     * @param token {String} An opaque session identifier
     * @param created {Date} Unix timestamp indicating when the session was first created.
     */
    constructor(userId: number, token: string, created: Date);
    userId: any;
    token: any;
    created: any;
}
