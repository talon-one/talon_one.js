export default AccessLogEntry;
/**
 * The AccessLogEntry model module.
 * @module model/AccessLogEntry
 * @version 4.2.0
 */
declare class AccessLogEntry {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, uuid: any, status: any, method: any, requestUri: any, time: any, requestPayload: any, responsePayload: any): void;
    /**
     * Constructs a <code>AccessLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessLogEntry} obj Optional instance to populate.
     * @return {module:model/AccessLogEntry} The populated <code>AccessLogEntry</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AccessLogEntry</code>.
     * Log of application accesses
     * @alias module:model/AccessLogEntry
     * @param uuid {String} UUID reference of request
     * @param status {Number} HTTP status code of response
     * @param method {String} HTTP method of request
     * @param requestUri {String} target URI of request
     * @param time {Date} timestamp of request
     * @param requestPayload {String} payload of request
     * @param responsePayload {String} payload of response
     */
    constructor(uuid: string, status: number, method: string, requestUri: string, time: Date, requestPayload: string, responsePayload: string);
    uuid: any;
    status: any;
    method: any;
    requestUri: any;
    time: any;
    requestPayload: any;
    responsePayload: any;
}
