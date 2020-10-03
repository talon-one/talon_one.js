export default CustomerProfileAudienceRequestItem;
/**
 * The CustomerProfileAudienceRequestItem model module.
 * @module model/CustomerProfileAudienceRequestItem
 * @version 4.2.0
 */
declare class CustomerProfileAudienceRequestItem {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, action: any, profileIntegrationId: any, audienceId: any): void;
    /**
     * Constructs a <code>CustomerProfileAudienceRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerProfileAudienceRequestItem} obj Optional instance to populate.
     * @return {module:model/CustomerProfileAudienceRequestItem} The populated <code>CustomerProfileAudienceRequestItem</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CustomerProfileAudienceRequestItem</code>.
     * @alias module:model/CustomerProfileAudienceRequestItem
     * @param action {module:model/CustomerProfileAudienceRequestItem.ActionEnum}
     * @param profileIntegrationId {String}
     * @param audienceId {Number}
     */
    constructor(action: any, profileIntegrationId: string, audienceId: number);
    action: any;
    profileIntegrationId: any;
    audienceId: any;
}
declare namespace CustomerProfileAudienceRequestItem {
    namespace ActionEnum {
        export const add: string;
        const _delete: string;
        export { _delete as delete };
    }
}
