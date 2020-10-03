export default NewAttribute;
/**
 * The NewAttribute model module.
 * @module model/NewAttribute
 * @version 4.2.0
 */
declare class NewAttribute {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, entity: any, name: any, title: any, type: any, description: any, suggestions: any, editable: any): void;
    /**
     * Constructs a <code>NewAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewAttribute} obj Optional instance to populate.
     * @return {module:model/NewAttribute} The populated <code>NewAttribute</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewAttribute</code>.
     *
     * @alias module:model/NewAttribute
     * @param entity {module:model/NewAttribute.EntityEnum} The name of the entity that can have this attribute. When creating or updating the entities of a given type, you can include an `attributes` object with keys corresponding to the `name` of the custom attributes for that type.
     * @param name {String} The attribute name that will be used in API requests and Talang. E.g. if `name == \"region\"` then you would set the region attribute by including an `attributes.region` property in your request payload.
     * @param title {String} The human-readable name for the attribute that will be shown in the Campaign Manager. Like `name`, the combination of entity and title must also be unique.
     * @param type {module:model/NewAttribute.TypeEnum} The data type of the attribute, a `time` attribute must be sent as a string that conforms to the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp format.
     * @param description {String} A description of this attribute.
     * @param suggestions {Array.<String>} A list of suggestions for the attribute.
     * @param editable {Boolean} Whether or not this attribute can be edited.
     */
    constructor(entity: any, name: string, title: string, type: any, description: string, suggestions: Array<string>, editable: boolean);
    entity: any;
    eventType: any;
    name: any;
    title: any;
    type: any;
    description: any;
    suggestions: any;
    editable: any;
    subscribedApplicationsIds: any;
}
declare namespace NewAttribute {
    namespace EntityEnum {
        const Account: string;
        const Application: string;
        const Campaign: string;
        const CustomerProfile: string;
        const CustomerSession: string;
        const CartItem: string;
        const Coupon: string;
        const Event: string;
    }
    const TypeEnum: {
        /**
         * value: "string"
         * @const
         */
        string: string;
        /**
         * value: "number"
         * @const
         */
        number: string;
        /**
         * value: "boolean"
         * @const
         */
        boolean: string;
        /**
         * value: "time"
         * @const
         */
        time: string;
        /**
         * value: "(list string)"
         * @const
         */
        "(list string)": string;
        /**
         * value: "(list number)"
         * @const
         */
        "(list number)": string;
        /**
         * value: "(list time)"
         * @const
         */
        "(list time)": string;
        /**
         * value: "location"
         * @const
         */
        location: string;
        /**
         * value: "(list location)"
         * @const
         */
        "(list location)": string;
    };
}
