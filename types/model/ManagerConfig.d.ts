export default ManagerConfig;
/**
 * The ManagerConfig model module.
 * @module model/ManagerConfig
 * @version 4.2.0
 */
declare class ManagerConfig {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, schemaVersion: any): void;
    /**
     * Constructs a <code>ManagerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManagerConfig} obj Optional instance to populate.
     * @return {module:model/ManagerConfig} The populated <code>ManagerConfig</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ManagerConfig</code>.
     * @alias module:model/ManagerConfig
     * @param schemaVersion {Number}
     */
    constructor(schemaVersion: number);
    schemaVersion: any;
}
