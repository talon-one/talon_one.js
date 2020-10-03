export default Notification;
/**
 * The Notification model module.
 * @module model/Notification
 * @version 4.2.0
 */
declare class Notification {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, description: any): void;
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Notification</code>.
     * @alias module:model/Notification
     * @param id {Number} id of the notification
     * @param name {String} name of the notification
     * @param description {String} description of the notification
     */
    constructor(id: number, name: string, description: string);
    id: any;
    name: any;
    description: any;
}
