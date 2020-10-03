export default UserFeedNotifications;
/**
 * The UserFeedNotifications model module.
 * @module model/UserFeedNotifications
 * @version 4.2.0
 */
declare class UserFeedNotifications {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, lastUpdate: any, notifications: any): void;
    /**
     * Constructs a <code>UserFeedNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserFeedNotifications} obj Optional instance to populate.
     * @return {module:model/UserFeedNotifications} The populated <code>UserFeedNotifications</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UserFeedNotifications</code>.
     * notifications to notify CAMA user about
     * @alias module:model/UserFeedNotifications
     * @param lastUpdate {Date} Timestamp of the last request for this list
     * @param notifications {Array.<module:model/FeedNotification>} List of all notifications to notify the user about
     */
    constructor(lastUpdate: Date, notifications: Array<any>);
    lastUpdate: any;
    notifications: any;
}
