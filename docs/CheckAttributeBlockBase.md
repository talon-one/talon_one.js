# TalonOne.CheckAttributeBlockBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this block. | [optional] [readonly] 
**type** | **String** | Identifies the block variant and determines which additional properties are present in it. | 
**tags** | **[String]** | Semantic labels attached to this block. | [optional] [readonly] 
**operator** | **String** | The comparison operator applied to the attribute. | 
**attribute** | [**Object**](.md) | The attribute path identifier (e.g. \&quot;$Session.Total\&quot;). | 
**value** | [**Object**](.md) | The comparison value for scalar operators. | [optional] 
**min** | [**Object**](.md) | The minimum value allowed for the &#x60;between&#x60; operator. | [optional] 
**max** | [**Object**](.md) | The maximum value allowed for the &#x60;between&#x60; operator. | [optional] 
**start** | [**Object**](.md) | The start value for the &#x60;within&#x60; operator. | [optional] 
**end** | [**Object**](.md) | The end value for the &#x60;within&#x60; operator. | [optional] 
**startInclusive** | **Boolean** | When &#x60;true&#x60;, the &#x60;start&#x60; value is included in the range for the &#x60;within&#x60; operator. | [optional] 
**endInclusive** | **Boolean** | When &#x60;true&#x60;, the &#x60;end&#x60; value is included in the range for the &#x60;within&#x60; operator. | [optional] 
**timezoneInsensitive** | **Boolean** | Indicates whether the &#x60;within&#x60; operator ignores time zones and compares the wall-clock time only. When &#x60;false&#x60;, time zones are taken into account. | [optional] 
**values** | [**Object**](.md) | The set of values to match against for list operators. For location operators (&#x60;in&#x60;, &#x60;not(in)&#x60;), an array of objects with a &#x60;geometry&#x60; (see &#x60;GeoJSONGeometry&#x60;) and an optional &#x60;name&#x60;, or a string reference to a list attribute. | [optional] 
**count** | [**Object**](.md) | The count threshold for &#x60;containsAtLeast&#x60; and &#x60;containsExactly&#x60; operators. | [optional] 
**onFailure** | **[Object]** | Promotion blocks evaluated when this block fails or returns false. | [optional] 



## Enum: OperatorEnum


* `equals` (value: `"equals"`)

* `not(equals)` (value: `"not(equals)"`)

* `lessThan` (value: `"lessThan"`)

* `lessThanOrEqual` (value: `"lessThanOrEqual"`)

* `greaterThan` (value: `"greaterThan"`)

* `greaterThanOrEqual` (value: `"greaterThanOrEqual"`)

* `between` (value: `"between"`)

* `contains` (value: `"contains"`)

* `not(contains)` (value: `"not(contains)"`)

* `matchesRegexp` (value: `"matchesRegexp"`)

* `startsWith` (value: `"startsWith"`)

* `endsWith` (value: `"endsWith"`)

* `oneOf` (value: `"oneOf"`)

* `not(oneOf)` (value: `"not(oneOf)"`)

* `inCollection` (value: `"inCollection"`)

* `not(inCollection)` (value: `"not(inCollection)"`)

* `empty` (value: `"empty"`)

* `not(empty)` (value: `"not(empty)"`)

* `exists` (value: `"exists"`)

* `not(exists)` (value: `"not(exists)"`)

* `isTrue` (value: `"isTrue"`)

* `isFalse` (value: `"isFalse"`)

* `containsAtLeast` (value: `"containsAtLeast"`)

* `containsExactly` (value: `"containsExactly"`)

* `containsOneOf` (value: `"containsOneOf"`)

* `containsNoneOf` (value: `"containsNoneOf"`)

* `containsAllOf` (value: `"containsAllOf"`)

* `after` (value: `"after"`)

* `before` (value: `"before"`)

* `within` (value: `"within"`)

* `not(within)` (value: `"not(within)"`)

* `in` (value: `"in"`)

* `not(in)` (value: `"not(in)"`)




