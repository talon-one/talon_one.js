export default AdditionalCost;
/**
 * The AdditionalCost model module.
 * @module model/AdditionalCost
 * @version 4.2.0
 */
declare class AdditionalCost {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, price: any): void;
    /**
     * Constructs a <code>AdditionalCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalCost} obj Optional instance to populate.
     * @return {module:model/AdditionalCost} The populated <code>AdditionalCost</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AdditionalCost</code>.
     * @alias module:model/AdditionalCost
     * @param price {Number}
     */
    constructor(price: number);
    price: any;
}
