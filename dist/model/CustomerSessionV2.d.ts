export default CustomerSessionV2;
/**
 * The CustomerSessionV2 model module.
 * @module model/CustomerSessionV2
 * @version 4.2.0
 */
declare class CustomerSessionV2 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationId: any, created: any, applicationId: any, profileId: any, state: any, cartItems: any, attributes: any, firstSession: any, total: any, cartItemTotal: any, additionalCostTotal: any): void;
    /**
     * Constructs a <code>CustomerSessionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerSessionV2} obj Optional instance to populate.
     * @return {module:model/CustomerSessionV2} The populated <code>CustomerSessionV2</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CustomerSessionV2</code>.
     *
     * @alias module:model/CustomerSessionV2
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param profileId {String} ID of the customers profile as used within this Talon.One account. May be omitted or set to the empty string if the customer does not yet have a known profile ID.
     * @param state {module:model/CustomerSessionV2.StateEnum} Indicates the current state of the session. All sessions must start in the \"open\" state, after which valid transitions are...  1. open -> closed 2. open -> cancelled 3. closed -> cancelled
     * @param cartItems {Array.<module:model/CartItem>} All items the customer will be purchasing in this session
     * @param attributes {Object} A key-value map of the sessions attributes. The potentially valid attributes are configured in your accounts developer settings.
     * @param firstSession {Boolean} Indicates whether this is the first session for the customer's profile. Will always be true for anonymous sessions.
     * @param total {Number} The total sum of cart-items, as well as additional costs, before any discounts applied
     * @param cartItemTotal {Number} The total sum of cart-items before any discounts applied
     * @param additionalCostTotal {Number} The total sum of additional costs before any discounts applied
     */
    constructor(integrationId: string, created: Date, applicationId: number, profileId: string, state: any, cartItems: Array<any>, attributes: any, firstSession: boolean, total: number, cartItemTotal: number, additionalCostTotal: number);
    integrationId: any;
    created: any;
    applicationId: any;
    profileId: any;
    couponCodes: any;
    referralCode: any;
    state: string;
    cartItems: any;
    additionalCosts: any;
    identifiers: any;
    attributes: any;
    firstSession: any;
    total: any;
    cartItemTotal: any;
    additionalCostTotal: any;
}
declare namespace CustomerSessionV2 {
    namespace StateEnum {
        const open: string;
        const closed: string;
        const cancelled: string;
    }
}
