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


import ApiClient from './ApiClient';
import APIError from './model/APIError';
import AcceptCouponEffectProps from './model/AcceptCouponEffectProps';
import AcceptReferralEffectProps from './model/AcceptReferralEffectProps';
import AccessLogEntry from './model/AccessLogEntry';
import Account from './model/Account';
import AccountAnalytics from './model/AccountAnalytics';
import AccountEntity from './model/AccountEntity';
import AccountLimits from './model/AccountLimits';
import AddFreeItemEffectProps from './model/AddFreeItemEffectProps';
import AddLoyaltyPointsEffectProps from './model/AddLoyaltyPointsEffectProps';
import AdditionalCost from './model/AdditionalCost';
import Application from './model/Application';
import ApplicationAPIKey from './model/ApplicationAPIKey';
import ApplicationApiHealth from './model/ApplicationApiHealth';
import ApplicationCustomer from './model/ApplicationCustomer';
import ApplicationCustomerEntity from './model/ApplicationCustomerEntity';
import ApplicationCustomerSearch from './model/ApplicationCustomerSearch';
import ApplicationEntity from './model/ApplicationEntity';
import ApplicationEvent from './model/ApplicationEvent';
import ApplicationSession from './model/ApplicationSession';
import ApplicationSessionEntity from './model/ApplicationSessionEntity';
import Attribute from './model/Attribute';
import AttributesMandatory from './model/AttributesMandatory';
import AttributesSettings from './model/AttributesSettings';
import BaseSamlConnection from './model/BaseSamlConnection';
import Binding from './model/Binding';
import Campaign from './model/Campaign';
import CampaignAnalytics from './model/CampaignAnalytics';
import CampaignCopy from './model/CampaignCopy';
import CampaignEntity from './model/CampaignEntity';
import CampaignSearch from './model/CampaignSearch';
import CampaignSet from './model/CampaignSet';
import CampaignSetBranchNode from './model/CampaignSetBranchNode';
import CampaignSetLeafNode from './model/CampaignSetLeafNode';
import CampaignSetNode from './model/CampaignSetNode';
import CartItem from './model/CartItem';
import CartItemAdjustment from './model/CartItemAdjustment';
import Change from './model/Change';
import ChangeProfilePassword from './model/ChangeProfilePassword';
import CodeGeneratorSettings from './model/CodeGeneratorSettings';
import Coupon from './model/Coupon';
import CouponConstraints from './model/CouponConstraints';
import CouponCreatedEffectProps from './model/CouponCreatedEffectProps';
import CouponRejectionReason from './model/CouponRejectionReason';
import CouponReservations from './model/CouponReservations';
import CouponSearch from './model/CouponSearch';
import CouponValue from './model/CouponValue';
import CreateApplicationAPIKey from './model/CreateApplicationAPIKey';
import CustomerActivityReport from './model/CustomerActivityReport';
import CustomerAnalytics from './model/CustomerAnalytics';
import CustomerInventory from './model/CustomerInventory';
import CustomerProfile from './model/CustomerProfile';
import CustomerProfileSearchQuery from './model/CustomerProfileSearchQuery';
import CustomerSession from './model/CustomerSession';
import CustomerSessionV2 from './model/CustomerSessionV2';
import DeductLoyaltyPointsEffectProps from './model/DeductLoyaltyPointsEffectProps';
import Effect from './model/Effect';
import EffectEntity from './model/EffectEntity';
import EmailEntity from './model/EmailEntity';
import Entity from './model/Entity';
import Environment from './model/Environment';
import ErrorEffectProps from './model/ErrorEffectProps';
import ErrorResponse from './model/ErrorResponse';
import ErrorSource from './model/ErrorSource';
import Event from './model/Event';
import EventType from './model/EventType';
import FeatureFlag from './model/FeatureFlag';
import FeatureFlags from './model/FeatureFlags';
import FeaturesFeed from './model/FeaturesFeed';
import FuncArgDef from './model/FuncArgDef';
import FunctionDef from './model/FunctionDef';
import ImportCoupons from './model/ImportCoupons';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse20010 from './model/InlineResponse20010';
import InlineResponse20011 from './model/InlineResponse20011';
import InlineResponse20012 from './model/InlineResponse20012';
import InlineResponse20013 from './model/InlineResponse20013';
import InlineResponse20014 from './model/InlineResponse20014';
import InlineResponse20015 from './model/InlineResponse20015';
import InlineResponse20016 from './model/InlineResponse20016';
import InlineResponse20017 from './model/InlineResponse20017';
import InlineResponse20018 from './model/InlineResponse20018';
import InlineResponse20019 from './model/InlineResponse20019';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse20020 from './model/InlineResponse20020';
import InlineResponse20021 from './model/InlineResponse20021';
import InlineResponse20022 from './model/InlineResponse20022';
import InlineResponse20023 from './model/InlineResponse20023';
import InlineResponse20024 from './model/InlineResponse20024';
import InlineResponse20025 from './model/InlineResponse20025';
import InlineResponse20026 from './model/InlineResponse20026';
import InlineResponse20027 from './model/InlineResponse20027';
import InlineResponse20028 from './model/InlineResponse20028';
import InlineResponse20029 from './model/InlineResponse20029';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import InlineResponse2006 from './model/InlineResponse2006';
import InlineResponse2007 from './model/InlineResponse2007';
import InlineResponse2008 from './model/InlineResponse2008';
import InlineResponse2009 from './model/InlineResponse2009';
import IntegrationEntity from './model/IntegrationEntity';
import IntegrationEvent from './model/IntegrationEvent';
import IntegrationProfileEntity from './model/IntegrationProfileEntity';
import IntegrationRequest from './model/IntegrationRequest';
import IntegrationState from './model/IntegrationState';
import IntegrationStateV2 from './model/IntegrationStateV2';
import LedgerEntry from './model/LedgerEntry';
import LibraryAttribute from './model/LibraryAttribute';
import LimitConfig from './model/LimitConfig';
import LoginParams from './model/LoginParams';
import Loyalty from './model/Loyalty';
import LoyaltyLedger from './model/LoyaltyLedger';
import LoyaltyLedgerEntry from './model/LoyaltyLedgerEntry';
import LoyaltyMembership from './model/LoyaltyMembership';
import LoyaltyPoints from './model/LoyaltyPoints';
import LoyaltyProgram from './model/LoyaltyProgram';
import LoyaltyProgramBalance from './model/LoyaltyProgramBalance';
import LoyaltyProgramLedgers from './model/LoyaltyProgramLedgers';
import LoyaltySubLedger from './model/LoyaltySubLedger';
import ManagerConfig from './model/ManagerConfig';
import Meta from './model/Meta';
import MiscUpdateUserLatestFeature from './model/MiscUpdateUserLatestFeature';
import ModelExport from './model/ModelExport';
import ModelImport from './model/ModelImport';
import MultiApplicationEntity from './model/MultiApplicationEntity';
import MutableEntity from './model/MutableEntity';
import NewAccount from './model/NewAccount';
import NewAccountSignUp from './model/NewAccountSignUp';
import NewApplication from './model/NewApplication';
import NewApplicationAPIKey from './model/NewApplicationAPIKey';
import NewAttribute from './model/NewAttribute';
import NewCampaign from './model/NewCampaign';
import NewCampaignSet from './model/NewCampaignSet';
import NewCoupons from './model/NewCoupons';
import NewCustomerProfile from './model/NewCustomerProfile';
import NewCustomerSession from './model/NewCustomerSession';
import NewCustomerSessionV2 from './model/NewCustomerSessionV2';
import NewEvent from './model/NewEvent';
import NewEventType from './model/NewEventType';
import NewFeatureFlags from './model/NewFeatureFlags';
import NewImport from './model/NewImport';
import NewInvitation from './model/NewInvitation';
import NewInviteEmail from './model/NewInviteEmail';
import NewLoyaltyProgram from './model/NewLoyaltyProgram';
import NewPassword from './model/NewPassword';
import NewPasswordEmail from './model/NewPasswordEmail';
import NewReferral from './model/NewReferral';
import NewRole from './model/NewRole';
import NewRuleset from './model/NewRuleset';
import NewSamlConnection from './model/NewSamlConnection';
import NewTemplateDef from './model/NewTemplateDef';
import NewUser from './model/NewUser';
import NewWebhook from './model/NewWebhook';
import Notification from './model/Notification';
import RedeemReferralEffectProps from './model/RedeemReferralEffectProps';
import Referral from './model/Referral';
import ReferralCreatedEffectProps from './model/ReferralCreatedEffectProps';
import ReferralRejectionReason from './model/ReferralRejectionReason';
import RejectCouponEffectProps from './model/RejectCouponEffectProps';
import RejectReferralEffectProps from './model/RejectReferralEffectProps';
import Role from './model/Role';
import RoleAssign from './model/RoleAssign';
import RoleMembership from './model/RoleMembership';
import RollbackCouponEffectProps from './model/RollbackCouponEffectProps';
import RollbackDiscountEffectProps from './model/RollbackDiscountEffectProps';
import Rule from './model/Rule';
import Ruleset from './model/Ruleset';
import SamlConnection from './model/SamlConnection';
import SamlConnectionMetadata from './model/SamlConnectionMetadata';
import SamlLoginEndpoint from './model/SamlLoginEndpoint';
import Session from './model/Session';
import SetDiscountEffectProps from './model/SetDiscountEffectProps';
import SetDiscountPerItemEffectProps from './model/SetDiscountPerItemEffectProps';
import ShowBundleMetadataEffectProps from './model/ShowBundleMetadataEffectProps';
import ShowNotificationEffectProps from './model/ShowNotificationEffectProps';
import SlotDef from './model/SlotDef';
import TemplateArgDef from './model/TemplateArgDef';
import TemplateDef from './model/TemplateDef';
import TriggerWebhookEffectProps from './model/TriggerWebhookEffectProps';
import UpdateAccount from './model/UpdateAccount';
import UpdateApplication from './model/UpdateApplication';
import UpdateAttributeEffectProps from './model/UpdateAttributeEffectProps';
import UpdateCampaign from './model/UpdateCampaign';
import UpdateCoupon from './model/UpdateCoupon';
import UpdateCouponBatch from './model/UpdateCouponBatch';
import UpdateLoyaltyProgram from './model/UpdateLoyaltyProgram';
import UpdateRole from './model/UpdateRole';
import UpdateUser from './model/UpdateUser';
import User from './model/User';
import UserEntity from './model/UserEntity';
import Webhook from './model/Webhook';
import WebhookActivationLogEntry from './model/WebhookActivationLogEntry';
import WebhookLogEntry from './model/WebhookLogEntry';
import IntegrationApi from './api/IntegrationApi';
import ManagementApi from './api/ManagementApi';


