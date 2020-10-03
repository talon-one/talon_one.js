export default NewFeatureFlags;
/**
 * The NewFeatureFlags model module.
 * @module model/NewFeatureFlags
 * @version 4.2.0
 */
declare class NewFeatureFlags {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>NewFeatureFlags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewFeatureFlags} obj Optional instance to populate.
     * @return {module:model/NewFeatureFlags} The populated <code>NewFeatureFlags</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    loyalty: any;
    coupons_without_count: any;
    betaEffects: any;
}
