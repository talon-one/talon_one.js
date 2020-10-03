export default IntegrationRequest;
/**
 * The IntegrationRequest model module.
 * @module model/IntegrationRequest
 * @version 4.2.0
 */
declare class IntegrationRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, customerSession: any): void;
    /**
     * Constructs a <code>IntegrationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationRequest} obj Optional instance to populate.
     * @return {module:model/IntegrationRequest} The populated <code>IntegrationRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>IntegrationRequest</code>.
     * The body of a V2 integration API request (customer session update). Next to the customer session details, this contains an optional listing of extra properties that should be returned in the response.
     * @alias module:model/IntegrationRequest
     * @param customerSession {module:model/NewCustomerSessionV2}
     */
    constructor(customerSession: any);
    customerSession: any;
    responseContent: any;
}
declare namespace IntegrationRequest {
    namespace ResponseContentEnum {
        const customerSession: string;
        const customerProfile: string;
        const coupons: string;
        const triggeredCampaigns: string;
        const referral: string;
        const loyalty: string;
        const event: string;
    }
}
