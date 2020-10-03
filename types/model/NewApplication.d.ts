export default NewApplication;
/**
 * The NewApplication model module.
 * @module model/NewApplication
 * @version 4.2.0
 */
declare class NewApplication {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, timezone: any, currency: any): void;
    /**
     * Constructs a <code>NewApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplication} obj Optional instance to populate.
     * @return {module:model/NewApplication} The populated <code>NewApplication</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewApplication</code>.
     *
     * @alias module:model/NewApplication
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
    key: any;
}
declare namespace NewApplication {
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
