export default LibraryAttribute;
/**
 * The LibraryAttribute model module.
 * @module model/LibraryAttribute
 * @version 4.2.0
 */
declare class LibraryAttribute {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, entity: any, name: any, title: any, type: any, description: any, presets: any, suggestions: any): void;
    /**
     * Constructs a <code>LibraryAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LibraryAttribute} obj Optional instance to populate.
     * @return {module:model/LibraryAttribute} The populated <code>LibraryAttribute</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>LibraryAttribute</code>.
     *
     * @alias module:model/LibraryAttribute
     * @param entity {module:model/LibraryAttribute.EntityEnum} The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
     * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload.
     * @param title {String} The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
     * @param type {module:model/LibraryAttribute.TypeEnum} The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
     * @param description {String} A description of the attribute.
     * @param presets {Array.<String>} The presets that indicate to which industry the attribute applies to.
     * @param suggestions {Array.<String>} Short suggestions that are used to group attributes.
     */
    constructor(entity: any, name: string, title: string, type: any, description: string, presets: Array<string>, suggestions: Array<string>);
    entity: any;
    name: any;
    title: any;
    type: any;
    description: any;
    presets: any;
    suggestions: any;
}
declare namespace LibraryAttribute {
    namespace EntityEnum {
        const Application: string;
        const Campaign: string;
        const CustomerProfile: string;
        const CustomerSession: string;
        const CartItem: string;
        const Coupon: string;
        const Event: string;
    }
    namespace TypeEnum {
        const string: string;
        const number: string;
        const boolean: string;
        const time: string;
    }
}
