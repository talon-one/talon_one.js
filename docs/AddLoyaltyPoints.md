# TalonOne.AddLoyaltyPoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **Number** | Amount of loyalty points. | 
**name** | **String** | Name / reason for the point addition. | [optional] 
**validityDuration** | **String** | The duration after which the added loyalty points should expire. The time format is an integer followed by one letter indicating the time unit, like &#39;30s&#39;, &#39;40m&#39;, &#39;1h&#39;, &#39;5D&#39;, &#39;7W&#39;, or 10M&#39;. These rounding suffixes are also supported:   - &#39;_D&#39; for rounding down. Can be used as a suffix after &#39;D&#39;, and signifies the start of the day.   - &#39;_U&#39; for rounding up. Can be used as a suffix after &#39;D&#39;, &#39;W&#39;, and &#39;M&#39;, and signifies the end of the day, week, and month.   If passed, &#x60;validUntil&#x60; should be omitted.  | [optional] 
**validUntil** | **Date** | Date and time when points should expire. The value should be provided in RFC 3339 format. If passed, &#x60;validityDuration&#x60; should be omitted.  | [optional] 
**pendingDuration** | **String** | The amount of time before the points are considered valid. The time format is an integer followed by one letter indicating the time unit, like &#39;30s&#39;, &#39;40m&#39;, &#39;1h&#39;, &#39;5D&#39;, &#39;7W&#39;, or 10M&#39;. These rounding suffixes are also supported:   - &#39;_D&#39; for rounding down. Can be used as a suffix after &#39;D&#39;, and signifies the start of the day.   - &#39;_U&#39; for rounding up. Can be used as a suffix after &#39;D&#39;, &#39;W&#39;, and &#39;M&#39;, and signifies the end of the day, week, and month. If passed, &#x60;pendingUntil&#x60; should be omitted.  | [optional] 
**pendingUntil** | **Date** | Date and time after the points are considered valid. The value should be provided in RFC 3339 format. If passed, &#x60;pendingDuration&#x60; should be omitted.  | [optional] 
**subledgerId** | **String** | ID of the subledger the points are added to. If there is no existing subledger with this ID, the subledger is created automatically. | [optional] 
**applicationId** | **Number** | ID of the Application that is connected to the loyalty program. It is displayed in your Talon.One deployment URL. | [optional] 


