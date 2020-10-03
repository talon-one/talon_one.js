export default ApplicationAPIKey;
/**
 * The ApplicationAPIKey model module.
 * @module model/ApplicationAPIKey
 * @version 4.2.0
 */
declare class ApplicationAPIKey {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, expires: any, id: any, createdBy: any, accountID: any, applicationID: any, created: any): void;
    /**
     * Constructs a <code>ApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/ApplicationAPIKey} The populated <code>ApplicationAPIKey</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationAPIKey</code>.
     *
     * @alias module:model/ApplicationAPIKey
     * @param title {String} Title for API Key
     * @param expires {Date} The date the API key expired
     * @param id {Number} ID of the API Key
     * @param createdBy {Number} ID of user who created
     * @param accountID {Number} ID of account the key is used for
     * @param applicationID {Number} ID of application the key is used for
     * @param created {Date} The date the API key was created
     */
    constructor(title: string, expires: Date, id: number, createdBy: number, accountID: number, applicationID: number, created: Date);
    title: any;
    expires: any;
    platform: any;
    id: any;
    createdBy: any;
    accountID: any;
    applicationID: any;
    created: any;
}
declare namespace ApplicationAPIKey {
    namespace PlatformEnum {
        const none: string;
        const segment: string;
        const braze: string;
        const mparticle: string;
    }
}
