export default TemplateArgDef;
/**
 * The TemplateArgDef model module.
 * @module model/TemplateArgDef
 * @version 4.2.0
 */
declare class TemplateArgDef {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, description: any, title: any, ui: any): void;
    /**
     * Constructs a <code>TemplateArgDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateArgDef} obj Optional instance to populate.
     * @return {module:model/TemplateArgDef} The populated <code>TemplateArgDef</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>TemplateArgDef</code>.
     *
     * @alias module:model/TemplateArgDef
     * @param type {module:model/TemplateArgDef.TypeEnum} The type of value this argument expects.
     * @param description {String} A campaigner-friendly description of the argument, this will also be shown in the rule editor.
     * @param title {String} A campaigner friendly name for the argument, this will be shown in the rule editor.
     * @param ui {Object} Arbitrary metadata that may be used to render an input for this argument.
     */
    constructor(type: any, description: string, title: string, ui: any);
    type: any;
    description: any;
    title: any;
    ui: any;
}
declare namespace TemplateArgDef {
    namespace TypeEnum {
        const string: string;
        const boolean: string;
        const number: string;
        const time: string;
    }
}
