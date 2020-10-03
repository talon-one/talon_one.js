export default Application;
/**
 * The Application model module.
 * @module model/Application
 * @version 4.2.0
 */
declare class Application {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, modified: any, accountId: any, name: any, timezone: any, currency: any, loyaltyPrograms: any): void;
    /**
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Application</code>.
     *
     * @alias module:model/Application
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param modified {Date} The exact moment this entity was last modified.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} The name of this application.
     * @param timezone {String} A string containing an IANA timezone descriptor.
     * @param currency {String} A string describing a default currency for new customer sessions.
     * @param loyaltyPrograms {Array.<module:model/LoyaltyProgram>} An array containing all the loyalty programs to which this application is subscribed
     */
    constructor(id: number, created: Date, modified: Date, accountId: number, name: string, timezone: string, currency: string, loyaltyPrograms: Array<any>);
    id: any;
    created: any;
    modified: any;
    accountId: any;
    name: any;
    description: any;
    timezone: any;
    currency: any;
    caseSensitivity: any;
    attributes: any;
    limits: any;
    campaignPriority: any;
    exclusiveCampaignsStrategy: any;
    enableCascadingDiscounts: any;
    enableFlattenedCartItems: any;
    attributesSettings: any;
    sandbox: any;
    loyaltyPrograms: any;
}
declare namespace Application {
    const CaseSensitivityEnum: {
        /**
         * value: "sensitive"
         * @const
         */
        sensitive: string;
        /**
         * value: "insensitive-uppercase"
         * @const
         */
        "insensitive-uppercase": string;
        /**
         * value: "insensitive-lowercase"
         * @const
         */
        "insensitive-lowercase": string;
    };
    namespace CampaignPriorityEnum {
        const universal: string;
        const stackable: string;
        const exclusive: string;
    }
    namespace ExclusiveCampaignsStrategyEnum {
        const listOrder: string;
        const lowestDiscount: string;
        const highestDiscount: string;
    }
}
