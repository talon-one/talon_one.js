export default TemplateDef;
/**
 * The TemplateDef model module.
 * @module model/TemplateDef
 * @version 4.2.0
 */
declare class TemplateDef {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, applicationId: any, title: any, description: any, help: any, category: any, expr: any, args: any, name: any): void;
    /**
     * Constructs a <code>TemplateDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDef} obj Optional instance to populate.
     * @return {module:model/TemplateDef} The populated <code>TemplateDef</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>TemplateDef</code>.
     *
     * @alias module:model/TemplateDef
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param title {String} Campaigner-friendly name for the template that will be shown in the rule editor.
     * @param description {String} A short description of the template that will be shown in the rule editor.
     * @param help {String} Extended help text for the template.
     * @param category {String} Used for grouping templates in the rule editor sidebar.
     * @param expr {Array.<Object>} A Talang expression that contains variable bindings referring to args.
     * @param args {Array.<module:model/TemplateArgDef>} An array of argument definitions.
     * @param name {String} The template name used in Talang.
     */
    constructor(id: number, created: Date, applicationId: number, title: string, description: string, help: string, category: string, expr: Array<any>, args: Array<any>, name: string);
    id: any;
    created: any;
    applicationId: any;
    title: any;
    description: any;
    help: any;
    category: any;
    expr: any;
    args: any;
    expose: boolean;
    name: any;
}
