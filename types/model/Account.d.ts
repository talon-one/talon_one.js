export default Account;
/**
 * The Account model module.
 * @module model/Account
 * @version 4.2.0
 */
declare class Account {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, modified: any, companyName: any, domainName: any, state: any, billingEmail: any, applicationCount: any, userCount: any, campaignsActiveCount: any, campaignsInactiveCount: any): void;
    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account} obj Optional instance to populate.
     * @return {module:model/Account} The populated <code>Account</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Account</code>.
     *
     * @alias module:model/Account
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param modified {Date} The exact moment this entity was last modified.
     * @param companyName {String}
     * @param domainName {String} Subdomain Name for yourcompany.talon.one
     * @param state {module:model/Account.StateEnum} State of the account (active, deactivated)
     * @param billingEmail {String} The billing email address associated with your company account.
     * @param applicationCount {Number} The current number of Applications in your account.
     * @param userCount {Number} The current number of Campaign Manager Users in your account.
     * @param campaignsActiveCount {Number} The current number of active Campaigns in your account.
     * @param campaignsInactiveCount {Number} The current number of inactive Campaigns in your account.
     */
    constructor(id: number, created: Date, modified: Date, companyName: string, domainName: string, state: any, billingEmail: string, applicationCount: number, userCount: number, campaignsActiveCount: number, campaignsInactiveCount: number);
    id: any;
    created: any;
    modified: any;
    companyName: any;
    domainName: any;
    state: any;
    billingEmail: any;
    planName: any;
    planExpires: any;
    applicationLimit: any;
    userLimit: any;
    campaignLimit: any;
    apiLimit: any;
    applicationCount: any;
    userCount: any;
    campaignsActiveCount: any;
    campaignsInactiveCount: any;
    attributes: any;
}
declare namespace Account {
    namespace StateEnum {
        const active: string;
        const deactivated: string;
    }
}
