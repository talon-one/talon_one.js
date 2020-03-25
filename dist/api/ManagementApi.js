"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("../model/Account"));

var _AccountAdditionalCost = _interopRequireDefault(require("../model/AccountAdditionalCost"));

var _AccountAnalytics = _interopRequireDefault(require("../model/AccountAnalytics"));

var _Application = _interopRequireDefault(require("../model/Application"));

var _ApplicationApiHealth = _interopRequireDefault(require("../model/ApplicationApiHealth"));

var _ApplicationCustomer = _interopRequireDefault(require("../model/ApplicationCustomer"));

var _ApplicationCustomerSearch = _interopRequireDefault(require("../model/ApplicationCustomerSearch"));

var _ApplicationSession = _interopRequireDefault(require("../model/ApplicationSession"));

var _Attribute = _interopRequireDefault(require("../model/Attribute"));

var _Campaign = _interopRequireDefault(require("../model/Campaign"));

var _CampaignCopy = _interopRequireDefault(require("../model/CampaignCopy"));

var _CampaignSearch = _interopRequireDefault(require("../model/CampaignSearch"));

var _CampaignSet = _interopRequireDefault(require("../model/CampaignSet"));

var _Coupon = _interopRequireDefault(require("../model/Coupon"));

var _CouponSearch = _interopRequireDefault(require("../model/CouponSearch"));

var _CustomerActivityReport = _interopRequireDefault(require("../model/CustomerActivityReport"));

