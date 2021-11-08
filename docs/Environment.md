# TalonOne.Environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique ID for this entity. | 
**created** | **Date** | The exact moment this entity was created. | 
**applicationId** | **Number** | The ID of the application that owns this entity. | 
**slots** | [**[SlotDef]**](SlotDef.md) | The slots defined for this application. | 
**functions** | [**[FunctionDef]**](FunctionDef.md) | The functions defined for this application. | 
**templates** | [**[TemplateDef]**](TemplateDef.md) | The templates defined for this application. | 
**variables** | **String** | A stringified version of the environment&#39;s Talang variables scope | 
**giveawaysPools** | [**[GiveawaysPool]**](GiveawaysPool.md) | The giveaways pools that the application is subscribed to. | [optional] 
**loyaltyPrograms** | [**[LoyaltyProgram]**](LoyaltyProgram.md) | The loyalty programs that the application is subscribed to. | [optional] 
**attributes** | [**[Attribute]**](Attribute.md) | The attributes that the application is subscribed to. | [optional] 
**additionalCosts** | [**[AccountAdditionalCost]**](AccountAdditionalCost.md) | The additional costs that the application is subscribed to. | [optional] 
**audiences** | [**[Audience]**](Audience.md) | The audiences contained in the account which the application belongs to. | [optional] 


