# TalonOne.Achievement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**name** | **String** | The internal name of the achievement used in API requests.  **Note**: The name should start with a letter. This cannot be changed after the achievement has been created.  | 
**title** | **String** | The display name for the achievement in the Campaign Manager. | 
**description** | **String** | A description of the achievement. | 
**target** | **Number** | The required number of actions or the transactional milestone to complete the achievement. | 
**period** | **String** | The relative duration after which the achievement ends and resets for a particular customer profile.  **Note**: The &#x60;period&#x60; does not start when the achievement is created.  The period is a **positive real number** followed by one letter indicating the time unit.  Examples: &#x60;30s&#x60;, &#x60;40m&#x60;, &#x60;1h&#x60;, &#x60;5D&#x60;, &#x60;7W&#x60;, &#x60;10M&#x60;, &#x60;15Y&#x60;.  Available units:  - &#x60;s&#x60;: seconds - &#x60;m&#x60;: minutes - &#x60;h&#x60;: hours - &#x60;D&#x60;: days - &#x60;W&#x60;: weeks - &#x60;M&#x60;: months - &#x60;Y&#x60;: years  You can also round certain units down to the beginning of period and up to the end of period.: - &#x60;_D&#x60; for rounding down days only. Signifies the start of the day. Example: &#x60;30D_D&#x60; - &#x60;_U&#x60; for rounding up days, weeks, months and years. Signifies the end of the day, week, month or year. Example: &#x60;23W_U&#x60;  **Note**: You can either use the round down and round up option or set an absolute period.  | 
**periodEndOverride** | [**TimePoint**](TimePoint.md) |  | [optional] 
**campaignId** | **Number** | ID of the campaign, to which the achievement belongs to | 
**userId** | **Number** | ID of the user that created this achievement. | 
**createdBy** | **String** | Name of the user that created the achievement.  **Note**: This is not available if the user has been deleted.  | 
**hasProgress** | **Boolean** | Indicates if a customer has made progress in the achievement. | [optional] 


