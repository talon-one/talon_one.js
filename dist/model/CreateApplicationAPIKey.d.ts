export default CreateApplicationAPIKey;
/**
 * The CreateApplicationAPIKey model module.
 * @module model/CreateApplicationAPIKey
 * @version 4.2.0
 */
declare class CreateApplicationAPIKey {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, expires: any): void;
    /**
     * Constructs a <code>CreateApplicationAPIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateApplicationAPIKey} obj Optional instance to populate.
     * @return {module:model/CreateApplicationAPIKey} The populated <code>CreateApplicationAPIKey</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CreateApplicationAPIKey</code>.
     * @alias module:model/CreateApplicationAPIKey
     * @param title {String} Title for API Key
     * @param expires {Date} The date the API key expired
     */
    constructor(title: string, expires: Date);
    title: any;
    expires: any;
    platform: any;
}
declare namespace CreateApplicationAPIKey {
    namespace PlatformEnum {
        const none: string;
        const segment: string;
        const braze: string;
        const mparticle: string;
    }
}
