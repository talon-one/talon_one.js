export default CustomerSession;
/**
 * The CustomerSession model module.
 * @module model/CustomerSession
 * @version 4.2.0
 */
declare class CustomerSession {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationId: any, created: any, applicationId: any, profileId: any, coupon: any, referral: any, state: any, cartItems: any, total: any, attributes: any, firstSession: any, discounts: any): void;
    /**
     * Constructs a <code>CustomerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerSession} obj Optional instance to populate.
     * @return {module:model/CustomerSession} The populated <code>CustomerSession</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CustomerSession</code>.
     *
     * @alias module:model/CustomerSession
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
     * @param coupon {String} Any coupon code entered.
     * @param referral {String} Any referral code entered.
     * @param state {module:model/CustomerSession.StateEnum} Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled
     * @param cartItems {Array.<module:model/CartItem>} Serialized JSON representation.
     * @param total {Number} The total sum of the cart in one session.
     * @param attributes {Object} A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings.
     * @param firstSession {Boolean} Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
     * @param discounts {Object.<String, Number>} A map of labelled discount values, values will be in the same currency as the application associated with the session.
     */
    constructor(integrationId: string, created: Date, applicationId: number, profileId: string, coupon: string, referral: string, state: any, cartItems: Array<any>, total: number, attributes: any, firstSession: boolean, discounts: any);
    integrationId: any;
    created: any;
    applicationId: any;
    profileId: any;
    coupon: any;
    referral: any;
    state: string;
    cartItems: any;
    identifiers: any;
    total: any;
    attributes: any;
    firstSession: any;
    discounts: any;
}
declare namespace CustomerSession {
    namespace StateEnum {
        const open: string;
        const closed: string;
        const cancelled: string;
    }
}
