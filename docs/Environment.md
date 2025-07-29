# TalonOne.Environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID of this entity. | 
**created** | **Date** | The time this entity was created. | 
**applicationId** | **Number** | The ID of the Application that owns this entity. | 
**slots** | [**[SlotDef]**](SlotDef.md) | The slots defined for this application. | 
**functions** | [**[FunctionDef]**](FunctionDef.md) | The functions defined for this application. | 
**templates** | [**[TemplateDef]**](TemplateDef.md) | The templates defined for this application. | 
**variables** | **String** | A stringified version of the environment&#39;s Talang variables scope. | 
**giveawaysPools** | [**[GiveawaysPool]**](GiveawaysPool.md) | The giveaways pools that the application is subscribed to. | [optional] 
**loyaltyPrograms** | [**[LoyaltyProgram]**](LoyaltyProgram.md) | The loyalty programs that the application is subscribed to. | [optional] 
**achievements** | [**[Achievement]**](Achievement.md) | The achievements, linked to the campaigns, belonging to the application. | [optional] 
**attributes** | [**[Attribute]**](Attribute.md) | The attributes that the application is subscribed to. | [optional] 
**additionalCosts** | [**[AccountAdditionalCost]**](AccountAdditionalCost.md) | The additional costs that the application is subscribed to. | [optional] 
**audiences** | [**[Audience]**](Audience.md) | The audiences contained in the account which the application belongs to. | [optional] 
**collections** | [**[Collection]**](Collection.md) | The account-level collections that the application is subscribed to. | [optional] 
**applicationCartItemFilters** | [**[ApplicationCIF]**](ApplicationCIF.md) | The cart item filters belonging to the Application. | [optional] 
**priceTypes** | [**[PriceType]**](PriceType.md) | The price types that this Application can use. | [optional] 


