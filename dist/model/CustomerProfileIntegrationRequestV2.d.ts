export default CustomerProfileIntegrationRequestV2;
/**
 * The CustomerProfileIntegrationRequestV2 model module.
 * @module model/CustomerProfileIntegrationRequestV2
 * @version 4.2.0
 */
declare class CustomerProfileIntegrationRequestV2 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>CustomerProfileIntegrationRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileIntegrationRequestV2} obj Optional instance to populate.
     * @return {module:model/CustomerProfileIntegrationRequestV2} The populated <code>CustomerProfileIntegrationRequestV2</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    attributes: any;
    responseContent: any;
}
declare namespace CustomerProfileIntegrationRequestV2 {
    namespace ResponseContentEnum {
        const customerProfile: string;
        const triggeredCampaigns: string;
        const loyalty: string;
        const event: string;
    }
}
