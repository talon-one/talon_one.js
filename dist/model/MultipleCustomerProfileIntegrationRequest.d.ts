export default MultipleCustomerProfileIntegrationRequest;
/**
 * The MultipleCustomerProfileIntegrationRequest model module.
 * @module model/MultipleCustomerProfileIntegrationRequest
 * @version 4.2.0
 */
declare class MultipleCustomerProfileIntegrationRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationRequest} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationRequest} The populated <code>MultipleCustomerProfileIntegrationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    customerProfiles: any;
}