/**
* Talon.One API SDK for Javascript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TalonOne = require('index'); // See note below*.
* var xxxSvc = new TalonOne.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TalonOne.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TalonOne.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TalonOne.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The APIError model constructor.
     * @property {module:model/APIError}
     */
    APIError,

    /**
     * The AcceptCouponEffectProps model constructor.
     * @property {module:model/AcceptCouponEffectProps}
     */
    AcceptCouponEffectProps,

    /**
     * The AcceptReferralEffectProps model constructor.
     * @property {module:model/AcceptReferralEffectProps}
     */
    AcceptReferralEffectProps,

    /**
     * The AccessLogEntry model constructor.
     * @property {module:model/AccessLogEntry}
     */
    AccessLogEntry,

    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account,

    /**
     * The AccountAnalytics model constructor.
     * @property {module:model/AccountAnalytics}
     */
    AccountAnalytics,

    /**
     * The AccountEntity model constructor.
     * @property {module:model/AccountEntity}
     */
    AccountEntity,

    /**
     * The AccountLimits model constructor.
     * @property {module:model/AccountLimits}
     */
    AccountLimits,

    /**
     * The AddFreeItemEffectProps model constructor.
     * @property {module:model/AddFreeItemEffectProps}
     */
    AddFreeItemEffectProps,

    /**
     * The AddLoyaltyPointsEffectProps model constructor.
     * @property {module:model/AddLoyaltyPointsEffectProps}
     */
    AddLoyaltyPointsEffectProps,

    /**
     * The AdditionalCost model constructor.
     * @property {module:model/AdditionalCost}
     */
    AdditionalCost,

    /**
     * The Application model constructor.
     * @property {module:model/Application}
     */
    Application,

    /**
     * The ApplicationAPIKey model constructor.
     * @property {module:model/ApplicationAPIKey}
     */
    ApplicationAPIKey,

    /**
     * The ApplicationApiHealth model constructor.
     * @property {module:model/ApplicationApiHealth}
     */
    ApplicationApiHealth,

    /**
     * The ApplicationCustomer model constructor.
     * @property {module:model/ApplicationCustomer}
     */
    ApplicationCustomer,

    /**
     * The ApplicationCustomerEntity model constructor.
     * @property {module:model/ApplicationCustomerEntity}
     */
    ApplicationCustomerEntity,

    /**
     * The ApplicationCustomerSearch model constructor.
     * @property {module:model/ApplicationCustomerSearch}
     */
    ApplicationCustomerSearch,

    /**
     * The ApplicationEntity model constructor.
     * @property {module:model/ApplicationEntity}
     */
    ApplicationEntity,

    /**
     * The ApplicationEvent model constructor.
     * @property {module:model/ApplicationEvent}
     */
    ApplicationEvent,

    /**
     * The ApplicationSession model constructor.
     * @property {module:model/ApplicationSession}
     */
    ApplicationSession,

    /**
     * The ApplicationSessionEntity model constructor.
     * @property {module:model/ApplicationSessionEntity}
     */
    ApplicationSessionEntity,

    /**
     * The Attribute model constructor.
     * @property {module:model/Attribute}
     */
    Attribute,

    /**
     * The AttributesMandatory model constructor.
     * @property {module:model/AttributesMandatory}
     */
    AttributesMandatory,

    /**
     * The AttributesSettings model constructor.
     * @property {module:model/AttributesSettings}
     */
    AttributesSettings,

    /**
     * The BaseSamlConnection model constructor.
     * @property {module:model/BaseSamlConnection}
     */
    BaseSamlConnection,

    /**
     * The Binding model constructor.
     * @property {module:model/Binding}
     */
    Binding,

    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign,

    /**
     * The CampaignAnalytics model constructor.
     * @property {module:model/CampaignAnalytics}
     */
    CampaignAnalytics,

    /**
     * The CampaignCopy model constructor.
     * @property {module:model/CampaignCopy}
     */
    CampaignCopy,

    /**
     * The CampaignEntity model constructor.
     * @property {module:model/CampaignEntity}
     */
    CampaignEntity,

    /**
     * The CampaignSearch model constructor.
     * @property {module:model/CampaignSearch}
     */
    CampaignSearch,

    /**
     * The CampaignSet model constructor.
     * @property {module:model/CampaignSet}
     */
    CampaignSet,

    /**
     * The CampaignSetBranchNode model constructor.
     * @property {module:model/CampaignSetBranchNode}
     */
    CampaignSetBranchNode,

    /**
     * The CampaignSetLeafNode model constructor.
     * @property {module:model/CampaignSetLeafNode}
     */
    CampaignSetLeafNode,

    /**
     * The CampaignSetNode model constructor.
     * @property {module:model/CampaignSetNode}
     */
    CampaignSetNode,

    /**
     * The CartItem model constructor.
     * @property {module:model/CartItem}
     */
    CartItem,

    /**
     * The CartItemAdjustment model constructor.
     * @property {module:model/CartItemAdjustment}
     */
    CartItemAdjustment,

    /**
     * The Change model constructor.
     * @property {module:model/Change}
     */
    Change,

    /**
     * The ChangeProfilePassword model constructor.
     * @property {module:model/ChangeProfilePassword}
     */
    ChangeProfilePassword,

    /**
     * The CodeGeneratorSettings model constructor.
     * @property {module:model/CodeGeneratorSettings}
     */
    CodeGeneratorSettings,

    /**
     * The Coupon model constructor.
     * @property {module:model/Coupon}
     */
    Coupon,

    /**
     * The CouponConstraints model constructor.
     * @property {module:model/CouponConstraints}
     */
    CouponConstraints,

    /**
     * The CouponCreatedEffectProps model constructor.
     * @property {module:model/CouponCreatedEffectProps}
     */
    CouponCreatedEffectProps,

    /**
     * The CouponRejectionReason model constructor.
     * @property {module:model/CouponRejectionReason}
     */
    CouponRejectionReason,

    /**
     * The CouponReservations model constructor.
     * @property {module:model/CouponReservations}
     */
    CouponReservations,

    /**
     * The CouponSearch model constructor.
     * @property {module:model/CouponSearch}
     */
    CouponSearch,

    /**
     * The CouponValue model constructor.
     * @property {module:model/CouponValue}
     */
    CouponValue,

    /**
     * The CreateApplicationAPIKey model constructor.
     * @property {module:model/CreateApplicationAPIKey}
     */
    CreateApplicationAPIKey,

    /**
     * The CustomerActivityReport model constructor.
     * @property {module:model/CustomerActivityReport}
     */
    CustomerActivityReport,

    /**
     * The CustomerAnalytics model constructor.
     * @property {module:model/CustomerAnalytics}
     */
    CustomerAnalytics,

    /**
     * The CustomerInventory model constructor.
     * @property {module:model/CustomerInventory}
     */
    CustomerInventory,

    /**
     * The CustomerProfile model constructor.
     * @property {module:model/CustomerProfile}
     */
    CustomerProfile,

    /**
     * The CustomerProfileSearchQuery model constructor.
     * @property {module:model/CustomerProfileSearchQuery}
     */
    CustomerProfileSearchQuery,

    /**
     * The CustomerSession model constructor.
     * @property {module:model/CustomerSession}
     */
    CustomerSession,

    /**
     * The CustomerSessionV2 model constructor.
     * @property {module:model/CustomerSessionV2}
     */
    CustomerSessionV2,

    /**
     * The DeductLoyaltyPointsEffectProps model constructor.
     * @property {module:model/DeductLoyaltyPointsEffectProps}
     */
    DeductLoyaltyPointsEffectProps,

    /**
     * The Effect model constructor.
     * @property {module:model/Effect}
     */
    Effect,

    /**
     * The EffectEntity model constructor.
     * @property {module:model/EffectEntity}
     */
    EffectEntity,

    /**
     * The EmailEntity model constructor.
     * @property {module:model/EmailEntity}
     */
    EmailEntity,

    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity,

    /**
     * The Environment model constructor.
     * @property {module:model/Environment}
     */
    Environment,

    /**
     * The ErrorEffectProps model constructor.
     * @property {module:model/ErrorEffectProps}
     */
    ErrorEffectProps,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The ErrorSource model constructor.
     * @property {module:model/ErrorSource}
     */
    ErrorSource,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventType model constructor.
     * @property {module:model/EventType}
     */
    EventType,

    /**
     * The FeatureFlag model constructor.
     * @property {module:model/FeatureFlag}
     */
    FeatureFlag,

    /**
     * The FeatureFlags model constructor.
     * @property {module:model/FeatureFlags}
     */
    FeatureFlags,

    /**
     * The FeaturesFeed model constructor.
     * @property {module:model/FeaturesFeed}
     */
    FeaturesFeed,

    /**
     * The FuncArgDef model constructor.
     * @property {module:model/FuncArgDef}
     */
    FuncArgDef,

    /**
     * The FunctionDef model constructor.
     * @property {module:model/FunctionDef}
     */
    FunctionDef,

    /**
     * The ImportCoupons model constructor.
     * @property {module:model/ImportCoupons}
     */
    ImportCoupons,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020,

    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021,

    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022,

    /**
     * The InlineResponse20023 model constructor.
     * @property {module:model/InlineResponse20023}
     */
    InlineResponse20023,

    /**
     * The InlineResponse20024 model constructor.
     * @property {module:model/InlineResponse20024}
     */
    InlineResponse20024,

    /**
     * The InlineResponse20025 model constructor.
     * @property {module:model/InlineResponse20025}
     */
    InlineResponse20025,

    /**
     * The InlineResponse20026 model constructor.
     * @property {module:model/InlineResponse20026}
     */
    InlineResponse20026,

    /**
     * The InlineResponse20027 model constructor.
     * @property {module:model/InlineResponse20027}
     */
    InlineResponse20027,

    /**
     * The InlineResponse20028 model constructor.
     * @property {module:model/InlineResponse20028}
     */
    InlineResponse20028,

    /**
     * The InlineResponse20029 model constructor.
     * @property {module:model/InlineResponse20029}
     */
    InlineResponse20029,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The IntegrationEntity model constructor.
     * @property {module:model/IntegrationEntity}
     */
    IntegrationEntity,

    /**
     * The IntegrationEvent model constructor.
     * @property {module:model/IntegrationEvent}
     */
    IntegrationEvent,

    /**
     * The IntegrationProfileEntity model constructor.
     * @property {module:model/IntegrationProfileEntity}
     */
    IntegrationProfileEntity,

    /**
     * The IntegrationRequest model constructor.
     * @property {module:model/IntegrationRequest}
     */
    IntegrationRequest,

    /**
     * The IntegrationState model constructor.
     * @property {module:model/IntegrationState}
     */
    IntegrationState,

    /**
     * The IntegrationStateV2 model constructor.
     * @property {module:model/IntegrationStateV2}
     */
    IntegrationStateV2,

    /**
     * The LedgerEntry model constructor.
     * @property {module:model/LedgerEntry}
     */
    LedgerEntry,

    /**
     * The LibraryAttribute model constructor.
     * @property {module:model/LibraryAttribute}
     */
    LibraryAttribute,

    /**
     * The LimitConfig model constructor.
     * @property {module:model/LimitConfig}
     */
    LimitConfig,

    /**
     * The LoginParams model constructor.
     * @property {module:model/LoginParams}
     */
    LoginParams,

    /**
     * The Loyalty model constructor.
     * @property {module:model/Loyalty}
     */
    Loyalty,

    /**
     * The LoyaltyLedger model constructor.
     * @property {module:model/LoyaltyLedger}
     */
    LoyaltyLedger,

    /**
     * The LoyaltyLedgerEntry model constructor.
     * @property {module:model/LoyaltyLedgerEntry}
     */
    LoyaltyLedgerEntry,

    /**
     * The LoyaltyMembership model constructor.
     * @property {module:model/LoyaltyMembership}
     */
    LoyaltyMembership,

    /**
     * The LoyaltyPoints model constructor.
     * @property {module:model/LoyaltyPoints}
     */
    LoyaltyPoints,

    /**
     * The LoyaltyProgram model constructor.
     * @property {module:model/LoyaltyProgram}
     */
    LoyaltyProgram,

    /**
     * The LoyaltyProgramBalance model constructor.
     * @property {module:model/LoyaltyProgramBalance}
     */
    LoyaltyProgramBalance,

    /**
     * The LoyaltyProgramLedgers model constructor.
     * @property {module:model/LoyaltyProgramLedgers}
     */
    LoyaltyProgramLedgers,

    /**
     * The LoyaltySubLedger model constructor.
     * @property {module:model/LoyaltySubLedger}
     */
    LoyaltySubLedger,

    /**
     * The ManagerConfig model constructor.
     * @property {module:model/ManagerConfig}
     */
    ManagerConfig,

    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta,

    /**
     * The MiscUpdateUserLatestFeature model constructor.
     * @property {module:model/MiscUpdateUserLatestFeature}
     */
    MiscUpdateUserLatestFeature,

    /**
     * The ModelExport model constructor.
     * @property {module:model/ModelExport}
     */
    ModelExport,

    /**
     * The ModelImport model constructor.
     * @property {module:model/ModelImport}
     */
    ModelImport,

    /**
     * The MultiApplicationEntity model constructor.
     * @property {module:model/MultiApplicationEntity}
     */
    MultiApplicationEntity,

    /**
     * The MutableEntity model constructor.
     * @property {module:model/MutableEntity}
     */
    MutableEntity,

    /**
     * The NewAccount model constructor.
     * @property {module:model/NewAccount}
     */
    NewAccount,

    /**
     * The NewAccountSignUp model constructor.
     * @property {module:model/NewAccountSignUp}
     */
    NewAccountSignUp,

    /**
     * The NewApplication model constructor.
     * @property {module:model/NewApplication}
     */
    NewApplication,

    /**
     * The NewApplicationAPIKey model constructor.
     * @property {module:model/NewApplicationAPIKey}
     */
    NewApplicationAPIKey,

    /**
     * The NewAttribute model constructor.
     * @property {module:model/NewAttribute}
     */
    NewAttribute,

    /**
     * The NewCampaign model constructor.
     * @property {module:model/NewCampaign}
     */
    NewCampaign,

    /**
     * The NewCampaignSet model constructor.
     * @property {module:model/NewCampaignSet}
     */
    NewCampaignSet,

    /**
     * The NewCoupons model constructor.
     * @property {module:model/NewCoupons}
     */
    NewCoupons,

    /**
     * The NewCustomerProfile model constructor.
     * @property {module:model/NewCustomerProfile}
     */
    NewCustomerProfile,

    /**
     * The NewCustomerSession model constructor.
     * @property {module:model/NewCustomerSession}
     */
    NewCustomerSession,

    /**
     * The NewCustomerSessionV2 model constructor.
     * @property {module:model/NewCustomerSessionV2}
     */
    NewCustomerSessionV2,

    /**
     * The NewEvent model constructor.
     * @property {module:model/NewEvent}
     */
    NewEvent,

    /**
     * The NewEventType model constructor.
     * @property {module:model/NewEventType}
     */
    NewEventType,

    /**
     * The NewFeatureFlags model constructor.
     * @property {module:model/NewFeatureFlags}
     */
    NewFeatureFlags,

    /**
     * The NewImport model constructor.
     * @property {module:model/NewImport}
     */
    NewImport,

    /**
     * The NewInvitation model constructor.
     * @property {module:model/NewInvitation}
     */
    NewInvitation,

    /**
     * The NewInviteEmail model constructor.
     * @property {module:model/NewInviteEmail}
     */
    NewInviteEmail,

    /**
     * The NewLoyaltyProgram model constructor.
     * @property {module:model/NewLoyaltyProgram}
     */
    NewLoyaltyProgram,

    /**
     * The NewPassword model constructor.
     * @property {module:model/NewPassword}
     */
    NewPassword,

    /**
     * The NewPasswordEmail model constructor.
     * @property {module:model/NewPasswordEmail}
     */
    NewPasswordEmail,

    /**
     * The NewReferral model constructor.
     * @property {module:model/NewReferral}
     */
    NewReferral,

    /**
     * The NewRole model constructor.
     * @property {module:model/NewRole}
     */
    NewRole,

    /**
     * The NewRuleset model constructor.
     * @property {module:model/NewRuleset}
     */
    NewRuleset,

    /**
     * The NewSamlConnection model constructor.
     * @property {module:model/NewSamlConnection}
     */
    NewSamlConnection,

    /**
     * The NewTemplateDef model constructor.
     * @property {module:model/NewTemplateDef}
     */
    NewTemplateDef,

    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser,

    /**
     * The NewWebhook model constructor.
     * @property {module:model/NewWebhook}
     */
    NewWebhook,

    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification,

    /**
     * The RedeemReferralEffectProps model constructor.
     * @property {module:model/RedeemReferralEffectProps}
     */
    RedeemReferralEffectProps,

    /**
     * The Referral model constructor.
     * @property {module:model/Referral}
     */
    Referral,

    /**
     * The ReferralCreatedEffectProps model constructor.
     * @property {module:model/ReferralCreatedEffectProps}
     */
    ReferralCreatedEffectProps,

    /**
     * The ReferralRejectionReason model constructor.
     * @property {module:model/ReferralRejectionReason}
     */
    ReferralRejectionReason,

    /**
     * The RejectCouponEffectProps model constructor.
     * @property {module:model/RejectCouponEffectProps}
     */
    RejectCouponEffectProps,

    /**
     * The RejectReferralEffectProps model constructor.
     * @property {module:model/RejectReferralEffectProps}
     */
    RejectReferralEffectProps,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The RoleAssign model constructor.
     * @property {module:model/RoleAssign}
     */
    RoleAssign,

    /**
     * The RoleMembership model constructor.
     * @property {module:model/RoleMembership}
     */
    RoleMembership,

    /**
     * The RollbackCouponEffectProps model constructor.
     * @property {module:model/RollbackCouponEffectProps}
     */
    RollbackCouponEffectProps,

    /**
     * The RollbackDiscountEffectProps model constructor.
     * @property {module:model/RollbackDiscountEffectProps}
     */
    RollbackDiscountEffectProps,

    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule,

    /**
     * The Ruleset model constructor.
     * @property {module:model/Ruleset}
     */
    Ruleset,

    /**
     * The SamlConnection model constructor.
     * @property {module:model/SamlConnection}
     */
    SamlConnection,

    /**
     * The SamlConnectionMetadata model constructor.
     * @property {module:model/SamlConnectionMetadata}
     */
    SamlConnectionMetadata,

    /**
     * The SamlLoginEndpoint model constructor.
     * @property {module:model/SamlLoginEndpoint}
     */
    SamlLoginEndpoint,

    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session,

    /**
     * The SetDiscountEffectProps model constructor.
     * @property {module:model/SetDiscountEffectProps}
     */
    SetDiscountEffectProps,

    /**
     * The SetDiscountPerItemEffectProps model constructor.
     * @property {module:model/SetDiscountPerItemEffectProps}
     */
    SetDiscountPerItemEffectProps,

    /**
     * The ShowBundleMetadataEffectProps model constructor.
     * @property {module:model/ShowBundleMetadataEffectProps}
     */
    ShowBundleMetadataEffectProps,

    /**
     * The ShowNotificationEffectProps model constructor.
     * @property {module:model/ShowNotificationEffectProps}
     */
    ShowNotificationEffectProps,

    /**
     * The SlotDef model constructor.
     * @property {module:model/SlotDef}
     */
    SlotDef,

    /**
     * The TemplateArgDef model constructor.
     * @property {module:model/TemplateArgDef}
     */
    TemplateArgDef,

    /**
     * The TemplateDef model constructor.
     * @property {module:model/TemplateDef}
     */
    TemplateDef,

    /**
     * The TriggerWebhookEffectProps model constructor.
     * @property {module:model/TriggerWebhookEffectProps}
     */
    TriggerWebhookEffectProps,

    /**
     * The UpdateAccount model constructor.
     * @property {module:model/UpdateAccount}
     */
    UpdateAccount,

    /**
     * The UpdateApplication model constructor.
     * @property {module:model/UpdateApplication}
     */
    UpdateApplication,

    /**
     * The UpdateAttributeEffectProps model constructor.
     * @property {module:model/UpdateAttributeEffectProps}
     */
    UpdateAttributeEffectProps,

    /**
     * The UpdateCampaign model constructor.
     * @property {module:model/UpdateCampaign}
     */
    UpdateCampaign,

    /**
     * The UpdateCoupon model constructor.
     * @property {module:model/UpdateCoupon}
     */
    UpdateCoupon,

    /**
     * The UpdateCouponBatch model constructor.
     * @property {module:model/UpdateCouponBatch}
     */
    UpdateCouponBatch,

    /**
     * The UpdateLoyaltyProgram model constructor.
     * @property {module:model/UpdateLoyaltyProgram}
     */
    UpdateLoyaltyProgram,

    /**
     * The UpdateRole model constructor.
     * @property {module:model/UpdateRole}
     */
    UpdateRole,

    /**
     * The UpdateUser model constructor.
     * @property {module:model/UpdateUser}
     */
    UpdateUser,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserEntity model constructor.
     * @property {module:model/UserEntity}
     */
    UserEntity,

    /**
     * The Webhook model constructor.
     * @property {module:model/Webhook}
     */
    Webhook,

    /**
     * The WebhookActivationLogEntry model constructor.
     * @property {module:model/WebhookActivationLogEntry}
     */
    WebhookActivationLogEntry,

    /**
     * The WebhookLogEntry model constructor.
     * @property {module:model/WebhookLogEntry}
     */
    WebhookLogEntry,

    /**
    * The IntegrationApi service constructor.
    * @property {module:api/IntegrationApi}
    */
    IntegrationApi,

    /**
    * The ManagementApi service constructor.
    * @property {module:api/ManagementApi}
    */
    ManagementApi
};
