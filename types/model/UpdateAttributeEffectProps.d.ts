export default UpdateAttributeEffectProps;
/**
 * The UpdateAttributeEffectProps model module.
 * @module model/UpdateAttributeEffectProps
 * @version 4.2.0
 */
declare class UpdateAttributeEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, path: any, value: any): void;
    /**
     * Constructs a <code>UpdateAttributeEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAttributeEffectProps} obj Optional instance to populate.
     * @return {module:model/UpdateAttributeEffectProps} The populated <code>UpdateAttributeEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateAttributeEffectProps</code>.
     * The properties specific to the \&quot;updateAttribute\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;update an attribute\&quot; effect.
     * @alias module:model/UpdateAttributeEffectProps
     * @param path {String} The exact path of the attribute that was updated
     * @param value {Object} The new value of this attribute. Value can be any of the following types (time, string, number, location, boolean) or a list of any of those types
     */
    constructor(path: string, value: any);
    path: any;
    value: any;
}
