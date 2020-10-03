export default MultipleCustomerProfileIntegrationResponseV2;
/**
 * The MultipleCustomerProfileIntegrationResponseV2 model module.
 * @module model/MultipleCustomerProfileIntegrationResponseV2
 * @version 4.2.0
 */
declare class MultipleCustomerProfileIntegrationResponseV2 {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>MultipleCustomerProfileIntegrationResponseV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipleCustomerProfileIntegrationResponseV2} obj Optional instance to populate.
     * @return {module:model/MultipleCustomerProfileIntegrationResponseV2} The populated <code>MultipleCustomerProfileIntegrationResponseV2</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    integrationStates: any;
}
