export default UpdateUserLatestFeedTimestamp;
/**
 * The UpdateUserLatestFeedTimestamp model module.
 * @module model/UpdateUserLatestFeedTimestamp
 * @version 4.2.0
 */
declare class UpdateUserLatestFeedTimestamp {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, newLatestFeedTimestamp: any): void;
    /**
     * Constructs a <code>UpdateUserLatestFeedTimestamp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserLatestFeedTimestamp} obj Optional instance to populate.
     * @return {module:model/UpdateUserLatestFeedTimestamp} The populated <code>UpdateUserLatestFeedTimestamp</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>UpdateUserLatestFeedTimestamp</code>.
     * Updates current user&#39;s latest seen notifications timestamp
     * @alias module:model/UpdateUserLatestFeedTimestamp
     * @param newLatestFeedTimestamp {Date} New timestamp to update for the current user
     */
    constructor(newLatestFeedTimestamp: Date);
    newLatestFeedTimestamp: any;
}
