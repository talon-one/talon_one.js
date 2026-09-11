# TalonOne.AchievementAdditionalPropertiesV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **Number** | The ID of the user that created this achievement. | 
**createdBy** | **String** | Name of the user that created the achievement.  **Note**: This is not available if the user has been deleted.  | [optional] 
**periodEndOverride** | [**TimePoint**](TimePoint.md) |  | [optional] 
**hasProgress** | **Boolean** | Indicates if a customer has made progress in the achievement. | [optional] 
**status** | **String** | The status of the achievement.                                                                                               - &#x60;active&#x60;: The achievement is available to customers. - &#x60;scheduled&#x60;: The achievement has a &#x60;fixedStartDate&#x60; set in the future. - &#x60;expired&#x60;: The achievement&#39;s &#x60;endDate&#x60; is in the past.  | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `scheduled` (value: `"scheduled"`)

* `expired` (value: `"expired"`)




