# TalonOne.IncreaseAchievementProgressPerItemEffectProps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievementId** | **Number** | The internal ID of the achievement. | 
**achievementName** | **String** | The name of the achievement. | 
**progressTrackerId** | **Number** | The internal ID of the customer progress tracker. For [on-completion achievements](https://docs.talon.one/docs/product/achievements/overview#recurring-on-completion-achievements), this effect generates a unique ID for each iteration. | [optional] 
**delta** | **Number** | The value by which the customer&#39;s current progress in the achievement has increased. | 
**value** | **Number** | The current progress of the customer in the achievement. | 
**target** | **Number** | The target value to complete the achievement. | 
**isJustCompleted** | **Boolean** | Indicates if the customer has completed the achievement in the current session. | 
**cartItemPosition** | **Number** | The index of the item in the &#x60;cartItem&#x60; object on which the customer&#39;s progress in the achievement was updated. | 
**cartItemSubPosition** | **Number** | For cart items with &#x60;quantity&#x60; &gt; 1, indicates which specific unit of the item the effect applies to. | [optional] 
**bundleIndex** | **Number** | _(With bundles only)_ The position of the specific bundle in the list of bundles created from the same bundle definition. For example, if a customer creates two identical bundles, the first has index &#x60;0&#x60; and the second has index &#x60;1&#x60;. | [optional] 
**bundleName** | **String** | _(With bundles only)_ The name of the bundle definition. | [optional] 


