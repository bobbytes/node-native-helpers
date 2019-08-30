**[node-native-helpers](../README.md)**

[Globals](../globals.md) › ["publish-subscribe"](../modules/_publish_subscribe_.md) › [PublishSubscribe](_publish_subscribe_.publishsubscribe.md)

# Class: PublishSubscribe

Implementation of publish and subscribe pattern.

## Hierarchy

* **PublishSubscribe**

## Index

### Properties

* [subscribers](_publish_subscribe_.publishsubscribe.md#private-subscribers)

### Methods

* [publish](_publish_subscribe_.publishsubscribe.md#protected-publish)
* [subscribe](_publish_subscribe_.publishsubscribe.md#subscribe)
* [unsubscribe](_publish_subscribe_.publishsubscribe.md#unsubscribe)
* [unsubscribeAll](_publish_subscribe_.publishsubscribe.md#unsubscribeall)

## Properties

### `Private` subscribers

• **subscribers**: *Map‹string, function[]›* =  new Map<string, TCallback[]>()

*Defined in [publish-subscribe.ts:7](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/publish-subscribe.ts#L7)*

## Methods

### `Protected` publish

▸ **publish**(`id`: string, `value`: any): *void*

*Defined in [publish-subscribe.ts:24](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/publish-subscribe.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string | "" |
`value` | any | - |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`id`: string, `callback`: [TCallback](../modules/_publish_subscribe_.md#tcallback)): *void*

*Defined in [publish-subscribe.ts:9](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/publish-subscribe.ts#L9)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string | "" |
`callback` | [TCallback](../modules/_publish_subscribe_.md#tcallback) | - |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`id`: string, `callback`: [TCallback](../modules/_publish_subscribe_.md#tcallback)): *void*

*Defined in [publish-subscribe.ts:14](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/publish-subscribe.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string | "" |
`callback` | [TCallback](../modules/_publish_subscribe_.md#tcallback) | - |

**Returns:** *void*

___

###  unsubscribeAll

▸ **unsubscribeAll**(): *void*

*Defined in [publish-subscribe.ts:20](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/publish-subscribe.ts#L20)*

**Returns:** *void*