var _CustomerAnalytics = _interopRequireDefault(require("../model/CustomerAnalytics"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20010"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse20011"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse20012"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse20013"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse20014"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse20015"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse20016"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse20017"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse20018"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse20019"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse20020"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse20021"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse20022"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse20023"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse20024"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse20025"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse20026"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse20027"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse20028"));

var _InlineResponse22 = _interopRequireDefault(require("../model/InlineResponse20029"));

var _InlineResponse23 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse24 = _interopRequireDefault(require("../model/InlineResponse20030"));

var _InlineResponse25 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse26 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse27 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _InlineResponse28 = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse29 = _interopRequireDefault(require("../model/InlineResponse2008"));

var _InlineResponse30 = _interopRequireDefault(require("../model/InlineResponse2009"));

var _LoginParams = _interopRequireDefault(require("../model/LoginParams"));

var _LoyaltyLedger = _interopRequireDefault(require("../model/LoyaltyLedger"));

var _LoyaltyPoints = _interopRequireDefault(require("../model/LoyaltyPoints"));

var _LoyaltyProgram = _interopRequireDefault(require("../model/LoyaltyProgram"));

var _NewAdditionalCost = _interopRequireDefault(require("../model/NewAdditionalCost"));

var _NewAttribute = _interopRequireDefault(require("../model/NewAttribute"));

var _NewCampaign = _interopRequireDefault(require("../model/NewCampaign"));

var _NewCampaignSet = _interopRequireDefault(require("../model/NewCampaignSet"));

var _NewCoupons = _interopRequireDefault(require("../model/NewCoupons"));

var _NewPassword = _interopRequireDefault(require("../model/NewPassword"));

var _NewPasswordEmail = _interopRequireDefault(require("../model/NewPasswordEmail"));

var _NewRuleset = _interopRequireDefault(require("../model/NewRuleset"));

var _Role = _interopRequireDefault(require("../model/Role"));

var _Ruleset = _interopRequireDefault(require("../model/Ruleset"));

var _Session = _interopRequireDefault(require("../model/Session"));

var _UpdateCampaign = _interopRequireDefault(require("../model/UpdateCampaign"));

var _UpdateCoupon = _interopRequireDefault(require("../model/UpdateCoupon"));

var _UpdateCouponBatch = _interopRequireDefault(require("../model/UpdateCouponBatch"));

var _User = _interopRequireDefault(require("../model/User"));

var _Webhook = _interopRequireDefault(require("../model/Webhook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Management service.
* @module api/ManagementApi
* @version 4.0.0
*/
var ManagementApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ManagementApi. 
  * @alias module:api/ManagementApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ManagementApi(apiClient) {
    _classCallCheck(this, ManagementApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Add points in a certain loyalty program for the specified customer
   * @param {String} programID 
   * @param {String} integrationID 
   * @param {module:model/LoyaltyPoints} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(ManagementApi, [{
    key: "addLoyaltyPointsWithHttpInfo",
    value: function addLoyaltyPointsWithHttpInfo(programID, integrationID, body) {
      var postBody = body; // verify the required parameter 'programID' is set

      if (programID === undefined || programID === null) {
        throw new Error("Missing the required parameter 'programID' when calling addLoyaltyPoints");
      } // verify the required parameter 'integrationID' is set


      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling addLoyaltyPoints");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addLoyaltyPoints");
      }

      var pathParams = {
        'programID': programID,
        'integrationID': integrationID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/loyalty_programs/{programID}/profile/{integrationID}/add_points', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add points in a certain loyalty program for the specified customer
     * @param {String} programID 
     * @param {String} integrationID 
     * @param {module:model/LoyaltyPoints} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "addLoyaltyPoints",
    value: function addLoyaltyPoints(programID, integrationID, body) {
      return this.addLoyaltyPointsWithHttpInfo(programID, integrationID, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Copy the campaign into every specified application
     * Copy the campaign into every specified application.
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/CampaignCopy} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "copyCampaignToApplicationsWithHttpInfo",
    value: function copyCampaignToApplicationsWithHttpInfo(applicationId, campaignId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling copyCampaignToApplications");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling copyCampaignToApplications");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling copyCampaignToApplications");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/copy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Copy the campaign into every specified application
     * Copy the campaign into every specified application.
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/CampaignCopy} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "copyCampaignToApplications",
    value: function copyCampaignToApplications(applicationId, campaignId, body) {
      return this.copyCampaignToApplicationsWithHttpInfo(applicationId, campaignId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Define a new additional cost
     * Defines a new _additional cost_ in this account.  These additional costs are shared across all applications in your account, and are never required. 
     * @param {module:model/NewAdditionalCost} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAdditionalCost} and HTTP response
     */

  }, {
    key: "createAdditionalCostWithHttpInfo",
    value: function createAdditionalCostWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAdditionalCost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountAdditionalCost["default"];
      return this.apiClient.callApi('/v1/additional_costs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Define a new additional cost
     * Defines a new _additional cost_ in this account.  These additional costs are shared across all applications in your account, and are never required. 
     * @param {module:model/NewAdditionalCost} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAdditionalCost}
     */

  }, {
    key: "createAdditionalCost",
    value: function createAdditionalCost(body) {
      return this.createAdditionalCostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Define a new custom attribute
     * Defines a new _custom attribute_ in this account. Custom attributes allow you to attach new fields to Talon.One domain objects like campaigns, coupons, customers and so on. These attributes can then be given values when creating / updating these objects, and these values can be used in your campaign rules. For example, you could define a `zipCode` field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all applications in your account, and are never required. 
     * @param {module:model/NewAttribute} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Attribute} and HTTP response
     */

  }, {
    key: "createAttributeWithHttpInfo",
    value: function createAttributeWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAttribute");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Attribute["default"];
      return this.apiClient.callApi('/v1/attributes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Define a new custom attribute
     * Defines a new _custom attribute_ in this account. Custom attributes allow you to attach new fields to Talon.One domain objects like campaigns, coupons, customers and so on. These attributes can then be given values when creating / updating these objects, and these values can be used in your campaign rules. For example, you could define a `zipCode` field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all applications in your account, and are never required. 
     * @param {module:model/NewAttribute} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attribute}
     */

  }, {
    key: "createAttribute",
    value: function createAttribute(body) {
      return this.createAttributeWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Campaign
     * @param {Number} applicationId 
     * @param {module:model/NewCampaign} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */

  }, {
    key: "createCampaignWithHttpInfo",
    value: function createCampaignWithHttpInfo(applicationId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createCampaign");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCampaign");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Campaign
     * @param {Number} applicationId 
     * @param {module:model/NewCampaign} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "createCampaign",
    value: function createCampaign(applicationId, body) {
      return this.createCampaignWithHttpInfo(applicationId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create Coupons
     * Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/NewCoupons} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the coupons generated (to to 1000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "createCouponsWithHttpInfo",
    value: function createCouponsWithHttpInfo(applicationId, campaignId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createCoupons");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling createCoupons");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCoupons");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'silent': opts['silent']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create Coupons
     * Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/NewCoupons} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.silent If set to 'yes', response will be an empty 204, otherwise a list of the coupons generated (to to 1000).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "createCoupons",
    value: function createCoupons(applicationId, campaignId, body, opts) {
      return this.createCouponsWithHttpInfo(applicationId, campaignId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Request a password reset
     * Sends an email with a password recovery link to the email of an existing account. 
     * @param {module:model/NewPasswordEmail} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewPasswordEmail} and HTTP response
     */

  }, {
    key: "createPasswordRecoveryEmailWithHttpInfo",
    value: function createPasswordRecoveryEmailWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPasswordRecoveryEmail");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NewPasswordEmail["default"];
      return this.apiClient.callApi('/v1/password_recovery_emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Request a password reset
     * Sends an email with a password recovery link to the email of an existing account. 
     * @param {module:model/NewPasswordEmail} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewPasswordEmail}
     */

  }, {
    key: "createPasswordRecoveryEmail",
    value: function createPasswordRecoveryEmail(body) {
      return this.createPasswordRecoveryEmailWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/NewRuleset} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ruleset} and HTTP response
     */

  }, {
    key: "createRulesetWithHttpInfo",
    value: function createRulesetWithHttpInfo(applicationId, campaignId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling createRuleset");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling createRuleset");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createRuleset");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Ruleset["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/rulesets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/NewRuleset} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ruleset}
     */

  }, {
    key: "createRuleset",
    value: function createRuleset(applicationId, campaignId, body) {
      return this.createRulesetWithHttpInfo(applicationId, campaignId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a Session
     * @param {module:model/LoginParams} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Session} and HTTP response
     */

  }, {
    key: "createSessionWithHttpInfo",
    value: function createSessionWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSession");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Session["default"];
      return this.apiClient.callApi('/v1/sessions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Session
     * @param {module:model/LoginParams} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Session}
     */

  }, {
    key: "createSession",
    value: function createSession(body) {
      return this.createSessionWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a Campaign
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCampaignWithHttpInfo",
    value: function deleteCampaignWithHttpInfo(applicationId, campaignId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteCampaign");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteCampaign");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Campaign
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCampaign",
    value: function deleteCampaign(applicationId, campaignId) {
      return this.deleteCampaignWithHttpInfo(applicationId, campaignId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete one Coupon
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {String} couponId The ID of the coupon code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCouponWithHttpInfo",
    value: function deleteCouponWithHttpInfo(applicationId, campaignId, couponId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteCoupon");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteCoupon");
      } // verify the required parameter 'couponId' is set


      if (couponId === undefined || couponId === null) {
        throw new Error("Missing the required parameter 'couponId' when calling deleteCoupon");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId,
        'couponId': couponId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete one Coupon
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {String} couponId The ID of the coupon code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCoupon",
    value: function deleteCoupon(applicationId, campaignId, couponId) {
      return this.deleteCouponWithHttpInfo(applicationId, campaignId, couponId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCouponsWithHttpInfo",
    value: function deleteCouponsWithHttpInfo(applicationId, campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteCoupons");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteCoupons");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'startsAfter': opts['startsAfter'],
        'startsBefore': opts['startsBefore'],
        'expiresAfter': opts['expiresAfter'],
        'expiresBefore': opts['expiresBefore'],
        'valid': opts['valid'],
        'batchId': opts['batchId'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'exactMatch': opts['exactMatch']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCoupons",
    value: function deleteCoupons(applicationId, campaignId, opts) {
      return this.deleteCouponsWithHttpInfo(applicationId, campaignId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete one Referral
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {String} referralId The ID of the referral code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteReferralWithHttpInfo",
    value: function deleteReferralWithHttpInfo(applicationId, campaignId, referralId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteReferral");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteReferral");
      } // verify the required parameter 'referralId' is set


      if (referralId === undefined || referralId === null) {
        throw new Error("Missing the required parameter 'referralId' when calling deleteReferral");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId,
        'referralId': referralId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete one Referral
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {String} referralId The ID of the referral code to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteReferral",
    value: function deleteReferral(applicationId, campaignId, referralId) {
      return this.deleteReferralWithHttpInfo(applicationId, campaignId, referralId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Number} rulesetId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteRulesetWithHttpInfo",
    value: function deleteRulesetWithHttpInfo(applicationId, campaignId, rulesetId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling deleteRuleset");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteRuleset");
      } // verify the required parameter 'rulesetId' is set


      if (rulesetId === undefined || rulesetId === null) {
        throw new Error("Missing the required parameter 'rulesetId' when calling deleteRuleset");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId,
        'rulesetId': rulesetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Number} rulesetId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteRuleset",
    value: function deleteRuleset(applicationId, campaignId, rulesetId) {
      return this.deleteRulesetWithHttpInfo(applicationId, campaignId, rulesetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get access logs for application
     * @param {Number} applicationId 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */

  }, {
    key: "getAccessLogsWithHttpInfo",
    value: function getAccessLogsWithHttpInfo(applicationId, rangeStart, rangeEnd, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getAccessLogs");
      } // verify the required parameter 'rangeStart' is set


      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getAccessLogs");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getAccessLogs");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'path': opts['path'],
        'method': opts['method'],
        'status': opts['status'],
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd,
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse30["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/access_logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get access logs for application
     * @param {Number} applicationId 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */

  }, {
    key: "getAccessLogs",
    value: function getAccessLogs(applicationId, rangeStart, rangeEnd, opts) {
      return this.getAccessLogsWithHttpInfo(applicationId, rangeStart, rangeEnd, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get access logs for application
     * @param {Number} applicationId 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20010} and HTTP response
     */

  }, {
    key: "getAccessLogsWithoutTotalCountWithHttpInfo",
    value: function getAccessLogsWithoutTotalCountWithHttpInfo(applicationId, rangeStart, rangeEnd, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getAccessLogsWithoutTotalCount");
      } // verify the required parameter 'rangeStart' is set


      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getAccessLogsWithoutTotalCount");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getAccessLogsWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'path': opts['path'],
        'method': opts['method'],
        'status': opts['status'],
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd,
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/access_logs/no_total', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get access logs for application
     * @param {Number} applicationId 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */

  }, {
    key: "getAccessLogsWithoutTotalCount",
    value: function getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, opts) {
      return this.getAccessLogsWithoutTotalCountWithHttpInfo(applicationId, rangeStart, rangeEnd, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Account Details
     * Return the details of your companies Talon.One account. 
     * @param {Number} accountId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Account} and HTTP response
     */

  }, {
    key: "getAccountWithHttpInfo",
    value: function getAccountWithHttpInfo(accountId) {
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccount");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Account["default"];
      return this.apiClient.callApi('/v1/accounts/{accountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Account Details
     * Return the details of your companies Talon.One account. 
     * @param {Number} accountId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Account}
     */

  }, {
    key: "getAccount",
    value: function getAccount(accountId) {
      return this.getAccountWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Account Analytics
     * Return the analytics of your companies Talon.One account. 
     * @param {Number} accountId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAnalytics} and HTTP response
     */

  }, {
    key: "getAccountAnalyticsWithHttpInfo",
    value: function getAccountAnalyticsWithHttpInfo(accountId) {
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountAnalytics");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountAnalytics["default"];
      return this.apiClient.callApi('/v1/accounts/{accountId}/analytics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Account Analytics
     * Return the analytics of your companies Talon.One account. 
     * @param {Number} accountId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAnalytics}
     */

  }, {
    key: "getAccountAnalytics",
    value: function getAccountAnalytics(accountId) {
      return this.getAccountAnalyticsWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an additional cost
     * Returns additional cost for the account by its id. 
     * @param {Number} additionalCostId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAdditionalCost} and HTTP response
     */

  }, {
    key: "getAdditionalCostWithHttpInfo",
    value: function getAdditionalCostWithHttpInfo(additionalCostId) {
      var postBody = null; // verify the required parameter 'additionalCostId' is set

      if (additionalCostId === undefined || additionalCostId === null) {
        throw new Error("Missing the required parameter 'additionalCostId' when calling getAdditionalCost");
      }

      var pathParams = {
        'additionalCostId': additionalCostId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountAdditionalCost["default"];
      return this.apiClient.callApi('/v1/additional_costs/{additionalCostId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an additional cost
     * Returns additional cost for the account by its id. 
     * @param {Number} additionalCostId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAdditionalCost}
     */

  }, {
    key: "getAdditionalCost",
    value: function getAdditionalCost(additionalCostId) {
      return this.getAdditionalCostWithHttpInfo(additionalCostId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List additional costs
     * Returns all the defined additional costs for the account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20021} and HTTP response
     */

  }, {
    key: "getAdditionalCostsWithHttpInfo",
    value: function getAdditionalCostsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse14["default"];
      return this.apiClient.callApi('/v1/additional_costs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List additional costs
     * Returns all the defined additional costs for the account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20021}
     */

  }, {
    key: "getAdditionalCosts",
    value: function getAdditionalCosts(opts) {
      return this.getAdditionalCostsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all access logs
     * Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs. 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2009} and HTTP response
     */

  }, {
    key: "getAllAccessLogsWithHttpInfo",
    value: function getAllAccessLogsWithHttpInfo(rangeStart, rangeEnd, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'rangeStart' is set

      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getAllAccessLogs");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getAllAccessLogs");
      }

      var pathParams = {};
      var queryParams = {
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd,
        'path': opts['path'],
        'method': opts['method'],
        'status': opts['status'],
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse30["default"];
      return this.apiClient.callApi('/v1/access_logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all access logs
     * Fetches the access logs for the entire account. Sensitive requests (logins) are _always_ filtered from the logs. 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {String} opts.path Only return results where the request path matches the given regular expression.
     * @param {module:model/String} opts.method Only return results where the request method matches the given regular expression.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */

  }, {
    key: "getAllAccessLogs",
    value: function getAllAccessLogs(rangeStart, rangeEnd, opts) {
      return this.getAllAccessLogsWithHttpInfo(rangeStart, rangeEnd, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all roles.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20030} and HTTP response
     */

  }, {
    key: "getAllRolesWithHttpInfo",
    value: function getAllRolesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse24["default"];
      return this.apiClient.callApi('/v1/roles', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all roles.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20030}
     */

  }, {
    key: "getAllRoles",
    value: function getAllRoles() {
      return this.getAllRolesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Application
     * Get the application specified by the ID.
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Application} and HTTP response
     */

  }, {
    key: "getApplicationWithHttpInfo",
    value: function getApplicationWithHttpInfo(applicationId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplication");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Application["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Application
     * Get the application specified by the ID.
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Application}
     */

  }, {
    key: "getApplication",
    value: function getApplication(applicationId) {
      return this.getApplicationWithHttpInfo(applicationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get report of health of application API
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationApiHealth} and HTTP response
     */

  }, {
    key: "getApplicationApiHealthWithHttpInfo",
    value: function getApplicationApiHealthWithHttpInfo(applicationId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationApiHealth");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationApiHealth["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/health_report', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get report of health of application API
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationApiHealth}
     */

  }, {
    key: "getApplicationApiHealth",
    value: function getApplicationApiHealth(applicationId) {
      return this.getApplicationApiHealthWithHttpInfo(applicationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Application Customer
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationCustomer} and HTTP response
     */

  }, {
    key: "getApplicationCustomerWithHttpInfo",
    value: function getApplicationCustomerWithHttpInfo(applicationId, customerId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationCustomer");
      } // verify the required parameter 'customerId' is set


      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getApplicationCustomer");
      }

      var pathParams = {
        'applicationId': applicationId,
        'customerId': customerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationCustomer["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/customers/{customerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Application Customer
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationCustomer}
     */

  }, {
    key: "getApplicationCustomer",
    value: function getApplicationCustomer(applicationId, customerId) {
      return this.getApplicationCustomerWithHttpInfo(applicationId, customerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Application Customers
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20012} and HTTP response
     */

  }, {
    key: "getApplicationCustomersWithHttpInfo",
    value: function getApplicationCustomersWithHttpInfo(applicationId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationCustomers");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/customers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Application Customers
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20012}
     */

  }, {
    key: "getApplicationCustomers",
    value: function getApplicationCustomers(applicationId) {
      return this.getApplicationCustomersWithHttpInfo(applicationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the customer profiles that match the given attributes
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile 
     * @param {module:model/ApplicationCustomerSearch} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */

  }, {
    key: "getApplicationCustomersByAttributesWithHttpInfo",
    value: function getApplicationCustomersByAttributesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getApplicationCustomersByAttributes");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['integration_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/v1/application_customer_search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the customer profiles that match the given attributes
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile 
     * @param {module:model/ApplicationCustomerSearch} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */

  }, {
    key: "getApplicationCustomersByAttributes",
    value: function getApplicationCustomersByAttributes(body) {
      return this.getApplicationCustomersByAttributesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Applications Event Types
     * Get all of the distinct values of the Event `type` property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent) 
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20019} and HTTP response
     */

  }, {
    key: "getApplicationEventTypesWithHttpInfo",
    value: function getApplicationEventTypesWithHttpInfo(applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationEventTypes");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse11["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/event_types', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Applications Event Types
     * Get all of the distinct values of the Event `type` property for events recorded in the application.  See also: [Track an event](/integration-api/reference/#trackEvent) 
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20019}
     */

  }, {
    key: "getApplicationEventTypes",
    value: function getApplicationEventTypes(applicationId, opts) {
      return this.getApplicationEventTypesWithHttpInfo(applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Applications Events
     * Lists all events recorded for an application. 
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20017} and HTTP response
     */

  }, {
    key: "getApplicationEventsWithHttpInfo",
    value: function getApplicationEventsWithHttpInfo(applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationEvents");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'type': opts['type'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'session': opts['session'],
        'profile': opts['profile'],
        'customerName': opts['customerName'],
        'customerEmail': opts['customerEmail'],
        'couponCode': opts['couponCode'],
        'referralCode': opts['referralCode'],
        'ruleQuery': opts['ruleQuery'],
        'campaignQuery': opts['campaignQuery']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse9["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Applications Events
     * Lists all events recorded for an application. 
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20017}
     */

  }, {
    key: "getApplicationEvents",
    value: function getApplicationEvents(applicationId, opts) {
      return this.getApplicationEventsWithHttpInfo(applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Applications Events
     * Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results. 
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20018} and HTTP response
     */

  }, {
    key: "getApplicationEventsWithoutTotalCountWithHttpInfo",
    value: function getApplicationEventsWithoutTotalCountWithHttpInfo(applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationEventsWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'type': opts['type'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'session': opts['session'],
        'profile': opts['profile'],
        'customerName': opts['customerName'],
        'customerEmail': opts['customerEmail'],
        'couponCode': opts['couponCode'],
        'referralCode': opts['referralCode'],
        'ruleQuery': opts['ruleQuery'],
        'campaignQuery': opts['campaignQuery']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse10["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/events/no_total', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Applications Events
     * Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only if there are more results. 
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.type Comma-separated list of types by which to filter events. Must be exact match(es).
     * @param {Date} opts.createdBefore Only return events created before this date
     * @param {Date} opts.createdAfter Only return events created after this date
     * @param {String} opts.session Session integration ID filter for events. Must be exact match.
     * @param {String} opts.profile Profile integration ID filter for events. Must be exact match.
     * @param {String} opts.customerName Customer name filter for events. Will match substrings case-insensitively.
     * @param {String} opts.customerEmail Customer e-mail address filter for events. Will match substrings case-insensitively.
     * @param {String} opts.couponCode Coupon code
     * @param {String} opts.referralCode Referral code
     * @param {String} opts.ruleQuery Rule name filter for events
     * @param {String} opts.campaignQuery Campaign name filter for events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20018}
     */

  }, {
    key: "getApplicationEventsWithoutTotalCount",
    value: function getApplicationEventsWithoutTotalCount(applicationId, opts) {
      return this.getApplicationEventsWithoutTotalCountWithHttpInfo(applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Application Session
     * @param {Number} applicationId 
     * @param {Number} sessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationSession} and HTTP response
     */

  }, {
    key: "getApplicationSessionWithHttpInfo",
    value: function getApplicationSessionWithHttpInfo(applicationId, sessionId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationSession");
      } // verify the required parameter 'sessionId' is set


      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling getApplicationSession");
      }

      var pathParams = {
        'applicationId': applicationId,
        'sessionId': sessionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationSession["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/sessions/{sessionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Application Session
     * @param {Number} applicationId 
     * @param {Number} sessionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationSession}
     */

  }, {
    key: "getApplicationSession",
    value: function getApplicationSession(applicationId, sessionId) {
      return this.getApplicationSessionWithHttpInfo(applicationId, sessionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Application Sessions
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.profile Profile integration ID filter for sessions. Must be exact match.
     * @param {module:model/String} opts.state Filter by sessions with this state. Must be exact match.
     * @param {String} opts.coupon Filter by sessions with this coupon. Must be exact match.
     * @param {String} opts.referral Filter by sessions with this referral. Must be exact match.
     * @param {String} opts.integrationId Filter by sessions with this integrationId. Must be exact match.
     * @param {String} opts.customerId Filter by integration ID of the customer for the session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20016} and HTTP response
     */

  }, {
    key: "getApplicationSessionsWithHttpInfo",
    value: function getApplicationSessionsWithHttpInfo(applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getApplicationSessions");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'profile': opts['profile'],
        'state': opts['state'],
        'coupon': opts['coupon'],
        'referral': opts['referral'],
        'integrationId': opts['integrationId'],
        'customerId': opts['customerId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse8["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/sessions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Application Sessions
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.profile Profile integration ID filter for sessions. Must be exact match.
     * @param {module:model/String} opts.state Filter by sessions with this state. Must be exact match.
     * @param {String} opts.coupon Filter by sessions with this coupon. Must be exact match.
     * @param {String} opts.referral Filter by sessions with this referral. Must be exact match.
     * @param {String} opts.integrationId Filter by sessions with this integrationId. Must be exact match.
     * @param {String} opts.customerId Filter by integration ID of the customer for the session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20016}
     */

  }, {
    key: "getApplicationSessions",
    value: function getApplicationSessions(applicationId, opts) {
      return this.getApplicationSessionsWithHttpInfo(applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Applications
     * List all application in the current account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */

  }, {
    key: "getApplicationsWithHttpInfo",
    value: function getApplicationsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse12["default"];
      return this.apiClient.callApi('/v1/applications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Applications
     * List all application in the current account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */

  }, {
    key: "getApplications",
    value: function getApplications(opts) {
      return this.getApplicationsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a custom attribute
     * Returns custom attribute for the account by its id. 
     * @param {Number} attributeId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Attribute} and HTTP response
     */

  }, {
    key: "getAttributeWithHttpInfo",
    value: function getAttributeWithHttpInfo(attributeId) {
      var postBody = null; // verify the required parameter 'attributeId' is set

      if (attributeId === undefined || attributeId === null) {
        throw new Error("Missing the required parameter 'attributeId' when calling getAttribute");
      }

      var pathParams = {
        'attributeId': attributeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Attribute["default"];
      return this.apiClient.callApi('/v1/attributes/{attributeId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a custom attribute
     * Returns custom attribute for the account by its id. 
     * @param {Number} attributeId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attribute}
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(attributeId) {
      return this.getAttributeWithHttpInfo(attributeId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List custom attributes
     * Returns all the defined custom attributes for the account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20020} and HTTP response
     */

  }, {
    key: "getAttributesWithHttpInfo",
    value: function getAttributesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse13["default"];
      return this.apiClient.callApi('/v1/attributes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List custom attributes
     * Returns all the defined custom attributes for the account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20020}
     */

  }, {
    key: "getAttributes",
    value: function getAttributes(opts) {
      return this.getAttributesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a Campaign
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */

  }, {
    key: "getCampaignWithHttpInfo",
    value: function getCampaignWithHttpInfo(applicationId, campaignId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCampaign");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaign");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a Campaign
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "getCampaign",
    value: function getCampaign(applicationId, campaignId) {
      return this.getCampaignWithHttpInfo(applicationId, campaignId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get analytics of campaigns
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time interval between the results in the returned time-series.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20011} and HTTP response
     */

  }, {
    key: "getCampaignAnalyticsWithHttpInfo",
    value: function getCampaignAnalyticsWithHttpInfo(applicationId, campaignId, rangeStart, rangeEnd, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCampaignAnalytics");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignAnalytics");
      } // verify the required parameter 'rangeStart' is set


      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getCampaignAnalytics");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getCampaignAnalytics");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd,
        'granularity': opts['granularity']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/analytics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get analytics of campaigns
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time interval between the results in the returned time-series.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
     */

  }, {
    key: "getCampaignAnalytics",
    value: function getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, opts) {
      return this.getCampaignAnalyticsWithHttpInfo(applicationId, campaignId, rangeStart, rangeEnd, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of all campaigns that match the given attributes
     * Gets a list of all the campaigns that exactly match a set of attributes. 
     * @param {Number} applicationId 
     * @param {module:model/CampaignSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "getCampaignByAttributesWithHttpInfo",
    value: function getCampaignByAttributesWithHttpInfo(applicationId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCampaignByAttributes");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getCampaignByAttributes");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'campaignState': opts['campaignState']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns_search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of all campaigns that match the given attributes
     * Gets a list of all the campaigns that exactly match a set of attributes. 
     * @param {Number} applicationId 
     * @param {module:model/CampaignSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getCampaignByAttributes",
    value: function getCampaignByAttributes(applicationId, body, opts) {
      return this.getCampaignByAttributesWithHttpInfo(applicationId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List CampaignSet
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignSet} and HTTP response
     */

  }, {
    key: "getCampaignSetWithHttpInfo",
    value: function getCampaignSetWithHttpInfo(applicationId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCampaignSet");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CampaignSet["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaign_set', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List CampaignSet
     * @param {Number} applicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignSet}
     */

  }, {
    key: "getCampaignSet",
    value: function getCampaignSet(applicationId) {
      return this.getCampaignSetWithHttpInfo(applicationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List your Campaigns
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @param {String} opts.name Filter results performing case-insensitive matching against the name of the campaign.
     * @param {String} opts.tags Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values 
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "getCampaignsWithHttpInfo",
    value: function getCampaignsWithHttpInfo(applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCampaigns");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'campaignState': opts['campaignState'],
        'name': opts['name'],
        'tags': opts['tags'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse23["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List your Campaigns
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @param {String} opts.name Filter results performing case-insensitive matching against the name of the campaign.
     * @param {String} opts.tags Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values 
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getCampaigns",
    value: function getCampaigns(applicationId, opts) {
      return this.getCampaignsWithHttpInfo(applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get audit log for an account
     * Get list of changes caused by API calls for an account. Only accessible for admins.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.applicationId 
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Boolean} opts.withTotalResultSize When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query. 
     * @param {Boolean} opts.includeOld When this flag is set to false, the state without the change will not be returned. The default value is true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20027} and HTTP response
     */

  }, {
    key: "getChangesWithHttpInfo",
    value: function getChangesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'applicationId': opts['applicationId'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'withTotalResultSize': opts['withTotalResultSize'],
        'includeOld': opts['includeOld']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse20["default"];
      return this.apiClient.callApi('/v1/changes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get audit log for an account
     * Get list of changes caused by API calls for an account. Only accessible for admins.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.applicationId 
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp.
     * @param {Boolean} opts.withTotalResultSize When this flag is set, the result will include the total size of the result, across all pages. This might decrease performance on large data sets. With this flag set to true, hasMore will be be true whenever there is a next page. totalResultSize will always be zero. With this flag set to false, hasMore will always be set to false. totalResultSize will contain the total number of results for this query. 
     * @param {Boolean} opts.includeOld When this flag is set to false, the state without the change will not be returned. The default value is true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20027}
     */

  }, {
    key: "getChanges",
    value: function getChanges(opts) {
      return this.getChangesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "getCouponsWithHttpInfo",
    value: function getCouponsWithHttpInfo(applicationId, campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCoupons");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCoupons");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'startsAfter': opts['startsAfter'],
        'startsBefore': opts['startsBefore'],
        'expiresAfter': opts['expiresAfter'],
        'expiresBefore': opts['expiresBefore'],
        'valid': opts['valid'],
        'batchId': opts['batchId'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'exactMatch': opts['exactMatch']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.startsBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.expiresBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getCoupons",
    value: function getCoupons(applicationId, campaignId, opts) {
      return this.getCouponsWithHttpInfo(applicationId, campaignId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request. 
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/CouponSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "getCouponsByAttributesWithHttpInfo",
    value: function getCouponsByAttributesWithHttpInfo(applicationId, campaignId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCouponsByAttributes");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCouponsByAttributes");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getCouponsByAttributes");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'exactMatch': opts['exactMatch'],
        'batchId': opts['batchId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request. 
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/CouponSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getCouponsByAttributes",
    value: function getCouponsByAttributes(applicationId, campaignId, body, opts) {
      return this.getCouponsByAttributesWithHttpInfo(applicationId, campaignId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria Application wide 
     * @param {Number} applicationId 
     * @param {module:model/CouponSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "getCouponsByAttributesApplicationWideWithHttpInfo",
    value: function getCouponsByAttributesApplicationWideWithHttpInfo(applicationId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCouponsByAttributesApplicationWide");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getCouponsByAttributesApplicationWide");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'batchId': opts['batchId'],
        'exactMatch': opts['exactMatch'],
        'campaignState': opts['campaignState']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/coupons_search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria Application wide 
     * @param {Number} applicationId 
     * @param {module:model/CouponSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getCouponsByAttributesApplicationWide",
    value: function getCouponsByAttributesApplicationWide(applicationId, body, opts) {
      return this.getCouponsByAttributesApplicationWideWithHttpInfo(applicationId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */

  }, {
    key: "getCouponsWithoutTotalCountWithHttpInfo",
    value: function getCouponsWithoutTotalCountWithHttpInfo(applicationId, campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCouponsWithoutTotalCount");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCouponsWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'batchId': opts['batchId'],
        'exactMatch': opts['exactMatch']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse26["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "getCouponsWithoutTotalCount",
    value: function getCouponsWithoutTotalCount(applicationId, campaignId, opts) {
      return this.getCouponsWithoutTotalCountWithHttpInfo(applicationId, campaignId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Activity Report for Single Customer
     * Fetch summary report for single application customer based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerActivityReport} and HTTP response
     */

  }, {
    key: "getCustomerActivityReportWithHttpInfo",
    value: function getCustomerActivityReportWithHttpInfo(rangeStart, rangeEnd, applicationId, customerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'rangeStart' is set

      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getCustomerActivityReport");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getCustomerActivityReport");
      } // verify the required parameter 'applicationId' is set


      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCustomerActivityReport");
      } // verify the required parameter 'customerId' is set


      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerActivityReport");
      }

      var pathParams = {
        'applicationId': applicationId,
        'customerId': customerId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerActivityReport["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/customer_activity_reports/{customerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Activity Report for Single Customer
     * Fetch summary report for single application customer based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerActivityReport}
     */

  }, {
    key: "getCustomerActivityReport",
    value: function getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, opts) {
      return this.getCustomerActivityReportWithHttpInfo(rangeStart, rangeEnd, applicationId, customerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Activity Reports for Application Customers
     * Fetch summary reports for all application customers based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20014} and HTTP response
     */

  }, {
    key: "getCustomerActivityReportsWithHttpInfo",
    value: function getCustomerActivityReportsWithHttpInfo(rangeStart, rangeEnd, applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'rangeStart' is set

      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getCustomerActivityReports");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getCustomerActivityReports");
      } // verify the required parameter 'applicationId' is set


      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCustomerActivityReports");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd,
        'name': opts['name'],
        'integrationId': opts['integrationId'],
        'campaignName': opts['campaignName'],
        'advocateName': opts['advocateName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse6["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/customer_activity_reports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Activity Reports for Application Customers
     * Fetch summary reports for all application customers based on a time range
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20014}
     */

  }, {
    key: "getCustomerActivityReports",
    value: function getCustomerActivityReports(rangeStart, rangeEnd, applicationId, opts) {
      return this.getCustomerActivityReportsWithHttpInfo(rangeStart, rangeEnd, applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Activity Reports for Application Customers
     * Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20015} and HTTP response
     */

  }, {
    key: "getCustomerActivityReportsWithoutTotalCountWithHttpInfo",
    value: function getCustomerActivityReportsWithoutTotalCountWithHttpInfo(rangeStart, rangeEnd, applicationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'rangeStart' is set

      if (rangeStart === undefined || rangeStart === null) {
        throw new Error("Missing the required parameter 'rangeStart' when calling getCustomerActivityReportsWithoutTotalCount");
      } // verify the required parameter 'rangeEnd' is set


      if (rangeEnd === undefined || rangeEnd === null) {
        throw new Error("Missing the required parameter 'rangeEnd' when calling getCustomerActivityReportsWithoutTotalCount");
      } // verify the required parameter 'applicationId' is set


      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCustomerActivityReportsWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'rangeStart': rangeStart,
        'rangeEnd': rangeEnd,
        'name': opts['name'],
        'integrationId': opts['integrationId'],
        'campaignName': opts['campaignName'],
        'advocateName': opts['advocateName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse7["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/customer_activity_reports/no_total', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Activity Reports for Application Customers
     * Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only if there are more results.
     * @param {Date} rangeStart Only return results from after this timestamp, must be an RFC3339 timestamp string
     * @param {Date} rangeEnd Only return results from before this timestamp, must be an RFC3339 timestamp string
     * @param {Number} applicationId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.name Only return reports matching the customer name
     * @param {String} opts.integrationId Only return reports matching the integrationId
     * @param {String} opts.campaignName Only return reports matching the campaignName
     * @param {String} opts.advocateName Only return reports matching the current customer referrer name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20015}
     */

  }, {
    key: "getCustomerActivityReportsWithoutTotalCount",
    value: function getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, opts) {
      return this.getCustomerActivityReportsWithoutTotalCountWithHttpInfo(rangeStart, rangeEnd, applicationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Analytics Report for a Customer
     * Fetch analytics for single application customer
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerAnalytics} and HTTP response
     */

  }, {
    key: "getCustomerAnalyticsWithHttpInfo",
    value: function getCustomerAnalyticsWithHttpInfo(applicationId, customerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCustomerAnalytics");
      } // verify the required parameter 'customerId' is set


      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerAnalytics");
      }

      var pathParams = {
        'applicationId': applicationId,
        'customerId': customerId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomerAnalytics["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/customers/{customerId}/analytics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Analytics Report for a Customer
     * Fetch analytics for single application customer
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerAnalytics}
     */

  }, {
    key: "getCustomerAnalytics",
    value: function getCustomerAnalytics(applicationId, customerId, opts) {
      return this.getCustomerAnalyticsWithHttpInfo(applicationId, customerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Customer Profile
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApplicationCustomer} and HTTP response
     */

  }, {
    key: "getCustomerProfileWithHttpInfo",
    value: function getCustomerProfileWithHttpInfo(applicationId, customerId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getCustomerProfile");
      } // verify the required parameter 'customerId' is set


      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerProfile");
      }

      var pathParams = {
        'applicationId': applicationId,
        'customerId': customerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationCustomer["default"];
      return this.apiClient.callApi('/v1/customers/{customerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Customer Profile
     * @param {Number} applicationId 
     * @param {Number} customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApplicationCustomer}
     */

  }, {
    key: "getCustomerProfile",
    value: function getCustomerProfile(applicationId, customerId) {
      return this.getCustomerProfileWithHttpInfo(applicationId, customerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Customer Profiles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */

  }, {
    key: "getCustomerProfilesWithHttpInfo",
    value: function getCustomerProfilesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/v1/customers/no_total', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Customer Profiles
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */

  }, {
    key: "getCustomerProfiles",
    value: function getCustomerProfiles(opts) {
      return this.getCustomerProfilesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the customer profiles that match the given attributes
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile 
     * @param {module:model/ApplicationCustomerSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */

  }, {
    key: "getCustomersByAttributesWithHttpInfo",
    value: function getCustomersByAttributesWithHttpInfo(body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getCustomersByAttributes");
      }

      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/v1/customer_search/no_total', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the customer profiles that match the given attributes
     * Gets a list of all the customer profiles for the account that exactly match a set of attributes.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request.  [Customer Profile]: https://help.talon.one/hc/en-us/articles/360005130739-Data-Model#CustomerProfile 
     * @param {module:model/ApplicationCustomerSearch} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */

  }, {
    key: "getCustomersByAttributes",
    value: function getCustomersByAttributes(body, opts) {
      return this.getCustomersByAttributesWithHttpInfo(body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Event Types
     * Fetch all event type definitions for your account. Each event type can be 
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.name Filter results to event types with the given name. This parameter implies `includeOldVersions`.
     * @param {Boolean} opts.includeOldVersions Include all versions of every event type. (default to false)
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20025} and HTTP response
     */

  }, {
    key: "getEventTypesWithHttpInfo",
    value: function getEventTypesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'applicationIds': opts['applicationIds'],
        'name': opts['name'],
        'includeOldVersions': opts['includeOldVersions'],
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse18["default"];
      return this.apiClient.callApi('/v1/event_types', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Event Types
     * Fetch all event type definitions for your account. Each event type can be 
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.name Filter results to event types with the given name. This parameter implies `includeOldVersions`.
     * @param {Boolean} opts.includeOldVersions Include all versions of every event type. (default to false)
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20025}
     */

  }, {
    key: "getEventTypes",
    value: function getEventTypes(opts) {
      return this.getEventTypesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Exports
     * Get a list of all past exports 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {Number} opts.applicationId 
     * @param {Number} opts.campaignId 
     * @param {module:model/String} opts.entity The name of the entity type that was exported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20028} and HTTP response
     */

  }, {
    key: "getExportsWithHttpInfo",
    value: function getExportsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'applicationId': opts['applicationId'],
        'campaignId': opts['campaignId'],
        'entity': opts['entity']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse21["default"];
      return this.apiClient.callApi('/v1/exports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Exports
     * Get a list of all past exports 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {Number} opts.applicationId 
     * @param {Number} opts.campaignId 
     * @param {module:model/String} opts.entity The name of the entity type that was exported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20028}
     */

  }, {
    key: "getExports",
    value: function getExports(opts) {
      return this.getExportsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Imports
     * Get a list of all past imports 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20029} and HTTP response
     */

  }, {
    key: "getImportsWithHttpInfo",
    value: function getImportsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse22["default"];
      return this.apiClient.callApi('/v1/imports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Imports
     * Get a list of all past imports 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20029}
     */

  }, {
    key: "getImports",
    value: function getImports(opts) {
      return this.getImportsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * get the Loyalty Ledger for this integrationID
     * Get the Loyalty Ledger for this profile integration ID.
     * @param {String} programID The identifier for the application, must be unique within the account.
     * @param {String} integrationID The identifier for the application, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyLedger} and HTTP response
     */

  }, {
    key: "getLoyaltyPointsWithHttpInfo",
    value: function getLoyaltyPointsWithHttpInfo(programID, integrationID) {
      var postBody = null; // verify the required parameter 'programID' is set

      if (programID === undefined || programID === null) {
        throw new Error("Missing the required parameter 'programID' when calling getLoyaltyPoints");
      } // verify the required parameter 'integrationID' is set


      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling getLoyaltyPoints");
      }

      var pathParams = {
        'programID': programID,
        'integrationID': integrationID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoyaltyLedger["default"];
      return this.apiClient.callApi('/v1/loyalty_programs/{programID}/profile/{integrationID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * get the Loyalty Ledger for this integrationID
     * Get the Loyalty Ledger for this profile integration ID.
     * @param {String} programID The identifier for the application, must be unique within the account.
     * @param {String} integrationID The identifier for the application, must be unique within the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyLedger}
     */

  }, {
    key: "getLoyaltyPoints",
    value: function getLoyaltyPoints(programID, integrationID) {
      return this.getLoyaltyPointsWithHttpInfo(programID, integrationID).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a loyalty program
     * @param {String} programID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoyaltyProgram} and HTTP response
     */

  }, {
    key: "getLoyaltyProgramWithHttpInfo",
    value: function getLoyaltyProgramWithHttpInfo(programID) {
      var postBody = null; // verify the required parameter 'programID' is set

      if (programID === undefined || programID === null) {
        throw new Error("Missing the required parameter 'programID' when calling getLoyaltyProgram");
      }

      var pathParams = {
        'programID': programID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoyaltyProgram["default"];
      return this.apiClient.callApi('/v1/loyalty_programs/{programID}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a loyalty program
     * @param {String} programID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoyaltyProgram}
     */

  }, {
    key: "getLoyaltyProgram",
    value: function getLoyaltyProgram(programID) {
      return this.getLoyaltyProgramWithHttpInfo(programID).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all loyalty Programs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */

  }, {
    key: "getLoyaltyProgramsWithHttpInfo",
    value: function getLoyaltyProgramsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse29["default"];
      return this.apiClient.callApi('/v1/loyalty_programs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all loyalty Programs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */

  }, {
    key: "getLoyaltyPrograms",
    value: function getLoyaltyPrograms() {
      return this.getLoyaltyProgramsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Referrals
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */

  }, {
    key: "getReferralsWithHttpInfo",
    value: function getReferralsWithHttpInfo(applicationId, campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getReferrals");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getReferrals");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'code': opts['code'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'advocate': opts['advocate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse27["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/referrals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Referrals
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */

  }, {
    key: "getReferrals",
    value: function getReferrals(applicationId, campaignId, opts) {
      return this.getReferralsWithHttpInfo(applicationId, campaignId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Referrals
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */

  }, {
    key: "getReferralsWithoutTotalCountWithHttpInfo",
    value: function getReferralsWithoutTotalCountWithHttpInfo(applicationId, campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getReferralsWithoutTotalCount");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getReferralsWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'code': opts['code'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'advocate': opts['advocate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse28["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Referrals
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.code Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiry date is set and in the past. The second matches referrals in which start date is null or in the past and expiry date is null or in the future, the third matches referrals in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`. 
     * @param {String} opts.advocate Filter results by match with a profile id specified in the referral's AdvocateProfileIntegrationId field
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */

  }, {
    key: "getReferralsWithoutTotalCount",
    value: function getReferralsWithoutTotalCount(applicationId, campaignId, opts) {
      return this.getReferralsWithoutTotalCountWithHttpInfo(applicationId, campaignId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get information for the specified role.
     * @param {Number} roleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Role} and HTTP response
     */

  }, {
    key: "getRoleWithHttpInfo",
    value: function getRoleWithHttpInfo(roleId) {
      var postBody = null; // verify the required parameter 'roleId' is set

      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling getRole");
      }

      var pathParams = {
        'roleId': roleId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Role["default"];
      return this.apiClient.callApi('/v1/roles/{roleId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get information for the specified role.
     * @param {Number} roleId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Role}
     */

  }, {
    key: "getRole",
    value: function getRole(roleId) {
      return this.getRoleWithHttpInfo(roleId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Number} rulesetId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ruleset} and HTTP response
     */

  }, {
    key: "getRulesetWithHttpInfo",
    value: function getRulesetWithHttpInfo(applicationId, campaignId, rulesetId) {
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getRuleset");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getRuleset");
      } // verify the required parameter 'rulesetId' is set


      if (rulesetId === undefined || rulesetId === null) {
        throw new Error("Missing the required parameter 'rulesetId' when calling getRuleset");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId,
        'rulesetId': rulesetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Ruleset["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Number} rulesetId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ruleset}
     */

  }, {
    key: "getRuleset",
    value: function getRuleset(applicationId, campaignId, rulesetId) {
      return this.getRulesetWithHttpInfo(applicationId, campaignId, rulesetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Campaign Rulesets
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "getRulesetsWithHttpInfo",
    value: function getRulesetsWithHttpInfo(applicationId, campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling getRulesets");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getRulesets");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse25["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/rulesets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Campaign Rulesets
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "getRulesets",
    value: function getRulesets(applicationId, campaignId, opts) {
      return this.getRulesetsWithHttpInfo(applicationId, campaignId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a single User
     * Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves. 
     * @param {Number} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */

  }, {
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUser");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v1/users/{userId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a single User
     * Retrieves the data (including an invitation code) for a user. Non-admin users can only get themselves. 
     * @param {Number} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "getUser",
    value: function getUser(userId) {
      return this.getUserWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Users in your account
     * Retrieve all users in your account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20026} and HTTP response
     */

  }, {
    key: "getUsersWithHttpInfo",
    value: function getUsersWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse19["default"];
      return this.apiClient.callApi('/v1/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Users in your account
     * Retrieve all users in your account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20026}
     */

  }, {
    key: "getUsers",
    value: function getUsers(opts) {
      return this.getUsersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Webhook
     * Returns an webhook by its id.
     * @param {Number} webhookId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhook} and HTTP response
     */

  }, {
    key: "getWebhookWithHttpInfo",
    value: function getWebhookWithHttpInfo(webhookId) {
      var postBody = null; // verify the required parameter 'webhookId' is set

      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhook");
      }

      var pathParams = {
        'webhookId': webhookId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Webhook["default"];
      return this.apiClient.callApi('/v1/webhooks/{webhookId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Webhook
     * Returns an webhook by its id.
     * @param {Number} webhookId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhook}
     */

  }, {
    key: "getWebhook",
    value: function getWebhook(webhookId) {
      return this.getWebhookWithHttpInfo(webhookId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Webhook activation Log Entries
     * Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.integrationRequestUuid Filter results by integration request UUID.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId 
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {Date} opts.createdBefore Only return events created before this date.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20023} and HTTP response
     */

  }, {
    key: "getWebhookActivationLogsWithHttpInfo",
    value: function getWebhookActivationLogsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'integrationRequestUuid': opts['integrationRequestUuid'],
        'webhookId': opts['webhookId'],
        'applicationId': opts['applicationId'],
        'campaignId': opts['campaignId'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse16["default"];
      return this.apiClient.callApi('/v1/webhook_activation_logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Webhook activation Log Entries
     * Webhook activation log entries would be created as soon as an integration request triggered an effect with a webhook
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.integrationRequestUuid Filter results by integration request UUID.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId 
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {Date} opts.createdBefore Only return events created before this date.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20023}
     */

  }, {
    key: "getWebhookActivationLogs",
    value: function getWebhookActivationLogs(opts) {
      return this.getWebhookActivationLogsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Webhook Log Entries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId 
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {String} opts.requestUuid Filter results by request UUID.
     * @param {Date} opts.createdBefore Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20024} and HTTP response
     */

  }, {
    key: "getWebhookLogsWithHttpInfo",
    value: function getWebhookLogsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'status': opts['status'],
        'webhookId': opts['webhookId'],
        'applicationId': opts['applicationId'],
        'campaignId': opts['campaignId'],
        'requestUuid': opts['requestUuid'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse17["default"];
      return this.apiClient.callApi('/v1/webhook_logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Webhook Log Entries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {module:model/String} opts.status Filter results by HTTP status codes.
     * @param {Number} opts.webhookId Filter results by Webhook.
     * @param {Number} opts.applicationId 
     * @param {Number} opts.campaignId Filter results by campaign.
     * @param {String} opts.requestUuid Filter results by request UUID.
     * @param {Date} opts.createdBefore Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string.
     * @param {Date} opts.createdAfter Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20024}
     */

  }, {
    key: "getWebhookLogs",
    value: function getWebhookLogs(opts) {
      return this.getWebhookLogsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Webhooks
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20022} and HTTP response
     */

  }, {
    key: "getWebhooksWithHttpInfo",
    value: function getWebhooksWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'applicationIds': opts['applicationIds'],
        'sort': opts['sort'],
        'pageSize': opts['pageSize'],
        'skip': opts['skip']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse15["default"];
      return this.apiClient.callApi('/v1/webhooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Webhooks
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationIds Filter by one or more application ids separated by comma
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20022}
     */

  }, {
    key: "getWebhooks",
    value: function getWebhooks(opts) {
      return this.getWebhooksWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deduct points in a certain loyalty program for the specified customer
     * @param {String} programID 
     * @param {String} integrationID 
     * @param {module:model/LoyaltyPoints} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "removeLoyaltyPointsWithHttpInfo",
    value: function removeLoyaltyPointsWithHttpInfo(programID, integrationID, body) {
      var postBody = body; // verify the required parameter 'programID' is set

      if (programID === undefined || programID === null) {
        throw new Error("Missing the required parameter 'programID' when calling removeLoyaltyPoints");
      } // verify the required parameter 'integrationID' is set


      if (integrationID === undefined || integrationID === null) {
        throw new Error("Missing the required parameter 'integrationID' when calling removeLoyaltyPoints");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling removeLoyaltyPoints");
      }

      var pathParams = {
        'programID': programID,
        'integrationID': integrationID
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/loyalty_programs/{programID}/profile/{integrationID}/deduct_points', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deduct points in a certain loyalty program for the specified customer
     * @param {String} programID 
     * @param {String} integrationID 
     * @param {module:model/LoyaltyPoints} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "removeLoyaltyPoints",
    value: function removeLoyaltyPoints(programID, integrationID, body) {
      return this.removeLoyaltyPointsWithHttpInfo(programID, integrationID, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Reset password
     * Consumes the supplied password reset token and updates the password for the associated account. 
     * @param {module:model/NewPassword} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewPassword} and HTTP response
     */

  }, {
    key: "resetPasswordWithHttpInfo",
    value: function resetPasswordWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPassword");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NewPassword["default"];
      return this.apiClient.callApi('/v1/reset_password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Reset password
     * Consumes the supplied password reset token and updates the password for the associated account. 
     * @param {module:model/NewPassword} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewPassword}
     */

  }, {
    key: "resetPassword",
    value: function resetPassword(body) {
      return this.resetPasswordWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons with attributes matching the query criteria 
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "searchCouponsAdvancedWithHttpInfo",
    value: function searchCouponsAdvancedWithHttpInfo(applicationId, campaignId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling searchCouponsAdvanced");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling searchCouponsAdvanced");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchCouponsAdvanced");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'exactMatch': opts['exactMatch'],
        'batchId': opts['batchId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons with attributes matching the query criteria 
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "searchCouponsAdvanced",
    value: function searchCouponsAdvanced(applicationId, campaignId, body, opts) {
      return this.searchCouponsAdvancedWithHttpInfo(applicationId, campaignId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 
     * @param {Number} applicationId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "searchCouponsAdvancedApplicationWideWithHttpInfo",
    value: function searchCouponsAdvancedApplicationWideWithHttpInfo(applicationId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling searchCouponsAdvancedApplicationWide");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchCouponsAdvancedApplicationWide");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'batchId': opts['batchId'],
        'exactMatch': opts['exactMatch'],
        'campaignState': opts['campaignState']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/coupons_search_advanced', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 
     * @param {Number} applicationId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "searchCouponsAdvancedApplicationWide",
    value: function searchCouponsAdvancedApplicationWide(applicationId, body, opts) {
      return this.searchCouponsAdvancedApplicationWideWithHttpInfo(applicationId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 
     * @param {Number} applicationId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */

  }, {
    key: "searchCouponsAdvancedApplicationWideWithoutTotalCountWithHttpInfo",
    value: function searchCouponsAdvancedApplicationWideWithoutTotalCountWithHttpInfo(applicationId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling searchCouponsAdvancedApplicationWideWithoutTotalCount");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchCouponsAdvancedApplicationWideWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'batchId': opts['batchId'],
        'exactMatch': opts['exactMatch'],
        'campaignState': opts['campaignState']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse26["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/coupons_search_advanced/no_total', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the coupons that match the given attributes in all active campaigns of an application
     * Gets a list of all the coupons with attributes matching the query criteria in all active campaigns of an application 
     * @param {Number} applicationId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {String} opts.batchId Filter results by batches of coupons
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {module:model/String} opts.campaignState Filter results by the state of the campaign.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "searchCouponsAdvancedApplicationWideWithoutTotalCount",
    value: function searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, opts) {
      return this.searchCouponsAdvancedApplicationWideWithoutTotalCountWithHttpInfo(applicationId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons with attributes matching the query criteria 
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */

  }, {
    key: "searchCouponsAdvancedWithoutTotalCountWithHttpInfo",
    value: function searchCouponsAdvancedWithoutTotalCountWithHttpInfo(applicationId, campaignId, body, opts) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling searchCouponsAdvancedWithoutTotalCount");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling searchCouponsAdvancedWithoutTotalCount");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchCouponsAdvancedWithoutTotalCount");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'skip': opts['skip'],
        'sort': opts['sort'],
        'value': opts['value'],
        'createdBefore': opts['createdBefore'],
        'createdAfter': opts['createdAfter'],
        'valid': opts['valid'],
        'usable': opts['usable'],
        'referralId': opts['referralId'],
        'recipientIntegrationId': opts['recipientIntegrationId'],
        'exactMatch': opts['exactMatch'],
        'batchId': opts['batchId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse26["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced/no_total', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a list of the coupons that match the given attributes
     * Gets a list of all the coupons with attributes matching the query criteria 
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of items to include in this response. When omitted, the maximum value of 1000 will be used.
     * @param {Number} opts.skip Skips the given number of items when paging through large result sets.
     * @param {String} opts.sort The field by which results should be sorted. Sorting defaults to ascending order, prefix the field name with `-` to sort in descending order.
     * @param {String} opts.value Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters.
     * @param {Date} opts.createdBefore Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {Date} opts.createdAfter Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp.
     * @param {module:model/String} opts.valid Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiry date is set and in the past. The second matches coupons in which start date is null or in the past and expiry date is null or in the future, the third matches coupons in which start date is set and in the future. 
     * @param {module:model/String} opts.usable Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`. 
     * @param {Number} opts.referralId Filter the results by matching them with the Id of a referral, that meaning the coupons that had been created as an effect of the usage of a referral code.
     * @param {String} opts.recipientIntegrationId Filter results by match with a profile id specified in the coupon's RecipientIntegrationId field
     * @param {Boolean} opts.exactMatch Filter results to an exact case-insensitive matching against the coupon code (default to false)
     * @param {String} opts.batchId Filter results by batches of coupons
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "searchCouponsAdvancedWithoutTotalCount",
    value: function searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, opts) {
      return this.searchCouponsAdvancedWithoutTotalCountWithHttpInfo(applicationId, campaignId, body, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an additional cost
     * Updates an existing additional cost. Once created, the only property of an additional cost that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. 
     * @param {Number} additionalCostId 
     * @param {module:model/NewAdditionalCost} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountAdditionalCost} and HTTP response
     */

  }, {
    key: "updateAdditionalCostWithHttpInfo",
    value: function updateAdditionalCostWithHttpInfo(additionalCostId, body) {
      var postBody = body; // verify the required parameter 'additionalCostId' is set

      if (additionalCostId === undefined || additionalCostId === null) {
        throw new Error("Missing the required parameter 'additionalCostId' when calling updateAdditionalCost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAdditionalCost");
      }

      var pathParams = {
        'additionalCostId': additionalCostId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountAdditionalCost["default"];
      return this.apiClient.callApi('/v1/additional_costs/{additionalCostId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an additional cost
     * Updates an existing additional cost. Once created, the only property of an additional cost that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. 
     * @param {Number} additionalCostId 
     * @param {module:model/NewAdditionalCost} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountAdditionalCost}
     */

  }, {
    key: "updateAdditionalCost",
    value: function updateAdditionalCost(additionalCostId, body) {
      return this.updateAdditionalCostWithHttpInfo(additionalCostId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a custom attribute
     * Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name `region`, and your integration is sending `attributes.region` with customer profile updates, changing the name to `locale` would cause the integration requests to begin failing.  If you **really** need to change the `type` or `name` property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one. 
     * @param {Number} attributeId 
     * @param {module:model/NewAttribute} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Attribute} and HTTP response
     */

  }, {
    key: "updateAttributeWithHttpInfo",
    value: function updateAttributeWithHttpInfo(attributeId, body) {
      var postBody = body; // verify the required parameter 'attributeId' is set

      if (attributeId === undefined || attributeId === null) {
        throw new Error("Missing the required parameter 'attributeId' when calling updateAttribute");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAttribute");
      }

      var pathParams = {
        'attributeId': attributeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Attribute["default"];
      return this.apiClient.callApi('/v1/attributes/{attributeId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a custom attribute
     * Updates an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the title (human readable description). This restriction is in place to prevent accidentally breaking live integrations. E.g. if you have a customer profile attribute with the name `region`, and your integration is sending `attributes.region` with customer profile updates, changing the name to `locale` would cause the integration requests to begin failing.  If you **really** need to change the `type` or `name` property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. Then delete the old attribute when you are confident you have migrated any needed data from the old attribute to the new one. 
     * @param {Number} attributeId 
     * @param {module:model/NewAttribute} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attribute}
     */

  }, {
    key: "updateAttribute",
    value: function updateAttribute(attributeId, body) {
      return this.updateAttributeWithHttpInfo(attributeId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Campaign
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/UpdateCampaign} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Campaign} and HTTP response
     */

  }, {
    key: "updateCampaignWithHttpInfo",
    value: function updateCampaignWithHttpInfo(applicationId, campaignId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling updateCampaign");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCampaign");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCampaign");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Campaign
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/UpdateCampaign} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "updateCampaign",
    value: function updateCampaign(applicationId, campaignId, body) {
      return this.updateCampaignWithHttpInfo(applicationId, campaignId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Campaign Set
     * @param {Number} applicationId 
     * @param {module:model/NewCampaignSet} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CampaignSet} and HTTP response
     */

  }, {
    key: "updateCampaignSetWithHttpInfo",
    value: function updateCampaignSetWithHttpInfo(applicationId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling updateCampaignSet");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCampaignSet");
      }

      var pathParams = {
        'applicationId': applicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CampaignSet["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaign_set', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Campaign Set
     * @param {Number} applicationId 
     * @param {module:model/NewCampaignSet} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CampaignSet}
     */

  }, {
    key: "updateCampaignSet",
    value: function updateCampaignSet(applicationId, body) {
      return this.updateCampaignSetWithHttpInfo(applicationId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Coupon
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {String} couponId The ID of the coupon code to update
     * @param {module:model/UpdateCoupon} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */

  }, {
    key: "updateCouponWithHttpInfo",
    value: function updateCouponWithHttpInfo(applicationId, campaignId, couponId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling updateCoupon");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCoupon");
      } // verify the required parameter 'couponId' is set


      if (couponId === undefined || couponId === null) {
        throw new Error("Missing the required parameter 'couponId' when calling updateCoupon");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCoupon");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId,
        'couponId': couponId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Coupon["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Coupon
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {String} couponId The ID of the coupon code to update
     * @param {module:model/UpdateCoupon} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */

  }, {
    key: "updateCoupon",
    value: function updateCoupon(applicationId, campaignId, couponId, body) {
      return this.updateCouponWithHttpInfo(applicationId, campaignId, couponId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Batch of Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/UpdateCouponBatch} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "updateCouponBatchWithHttpInfo",
    value: function updateCouponBatchWithHttpInfo(applicationId, campaignId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling updateCouponBatch");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCouponBatch");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCouponBatch");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/coupons', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Batch of Coupons
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {module:model/UpdateCouponBatch} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "updateCouponBatch",
    value: function updateCouponBatch(applicationId, campaignId, body) {
      return this.updateCouponBatchWithHttpInfo(applicationId, campaignId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Number} rulesetId 
     * @param {module:model/NewRuleset} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Ruleset} and HTTP response
     */

  }, {
    key: "updateRulesetWithHttpInfo",
    value: function updateRulesetWithHttpInfo(applicationId, campaignId, rulesetId, body) {
      var postBody = body; // verify the required parameter 'applicationId' is set

      if (applicationId === undefined || applicationId === null) {
        throw new Error("Missing the required parameter 'applicationId' when calling updateRuleset");
      } // verify the required parameter 'campaignId' is set


      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateRuleset");
      } // verify the required parameter 'rulesetId' is set


      if (rulesetId === undefined || rulesetId === null) {
        throw new Error("Missing the required parameter 'rulesetId' when calling updateRuleset");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateRuleset");
      }

      var pathParams = {
        'applicationId': applicationId,
        'campaignId': campaignId,
        'rulesetId': rulesetId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['manager_auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Ruleset["default"];
      return this.apiClient.callApi('/v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Ruleset
     * @param {Number} applicationId 
     * @param {Number} campaignId 
     * @param {Number} rulesetId 
     * @param {module:model/NewRuleset} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Ruleset}
     */

  }, {
    key: "updateRuleset",
    value: function updateRuleset(applicationId, campaignId, rulesetId, body) {
      return this.updateRulesetWithHttpInfo(applicationId, campaignId, rulesetId, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ManagementApi;
}();

exports["default"] = ManagementApi;