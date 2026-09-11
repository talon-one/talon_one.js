# TalonOne.Binding

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A descriptive name for the value to be bound. | 
**type** | **String** | The kind of binding. Possible values are: - &#x60;bundle&#x60; - &#x60;cartItemFilter&#x60; - &#x60;subledgerBalance&#x60; - &#x60;templateParameter&#x60;  | [optional] 
**expression** | **[Object]** | A Talang expression that is evaluated, and its result is bound to the name of the binding. The first element must be one of the functions or operators supported by Talang, followed by its arguments. The arguments can be strings, numbers, or nested expressions. For example: - &#x60;[\&quot;list\&quot;, \&quot;10014\&quot;, \&quot;10015\&quot;]&#x60; calls the &#x60;list&#x60; function to build a list of strings. - &#x60;[\&quot;+\&quot;, 2, 0]&#x60; uses the &#x60;+&#x60; operator to add two numbers.  | 
**valueType** | **String** | The data type of the value. One of the following: - &#x60;string&#x60; - &#x60;number&#x60; - &#x60;boolean&#x60;  | [optional] 
**minValue** | **Number** | The minimum value allowed for this placeholder. | [optional] 
**maxValue** | **Number** | The maximum value allowed for this placeholder. | [optional] 
**attributeId** | **Number** | Identifier of the attribute attached to the placeholder. | [optional] 
**description** | **String** | Description of the placeholder field and its value in the template. This text can be shown when creating campaigns from this template. | [optional] 


