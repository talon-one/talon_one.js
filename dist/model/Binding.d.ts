export default Binding;
/**
 * The Binding model module.
 * @module model/Binding
 * @version 4.2.0
 */
declare class Binding {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, expression: any): void;
    /**
     * Constructs a <code>Binding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Binding} obj Optional instance to populate.
     * @return {module:model/Binding} The populated <code>Binding</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Binding</code>.
     * @alias module:model/Binding
     * @param name {String} A descriptive name for the value to be bound.
     * @param expression {Array.<Object>} A Talang expression that will be evaluated and its result attached to the name of the binding.
     */
    constructor(name: string, expression: Array<any>);
    name: any;
    expression: any;
}
