export default MultipleCustomerProfileIntegrationRequestItem;
/**
 * The MultipleCustomerProfileIntegrationRequestItem model module.
 * @module model/MultipleCustomerProfileIntegrationRequestItem
 * @version 4.2.0
 */
declare class MultipleCustomerProfileIntegrationRequestItem {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, integrationId: any): void;
    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationRequestItem} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationRequestItem} The populated <code>MultipleCustomerProfileIntegrationRequestItem</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>MultipleCustomerProfileIntegrationRequestItem</code>.
     *
     * @alias module:model/MultipleCustomerProfileIntegrationRequestItem
     * @param integrationId {String} The custom identifier for this profile, must be unique within the account.
     */
    constructor(integrationId: string);
    attributes: any;
    integrationId: any;
}
