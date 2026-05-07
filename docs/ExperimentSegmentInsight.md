# TalonOne.ExperimentSegmentInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **String** | The segmentation dimension used to group customers or purchases for analysis. | 
**bucket** | **String** | The specific group within the segmentation dimension. | 
**confidence** | **Number** | The raw (unadjusted) confidence score expressed as a percentage. Only segments with a confidence score greater than or equal to 95% are returned.  | 
**winnerVariantId** | **Number** | The ID of the variant that performed better in this segment. | 
**variants** | [**[ExperimentSegmentInsightVariant]**](ExperimentSegmentInsightVariant.md) | Per-variant metric values for this segment. | 



## Enum: DimensionEnum


* `cart_value` (value: `"cart_value"`)

* `item_count` (value: `"item_count"`)

* `customer_type` (value: `"customer_type"`)





## Enum: BucketEnum


* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)

* `new` (value: `"new"`)

* `returning` (value: `"returning"`)

* `loyal` (value: `"loyal"`)




