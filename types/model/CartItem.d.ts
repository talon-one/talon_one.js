export default CartItem;
/**
 * The CartItem model module.
 * @module model/CartItem
 * @version 4.2.0
 */
declare class CartItem {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, sku: any, quantity: any, price: any): void;
    /**
     * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CartItem} obj Optional instance to populate.
     * @return {module:model/CartItem} The populated <code>CartItem</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>CartItem</code>.
     * @alias module:model/CartItem
     * @param name {String}
     * @param sku {String}
     * @param quantity {Number}
     * @param price {Number}
     */
    constructor(name: string, sku: string, quantity: number, price: number);
    name: any;
    sku: any;
    quantity: any;
    price: any;
    category: any;
    weight: any;
    height: any;
    width: any;
    length: any;
    position: any;
    attributes: any;
    adjustment: any;
}
