export default CustomerProfile;
/**
 * The CustomerProfile model module.
 * @module model/CustomerProfile
 * @version 4.2.0
 */
declare class CustomerProfile {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationId: any, created: any, attributes: any, accountId: any, closedSessions: any, totalSales: any, lastActivity: any): void;
    /**
     * Constructs a <code>CustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfile} obj Optional instance to populate.
     * @return {module:model/CustomerProfile} The populated <code>CustomerProfile</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CustomerProfile</code>.
     *
     * @alias module:model/CustomerProfile
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system.
     * @param created {Date} The exact moment this entity was created.
     * @param attributes {Object} Arbitrary properties associated with this item
     * @param accountId {Number} The ID of the Talon.One account that owns this profile.
     * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
     * @param totalSales {Number} Sum of all purchases made by this customer
     * @param lastActivity {Date} Timestamp of the most recent event received from this customer
     */
    constructor(integrationId: string, created: Date, attributes: any, accountId: number, closedSessions: number, totalSales: number, lastActivity: Date);
    integrationId: any;
    created: any;
    attributes: any;
    accountId: any;
    closedSessions: any;
    totalSales: any;
    loyaltyMemberships: any;
    audienceMemberships: any;
    lastActivity: any;
}
