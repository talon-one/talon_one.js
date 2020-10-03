export default Loyalty;
/**
 * The Loyalty model module.
 * @module model/Loyalty
 * @version 4.2.0
 */
declare class Loyalty {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, programs: any): void;
    /**
     * Constructs a <code>Loyalty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Loyalty} obj Optional instance to populate.
     * @return {module:model/Loyalty} The populated <code>Loyalty</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>Loyalty</code>.
     * Customer specific information about loyalty points.
     * @alias module:model/Loyalty
     * @param programs {Object.<String, module:model/LoyaltyProgramLedgers>} A map holding information about the loyalty programs balance
     */
    constructor(programs: any);
    programs: any;
}
