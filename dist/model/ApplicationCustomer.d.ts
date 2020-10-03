export default ApplicationCustomer;
/**
 * The ApplicationCustomer model module.
 * @module model/ApplicationCustomer
 * @version 4.2.0
 */
declare class ApplicationCustomer {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, integrationId: any, attributes: any, accountId: any, closedSessions: any, totalSales: any, lastActivity: any): void;
    /**
     * Constructs a <code>ApplicationCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationCustomer} obj Optional instance to populate.
     * @return {module:model/ApplicationCustomer} The populated <code>ApplicationCustomer</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationCustomer</code>.
     *
     * @alias module:model/ApplicationCustomer
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created. The exact moment this entity was created. The exact moment this entity was created.
     * @param integrationId {String} The integration ID for this entity sent to and used in the Talon.One system. The integration ID for this entity sent to and used in the Talon.One system.
     * @param attributes {Object} Arbitrary properties associated with this item
     * @param accountId {Number} The ID of the Talon.One account that owns this profile. The ID of the Talon.One account that owns this profile.
     * @param closedSessions {Number} The total amount of closed sessions by a customer. A closed session is a successful purchase.
     * @param totalSales {Number} Sum of all purchases made by this customer
     * @param lastActivity {Date} Timestamp of the most recent event received from this customer
     */
    constructor(id: number, created: Date, integrationId: string, attributes: any, accountId: number, closedSessions: number, totalSales: number, lastActivity: Date);
    id: any;
    created: any;
    integrationId: any;
    attributes: any;
    accountId: any;
    closedSessions: any;
    totalSales: any;
    loyaltyMemberships: any;
    audienceMemberships: any;
    lastActivity: any;
}
