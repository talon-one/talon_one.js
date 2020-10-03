export default NewApplicationAPIKey;
/**
 * The NewApplicationAPIKey model module.
 * @module model/NewApplicationAPIKey
 * @version 4.2.0
 */
declare class NewApplicationAPIKey {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, expires: any, id: any, createdBy: any, accountID: any, applicationID: any, created: any, key: any): void;
    /**
     * Constructs a <code>NewApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/NewApplicationAPIKey} The populated <code>NewApplicationAPIKey</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewApplicationAPIKey</code>.
     *
     * @alias module:model/NewApplicationAPIKey
     * @param title {String} Title for API Key
     * @param expires {Date} The date the API key expired
     * @param id {Number} ID of the API Key
     * @param createdBy {Number} ID of user who created
     * @param accountID {Number} ID of account the key is used for
     * @param applicationID {Number} ID of application the key is used for
     * @param created {Date} The date the API key was created
     * @param key {String} Raw API Key
     */
    constructor(title: string, expires: Date, id: number, createdBy: number, accountID: number, applicationID: number, created: Date, key: string);
    title: any;
    expires: any;
    platform: any;
    id: any;
    createdBy: any;
    accountID: any;
    applicationID: any;
    created: any;
    key: any;
}
declare namespace NewApplicationAPIKey {
    namespace PlatformEnum {
        const none: string;
        const segment: string;
        const braze: string;
        const mparticle: string;
    }
}
