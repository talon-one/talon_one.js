export default FeedNotification;
/**
 * The FeedNotification model module.
 * @module model/FeedNotification
 * @version 4.2.0
 */
declare class FeedNotification {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, created: any, updated: any, articleUrl: any, type: any, body: any): void;
    /**
     * Constructs a <code>FeedNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedNotification} obj Optional instance to populate.
     * @return {module:model/FeedNotification} The populated <code>FeedNotification</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FeedNotification</code>.
     * A feed notification for CAMA users
     * @alias module:model/FeedNotification
     * @param title {String} Title of the feed notification
     * @param created {Date} Timestamp of the moment this feed notification was created
     * @param updated {Date} Timestamp of the moment this feed notification was last updated
     * @param articleUrl {String} URL to the feed notification in the help center
     * @param type {module:model/FeedNotification.TypeEnum} The type of the feed notification
     * @param body {String} Body of the feed notification
     */
    constructor(title: string, created: Date, updated: Date, articleUrl: string, type: any, body: string);
    title: any;
    created: any;
    updated: any;
    articleUrl: any;
    type: any;
    body: any;
}
declare namespace FeedNotification {
    namespace TypeEnum {
        const feed: string;
        const feature: string;
        const announcement: string;
        const alert: string;
        const test: string;
    }
}
