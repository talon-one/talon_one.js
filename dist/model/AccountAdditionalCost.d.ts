export default AccountAdditionalCost;
/**
 * The AccountAdditionalCost model module.
 * @module model/AccountAdditionalCost
 * @version 4.2.0
 */
declare class AccountAdditionalCost {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, accountId: any, name: any, title: any, description: any): void;
    /**
     * Constructs a <code>AccountAdditionalCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAdditionalCost} obj Optional instance to populate.
     * @return {module:model/AccountAdditionalCost} The populated <code>AccountAdditionalCost</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AccountAdditionalCost</code>.
     *
     * @alias module:model/AccountAdditionalCost
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} The additional cost name that will be used in API requests and Talang. E.g. if `name == \"shipping\"` then you would set the shipping additional cost by including an `additionalCosts.shipping` property in your request payload.
     * @param title {String} The human-readable name for the additional cost that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
     * @param description {String} A description of this additional cost.
     */
    constructor(id: number, created: Date, accountId: number, name: string, title: string, description: string);
    id: any;
    created: any;
    accountId: any;
    name: any;
    title: any;
    description: any;
    subscribedApplicationsIds: any;
}
