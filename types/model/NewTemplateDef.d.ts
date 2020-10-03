export default NewTemplateDef;
/**
 * The NewTemplateDef model module.
 * @module model/NewTemplateDef
 * @version 4.2.0
 */
declare class NewTemplateDef {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, category: any, expr: any, args: any): void;
    /**
     * Constructs a <code>NewTemplateDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewTemplateDef} obj Optional instance to populate.
     * @return {module:model/NewTemplateDef} The populated <code>NewTemplateDef</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>NewTemplateDef</code>.
     * @alias module:model/NewTemplateDef
     * @param title {String} Campaigner-friendly name for the template that will be shown in the rule editor.
     * @param category {String} Used for grouping templates in the rule editor sidebar.
     * @param expr {Array.<Object>} A Talang expression that contains variable bindings referring to args.
     * @param args {Array.<module:model/TemplateArgDef>} An array of argument definitions.
     */
    constructor(title: string, category: string, expr: Array<any>, args: Array<any>);
    title: any;
    description: any;
    help: any;
    category: any;
    expr: any;
    args: any;
    expose: boolean;
}
