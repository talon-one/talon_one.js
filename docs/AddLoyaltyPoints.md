# TalonOne.AddLoyaltyPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | Amount of loyalty points. | 
**name** | **String** | Name / reason for the point addition. | [optional] 
**validityDuration** | **String** | The time format is either: - &#x60;immediate&#x60; or, - an **integer** followed by one letter indicating the time unit.  Examples: &#x60;immediate&#x60;, &#x60;30s&#x60;, &#x60;40m&#x60;, &#x60;1h&#x60;, &#x60;5D&#x60;, &#x60;7W&#x60;, &#x60;10M&#x60;.  Available units:  - &#x60;s&#x60;: seconds - &#x60;m&#x60;: minutes - &#x60;h&#x60;: hours - &#x60;D&#x60;: days - &#x60;W&#x60;: weeks - &#x60;M&#x60;: months  You can round certain units up or down: - &#x60;_D&#x60; for rounding down days only. Signifies the start of the day. - &#x60;_U&#x60; for rounding up days, weeks and months. Signifies the end of the day, week, or month.  If passed, &#x60;validUntil&#x60; should be omitted.  | [optional] 
**validUntil** | **Date** | Date and time when points should expire. The value should be provided in RFC 3339 format. If passed, &#x60;validityDuration&#x60; should be omitted.  | [optional] 
**pendingDuration** | **String** | The amount of time before the points are considered valid.  The time format is either: - &#x60;immediate&#x60; or, - an **integer** followed by one letter indicating the time unit.  Examples: &#x60;immediate&#x60;, &#x60;30s&#x60;, &#x60;40m&#x60;, &#x60;1h&#x60;, &#x60;5D&#x60;, &#x60;7W&#x60;, &#x60;10M&#x60;.  Available units:  - &#x60;s&#x60;: seconds - &#x60;m&#x60;: minutes - &#x60;h&#x60;: hours - &#x60;D&#x60;: days - &#x60;W&#x60;: weeks - &#x60;M&#x60;: months  You can round certain units up or down: - &#x60;_D&#x60; for rounding down days only. Signifies the start of the day. - &#x60;_U&#x60; for rounding up days, weeks and months. Signifies the end of the day, week, or month.  | [optional] 
**pendingUntil** | **Date** | Date and time after the points are considered valid. The value should be provided in RFC 3339 format. If passed, &#x60;pendingDuration&#x60; should be omitted.  | [optional] 
**subledgerId** | **String** | ID of the subledger the points are added to. If there is no existing subledger with this ID, the subledger is created automatically. | [optional] 
**applicationId** | **Number** | ID of the Application that is connected to the loyalty program. It is displayed in your Talon.One deployment URL. | [optional] 


