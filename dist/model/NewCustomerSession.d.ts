export default NewCustomerSession;
/**
 * The NewCustomerSession model module.
 * @module model/NewCustomerSession
 * @version 4.2.0
 */
declare class NewCustomerSession {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>NewCustomerSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCustomerSession} obj Optional instance to populate.
     * @return {module:model/NewCustomerSession} The populated <code>NewCustomerSession</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    profileId: any;
    coupon: any;
    referral: any;
    state: string;
    cartItems: any;
    identifiers: any;
    total: any;
    attributes: any;
}
declare namespace NewCustomerSession {
    namespace StateEnum {
        const open: string;
        const closed: string;
        const cancelled: string;
    }
}
