**[node-native-helpers](../README.md)**

[Globals](../globals.md) › ["measure-timestamp"](../modules/_measure_timestamp_.md) › [MeasureTimestamp](_measure_timestamp_.measuretimestamp.md)

# Class: MeasureTimestamp

## Hierarchy

* EventEmitter

  * **MeasureTimestamp**

## Index

### Properties

* [startData](_measure_timestamp_.measuretimestamp.md#private-startdata)
* [startMilliseconds](_measure_timestamp_.measuretimestamp.md#private-startmilliseconds)
* [defaultMaxListeners](_measure_timestamp_.measuretimestamp.md#static-defaultmaxlisteners)

### Methods

* [addListener](_measure_timestamp_.measuretimestamp.md#addlistener)
* [emit](_measure_timestamp_.measuretimestamp.md#emit)
* [eventNames](_measure_timestamp_.measuretimestamp.md#eventnames)
* [getMaxListeners](_measure_timestamp_.measuretimestamp.md#getmaxlisteners)
* [getMeasureResponse](_measure_timestamp_.measuretimestamp.md#private-getmeasureresponse)
* [isStopMillisecondsGreaterOrEqual](_measure_timestamp_.measuretimestamp.md#private-isstopmillisecondsgreaterorequal)
* [isValidMilliseconds](_measure_timestamp_.measuretimestamp.md#private-isvalidmilliseconds)
* [listenerCount](_measure_timestamp_.measuretimestamp.md#listenercount)
* [listeners](_measure_timestamp_.measuretimestamp.md#listeners)
* [off](_measure_timestamp_.measuretimestamp.md#off)
* [on](_measure_timestamp_.measuretimestamp.md#on)
* [once](_measure_timestamp_.measuretimestamp.md#once)
* [prependListener](_measure_timestamp_.measuretimestamp.md#prependlistener)
* [prependOnceListener](_measure_timestamp_.measuretimestamp.md#prependoncelistener)
* [rawListeners](_measure_timestamp_.measuretimestamp.md#rawlisteners)
* [removeAllListeners](_measure_timestamp_.measuretimestamp.md#removealllisteners)
* [removeListener](_measure_timestamp_.measuretimestamp.md#removelistener)
* [setMaxListeners](_measure_timestamp_.measuretimestamp.md#setmaxlisteners)
* [start](_measure_timestamp_.measuretimestamp.md#start)
* [stop](_measure_timestamp_.measuretimestamp.md#stop)
* [listenerCount](_measure_timestamp_.measuretimestamp.md#static-listenercount)

## Properties

### `Private` startData

• **startData**: *__type*

*Defined in [measure-timestamp.ts:23](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L23)*

___

### `Private` startMilliseconds

• **startMilliseconds**: *number*

*Defined in [measure-timestamp.ts:22](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L22)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:9

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:11

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:24

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:20

**Returns:** *number*

___

### `Private` getMeasureResponse

▸ **getMeasureResponse**(`stopMilliseconds`: number, `stopData`: __type): *[IMeasureTimestampResponse](../interfaces/_measure_timestamp_.imeasuretimestampresponse.md)*

*Defined in [measure-timestamp.ts:47](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L47)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`stopMilliseconds` | number | - |
`stopData` | __type |  {} |

**Returns:** *[IMeasureTimestampResponse](../interfaces/_measure_timestamp_.imeasuretimestampresponse.md)*

___

### `Private` isStopMillisecondsGreaterOrEqual

▸ **isStopMillisecondsGreaterOrEqual**(`stopMilliseconds`: number): *boolean*

*Defined in [measure-timestamp.ts:58](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`stopMilliseconds` | number |

**Returns:** *boolean*

___

### `Private` isValidMilliseconds

▸ **isValidMilliseconds**(`milliseconds`: number): *boolean*

*Defined in [measure-timestamp.ts:54](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`milliseconds` | number |

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`type` | string \| symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:17

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:12

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:13

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:14

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:15

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:16

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(`milliseconds`: number, `data`: __type): *void*

*Defined in [measure-timestamp.ts:25](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L25)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`milliseconds` | number | - |
`data` | __type |  {} |

**Returns:** *void*

___

###  stop

▸ **stop**(`milliseconds`: number, `data`: __type): *void*

*Defined in [measure-timestamp.ts:34](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-timestamp.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`milliseconds` | number | - |
`data` | __type |  {} |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in /Users/bobby/Documents/private/node-native-helpers/node_modules/@types/node/events.d.ts:8

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** *number*