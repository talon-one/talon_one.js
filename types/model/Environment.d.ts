export default Environment;
/**
 * The Environment model module.
 * @module model/Environment
 * @version 4.2.0
 */
declare class Environment {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, applicationId: any, slots: any, functions: any, templates: any, variables: any): void;
    /**
     * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment} obj Optional instance to populate.
     * @return {module:model/Environment} The populated <code>Environment</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Environment</code>.
     *
     * @alias module:model/Environment
     * @param id {Number} Unique ID for this entity.
     * @param created {Date} The exact moment this entity was created.
     * @param applicationId {Number} The ID of the application that owns this entity.
     * @param slots {Array.<module:model/SlotDef>} The slots defined for this application.
     * @param functions {Array.<module:model/FunctionDef>} The functions defined for this application.
     * @param templates {Array.<module:model/TemplateDef>} The templates defined for this application.
     * @param variables {String}
     */
    constructor(id: number, created: Date, applicationId: number, slots: Array<any>, functions: Array<any>, templates: Array<any>, variables: string);
    id: any;
    created: any;
    applicationId: any;
    slots: any;
    functions: any;
    templates: any;
    variables: any;
}
