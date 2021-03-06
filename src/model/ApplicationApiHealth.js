/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApplicationApiHealth model module.
 * @module model/ApplicationApiHealth
 * @version 4.3.0
 */
class ApplicationApiHealth {
    /**
     * Constructs a new <code>ApplicationApiHealth</code>.
     * Report of health of the API connection of an application
     * @alias module:model/ApplicationApiHealth
     * @param summary {module:model/ApplicationApiHealth.SummaryEnum} One-word summary of the health of the API connection of an application
     * @param lastUsed {Date} time of last request relevant to the API health test
     */
    constructor(summary, lastUsed) { 
        
        ApplicationApiHealth.initialize(this, summary, lastUsed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, summary, lastUsed) { 
        obj['summary'] = summary;
        obj['lastUsed'] = lastUsed;
    }

    /**
     * Constructs a <code>ApplicationApiHealth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationApiHealth} obj Optional instance to populate.
     * @return {module:model/ApplicationApiHealth} The populated <code>ApplicationApiHealth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationApiHealth();

            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('lastUsed')) {
                obj['lastUsed'] = ApiClient.convertToType(data['lastUsed'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * One-word summary of the health of the API connection of an application
 * @member {module:model/ApplicationApiHealth.SummaryEnum} summary
 */
ApplicationApiHealth.prototype['summary'] = undefined;

/**
 * time of last request relevant to the API health test
 * @member {Date} lastUsed
 */
ApplicationApiHealth.prototype['lastUsed'] = undefined;





/**
 * Allowed values for the <code>summary</code> property.
 * @enum {String}
 * @readonly
 */
ApplicationApiHealth['SummaryEnum'] = {

    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",

    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING",

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",

    /**
     * value: "CRITICAL"
     * @const
     */
    "CRITICAL": "CRITICAL",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};



export default ApplicationApiHealth;

