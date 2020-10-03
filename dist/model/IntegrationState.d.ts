export default IntegrationState;
/**
 * The IntegrationState model module.
 * @module model/IntegrationState
 * @version 4.2.0
 */
declare class IntegrationState {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, session: any, profile: any, event: any): void;
    /**
     * Constructs a <code>IntegrationState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntegrationState} obj Optional instance to populate.
     * @return {module:model/IntegrationState} The populated <code>IntegrationState</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>IntegrationState</code>.
     * Contains all state that might interest application integration plugins. This is the response type returned by all of the Integration API operations.
     * @alias module:model/IntegrationState
     * @param session {module:model/CustomerSession}
     * @param profile {module:model/CustomerProfile}
     * @param event {module:model/Event}
     */
    constructor(session: any, profile: any, event: any);
    session: any;
    profile: any;
    event: any;
    loyalty: any;
    coupon: any;
}
