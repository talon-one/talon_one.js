export default SlotDef;
/**
 * The SlotDef model module.
 * @module model/SlotDef
 * @version 4.2.0
 */
declare class SlotDef {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, type: any, title: any, writable: any): void;
    /**
     * Constructs a <code>SlotDef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlotDef} obj Optional instance to populate.
     * @return {module:model/SlotDef} The populated <code>SlotDef</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>SlotDef</code>.
     * @alias module:model/SlotDef
     * @param name {String} The dot-separated path to this slot for use in Talang.
     * @param type {String} The type of this slot, one of string, number, boolean, or list[type].
     * @param title {String} Campaigner-friendly name for the slot.
     * @param writable {Boolean} Whether or not this slot can be updated by rule effects.
     */
    constructor(name: string, type: string, title: string, writable: boolean);
    name: any;
    type: any;
    title: any;
    description: any;
    help: any;
    writable: any;
}
