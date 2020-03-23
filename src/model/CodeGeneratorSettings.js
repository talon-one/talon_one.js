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
 * The CodeGeneratorSettings model module.
 * @module model/CodeGeneratorSettings
 * @version 1.0.0
 */
class CodeGeneratorSettings {
    /**
     * Constructs a new <code>CodeGeneratorSettings</code>.
     * @alias module:model/CodeGeneratorSettings
     * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
     * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
     */
    constructor(validCharacters, couponPattern) { 
        
        CodeGeneratorSettings.initialize(this, validCharacters, couponPattern);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, validCharacters, couponPattern) { 
        obj['validCharacters'] = validCharacters;
        obj['couponPattern'] = couponPattern;
    }

    /**
     * Constructs a <code>CodeGeneratorSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeGeneratorSettings} obj Optional instance to populate.
     * @return {module:model/CodeGeneratorSettings} The populated <code>CodeGeneratorSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeGeneratorSettings();

            if (data.hasOwnProperty('validCharacters')) {
                obj['validCharacters'] = ApiClient.convertToType(data['validCharacters'], ['String']);
            }
            if (data.hasOwnProperty('couponPattern')) {
                obj['couponPattern'] = ApiClient.convertToType(data['couponPattern'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
 * @member {Array.<String>} validCharacters
 */
CodeGeneratorSettings.prototype['validCharacters'] = undefined;

/**
 * The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
 * @member {String} couponPattern
 */
CodeGeneratorSettings.prototype['couponPattern'] = undefined;






export default CodeGeneratorSettings;

