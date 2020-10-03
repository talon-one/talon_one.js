export default UpdateApplication;
/**
 * The UpdateApplication model module.
 * @module model/UpdateApplication
 * @version 4.2.0
 */
declare class UpdateApplication {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, timezone: any, currency: any): void;
    /**
     * Constructs a <code>UpdateApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApplication} obj Optional instance to populate.
     * @return {module:model/UpdateApplication} The populated <code>UpdateApplication</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateApplication</code>.
     * @alias module:model/UpdateApplication
     * @param name {String} The name of this application.
     * @param timezone {String} A string containing an IANA timezone descriptor.
     * @param currency {String} A string describing a default currency for new customer sessions.
     */
    constructor(name: string, timezone: string, currency: string);
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
}
declare namespace UpdateApplication {
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
