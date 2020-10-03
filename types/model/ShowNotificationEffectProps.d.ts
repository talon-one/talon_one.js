export default ShowNotificationEffectProps;
/**
 * The ShowNotificationEffectProps model module.
 * @module model/ShowNotificationEffectProps
 * @version 4.2.0
 */
declare class ShowNotificationEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, notificationType: any, title: any, body: any): void;
    /**
     * Constructs a <code>ShowNotificationEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShowNotificationEffectProps} obj Optional instance to populate.
     * @return {module:model/ShowNotificationEffectProps} The populated <code>ShowNotificationEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ShowNotificationEffectProps</code>.
     * The properties specific to the \&quot;showNotification\&quot; effect. This gets triggered whenever a validated rule contained a \&quot;show notification\&quot; effect.
     * @alias module:model/ShowNotificationEffectProps
     * @param notificationType {String} The type of notification that should be shown (e.g. error/warning/info)
     * @param title {String} Title of the notification
     * @param body {String} Body of the notification
     */
    constructor(notificationType: string, title: string, body: string);
    notificationType: any;
    title: any;
    body: any;
}
