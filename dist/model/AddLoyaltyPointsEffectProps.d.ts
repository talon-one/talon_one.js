export default AddLoyaltyPointsEffectProps;
/**
 * The AddLoyaltyPointsEffectProps model module.
 * @module model/AddLoyaltyPointsEffectProps
 * @version 4.2.0
 */
declare class AddLoyaltyPointsEffectProps {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, programId: any, subLedgerId: any, value: any, recipientIntegrationId: any): void;
    /**
     * Constructs a <code>AddLoyaltyPointsEffectProps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddLoyaltyPointsEffectProps} obj Optional instance to populate.
     * @return {module:model/AddLoyaltyPointsEffectProps} The populated <code>AddLoyaltyPointsEffectProps</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>AddLoyaltyPointsEffectProps</code>.
     * The properties specific to the \&quot;addLoyaltyPoints\&quot; effect. This gets triggered whenever a validated rule contained an \&quot;add loyalty\&quot; effect. These points are automatically stored and managed inside Talon.One.
     * @alias module:model/AddLoyaltyPointsEffectProps
     * @param name {String} The name/description of this loyalty point addition
     * @param programId {Number} The ID of the loyalty program where these points were added
     * @param subLedgerId {String} The ID of the subledger within the loyalty program where these points were added
     * @param value {Number} The amount of points that were added
     * @param recipientIntegrationId {String} The user for whom these points were added
     */
    constructor(name: string, programId: number, subLedgerId: string, value: number, recipientIntegrationId: string);
    name: any;
    programId: any;
    subLedgerId: any;
    value: any;
    recipientIntegrationId: any;
    startDate: any;
    expiryDate: any;
}
