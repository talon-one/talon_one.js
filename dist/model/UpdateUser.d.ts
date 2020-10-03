export default UpdateUser;
/**
 * The UpdateUser model module.
 * @module model/UpdateUser
 * @version 4.2.0
 */
declare class UpdateUser {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>UpdateUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUser} obj Optional instance to populate.
     * @return {module:model/UpdateUser} The populated <code>UpdateUser</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    name: any;
    policy: any;
    state: any;
    roles: any;
    applicationNotificationSubscriptions: any;
}
declare namespace UpdateUser {
    namespace StateEnum {
        const deactivated: string;
        const active: string;
    }
}
