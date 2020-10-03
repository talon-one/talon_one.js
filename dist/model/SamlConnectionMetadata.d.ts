export default SamlConnectionMetadata;
/**
 * The SamlConnectionMetadata model module.
 * @module model/SamlConnectionMetadata
 * @version 4.2.0
 */
declare class SamlConnectionMetadata {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, enabled: any, accountId: any, metadataDocument: any): void;
    /**
     * Constructs a <code>SamlConnectionMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SamlConnectionMetadata} obj Optional instance to populate.
     * @return {module:model/SamlConnectionMetadata} The populated <code>SamlConnectionMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SamlConnectionMetadata</code>.
     * @alias module:model/SamlConnectionMetadata
     * @param name {String} ID of the SAML service.
     * @param enabled {Boolean} Determines if this SAML connection active.
     * @param accountId {Number}
     * @param metadataDocument {String} Identity Provider metadata XML document.
     */
    constructor(name: string, enabled: boolean, accountId: number, metadataDocument: string);
    name: any;
    enabled: any;
    accountId: any;
    metadataDocument: any;
}
