export default ApplicationApiHealth;
/**
 * The ApplicationApiHealth model module.
 * @module model/ApplicationApiHealth
 * @version 4.2.0
 */
declare class ApplicationApiHealth {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, summary: any, lastUsed: any): void;
    /**
     * Constructs a <code>ApplicationApiHealth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationApiHealth} obj Optional instance to populate.
     * @return {module:model/ApplicationApiHealth} The populated <code>ApplicationApiHealth</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Constructs a new <code>ApplicationApiHealth</code>.
     * Report of health of the API connection of an application
     * @alias module:model/ApplicationApiHealth
     * @param summary {module:model/ApplicationApiHealth.SummaryEnum} One-word summary of the health of the API connection of an application
     * @param lastUsed {Date} time of last request relevant to the API health test
     */
    constructor(summary: any, lastUsed: Date);
    summary: any;
    lastUsed: any;
}
declare namespace ApplicationApiHealth {
    namespace SummaryEnum {
        const OK: string;
        const WARNING: string;
        const ERROR: string;
        const CRITICAL: string;
        const NONE: string;
    }
}
