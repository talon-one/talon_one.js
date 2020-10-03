export default FeatureFlag;
/**
 * The FeatureFlag model module.
 * @module model/FeatureFlag
 * @version 4.2.0
 */
declare class FeatureFlag {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, value: any): void;
    /**
     * Constructs a <code>FeatureFlag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureFlag} obj Optional instance to populate.
     * @return {module:model/FeatureFlag} The populated <code>FeatureFlag</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>FeatureFlag</code>.
     * @alias module:model/FeatureFlag
     * @param name {String} The name for the featureflag
     * @param value {String} The value for the featureflag
     */
    constructor(name: string, value: string);
    name: any;
    value: any;
    created: any;
    modified: any;
}
