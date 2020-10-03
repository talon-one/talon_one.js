export default SamlConnection;
/**
 * The SamlConnection model module.
 * @module model/SamlConnection
 * @version 4.2.0
 */
declare class SamlConnection {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, assertionConsumerServiceURL: any, accountId: any, name: any, enabled: any, issuer: any, signOnURL: any, audienceURI: any, id: any, created: any): void;
    /**
     * Constructs a <code>SamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlConnection} obj Optional instance to populate.
     * @return {module:model/SamlConnection} The populated <code>SamlConnection</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SamlConnection</code>.
     *
     * @alias module:model/SamlConnection
     * @param assertionConsumerServiceURL {String} The location where the SAML assertion is sent with a HTTP POST.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} ID of the SAML service.
     * @param enabled {Boolean} Determines if this SAML connection active.
     * @param issuer {String} Identity Provider Entity ID.
     * @param signOnURL {String} Single Sign-On URL.
     * @param audienceURI {String} The application-defined unique identifier that is the intended audience of the SAML assertion. This is most often the SP Entity ID of your application. When not specified, the ACS URL will be used.
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     */
    constructor(assertionConsumerServiceURL: string, accountId: number, name: string, enabled: boolean, issuer: string, signOnURL: string, audienceURI: string, id: number, created: Date);
    assertionConsumerServiceURL: any;
    accountId: any;
    name: any;
    enabled: any;
    issuer: any;
    signOnURL: any;
    signOutURL: any;
    metadataURL: any;
    audienceURI: any;
    id: any;
    created: any;
}
