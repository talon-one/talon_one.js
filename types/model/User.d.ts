export default User;
/**
 * The User model module.
 * @module model/User
 * @version 4.2.0
 */
declare class User {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, modified: any, email: any, accountId: any, inviteToken: any, state: any, name: any, policy: any): void;
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>User</code>.
     *
     * @alias module:model/User
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param modified {Date} The exact moment this entity was last modified.
     * @param email {String} The email address associated with your account.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param inviteToken {String} Invite token, empty if the user as already accepted their invite.
     * @param state {module:model/User.StateEnum} Current user state.
     * @param name {String} Full name
     * @param policy {Object} User ACL Policy
     */
    constructor(id: number, created: Date, modified: Date, email: string, accountId: number, inviteToken: string, state: any, name: string, policy: any);
    id: any;
    created: any;
    modified: any;
    email: any;
    accountId: any;
    inviteToken: any;
    state: any;
    name: any;
    policy: any;
    latestFeedTimestamp: any;
    roles: any;
    applicationNotificationSubscriptions: any;
    authMethod: any;
}
declare namespace User {
    namespace StateEnum {
        const invited: string;
        const active: string;
        const deactivated: string;
    }
}
