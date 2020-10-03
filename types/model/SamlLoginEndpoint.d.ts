export default SamlLoginEndpoint;
/**
 * The SamlLoginEndpoint model module.
 * @module model/SamlLoginEndpoint
 * @version 4.2.0
 */
declare class SamlLoginEndpoint {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, loginURL: any): void;
    /**
     * Constructs a <code>SamlLoginEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlLoginEndpoint} obj Optional instance to populate.
     * @return {module:model/SamlLoginEndpoint} The populated <code>SamlLoginEndpoint</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SamlLoginEndpoint</code>.
     * @alias module:model/SamlLoginEndpoint
     * @param name {String} ID of the SAML service.
     * @param loginURL {String} Single Sign-On URL.
     */
    constructor(name: string, loginURL: string);
    name: any;
    loginURL: any;
}
