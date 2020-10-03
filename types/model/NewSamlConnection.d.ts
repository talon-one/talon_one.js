export default NewSamlConnection;
/**
 * The NewSamlConnection model module.
 * @module model/NewSamlConnection
 * @version 4.2.0
 */
declare class NewSamlConnection {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, x509certificate: any, accountId: any, name: any, enabled: any, issuer: any, signOnURL: any): void;
    /**
     * Constructs a <code>NewSamlConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewSamlConnection} obj Optional instance to populate.
     * @return {module:model/NewSamlConnection} The populated <code>NewSamlConnection</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewSamlConnection</code>.
     *
     * @alias module:model/NewSamlConnection
     * @param x509certificate {String} X.509 Certificate.
     * @param accountId {Number} The ID of the account that owns this entity.
     * @param name {String} ID of the SAML service.
     * @param enabled {Boolean} Determines if this SAML connection active.
     * @param issuer {String} Identity Provider Entity ID.
     * @param signOnURL {String} Single Sign-On URL.
     */
    constructor(x509certificate: string, accountId: number, name: string, enabled: boolean, issuer: string, signOnURL: string);
    x509certificate: any;
    accountId: any;
    name: any;
    enabled: any;
    issuer: any;
    signOnURL: any;
    signOutURL: any;
    metadataURL: any;
    audienceURI: any;
}
