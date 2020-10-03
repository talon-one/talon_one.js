export default ApplicationSession;
/**
 * The ApplicationSession model module.
 * @module model/ApplicationSession
 * @version 4.2.0
 */
declare class ApplicationSession {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, applicationId: any, integrationId: any, coupon: any, referral: any, state: any, cartItems: any, discounts: any, total: any): void;
    /**
     * Constructs a <code>ApplicationSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSession} obj Optional instance to populate.
     * @return {module:model/ApplicationSession} The populated <code>ApplicationSession</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationSession</code>.
     *
     * @alias module:model/ApplicationSession
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created. The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
     * @param coupon {String} Any coupon code entered.
     * @param referral {String} Any referral code entered.
     * @param state {module:model/ApplicationSession.StateEnum} Indicating if the customer session is in progress (\"open\"), \"closed\", or \"cancelled\".
     * @param cartItems {Array.<module:model/CartItem>} Serialized JSON representation.
     * @param discounts {Object.<String, Number>} A map of labelled discount values, in the same currency as the session.
     * @param total {Number} The total sum of the session before any discounts applied.
     */
    constructor(id: number, created: Date, applicationId: number, integrationId: string, coupon: string, referral: string, state: any, cartItems: Array<any>, discounts: any, total: number);
    id: any;
    created: any;
    applicationId: any;
    profileId: any;
    integrationId: any;
    profileintegrationid: any;
    coupon: any;
    referral: any;
    state: any;
    cartItems: any;
    discounts: any;
    total: any;
    attributes: any;
}
declare namespace ApplicationSession {
    namespace StateEnum {
        const open: string;
        const closed: string;
        const cancelled: string;
    }
}
