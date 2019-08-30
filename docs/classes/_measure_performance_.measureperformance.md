**[node-native-helpers](../README.md)**

[Globals](../globals.md) › ["measure-performance"](../modules/_measure_performance_.md) › [MeasurePerformance](_measure_performance_.measureperformance.md)

# Class: MeasurePerformance

Measures application performance based on Node.js perf_hooks

## Hierarchy

* EventEmitter

  * **MeasurePerformance**

## Index

### Constructors

* [constructor](_measure_performance_.measureperformance.md#constructor)

### Properties

* [performanceObserver](_measure_performance_.measureperformance.md#private-performanceobserver)
* [startData](_measure_performance_.measureperformance.md#private-startdata)
* [startMarker](_measure_performance_.measureperformance.md#private-startmarker)
* [stopData](_measure_performance_.measureperformance.md#private-stopdata)
* [stopMarker](_measure_performance_.measureperformance.md#private-stopmarker)
* [defaultMaxListeners](_measure_performance_.measureperformance.md#static-defaultmaxlisteners)

### Methods

* [addListener](_measure_performance_.measureperformance.md#addlistener)
* [clearMarks](_measure_performance_.measureperformance.md#private-clearmarks)
* [emit](_measure_performance_.measureperformance.md#emit)
* [eventNames](_measure_performance_.measureperformance.md#eventnames)
* [getMaxListeners](_measure_performance_.measureperformance.md#getmaxlisteners)
* [listenerCount](_measure_performance_.measureperformance.md#listenercount)
* [listeners](_measure_performance_.measureperformance.md#listeners)
* [off](_measure_performance_.measureperformance.md#off)
* [on](_measure_performance_.measureperformance.md#on)
* [onMeasure](_measure_performance_.measureperformance.md#onmeasure)
* [once](_measure_performance_.measureperformance.md#once)
* [prependListener](_measure_performance_.measureperformance.md#prependlistener)
* [prependOnceListener](_measure_performance_.measureperformance.md#prependoncelistener)
* [rawListeners](_measure_performance_.measureperformance.md#rawlisteners)
* [removeAllListeners](_measure_performance_.measureperformance.md#removealllisteners)
* [removeListener](_measure_performance_.measureperformance.md#removelistener)
* [setMaxListeners](_measure_performance_.measureperformance.md#setmaxlisteners)
* [start](_measure_performance_.measureperformance.md#start)
* [stop](_measure_performance_.measureperformance.md#stop)
* [listenerCount](_measure_performance_.measureperformance.md#static-listenercount)

## Constructors

###  constructor

\+ **new MeasurePerformance**(`id`: string): *[MeasurePerformance](_measure_performance_.measureperformance.md)*

*Defined in [measure-performance.ts:22](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string |  uuid() |

**Returns:** *[MeasurePerformance](_measure_performance_.measureperformance.md)*

## Properties

### `Private` performanceObserver

• **performanceObserver**: *any*

*Defined in [measure-performance.ts:18](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L18)*

___

### `Private` startData

• **startData**: *__type*

*Defined in [measure-performance.ts:21](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L21)*

___

### `Private` startMarker

• **startMarker**: *string*

*Defined in [measure-performance.ts:19](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L19)*

___

### `Private` stopData

• **stopData**: *__type*

*Defined in [measure-performance.ts:22](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L22)*

___

### `Private` stopMarker

• **stopMarker**: *string*

*Defined in [measure-performance.ts:20](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L20)*

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

### `Private` clearMarks

▸ **clearMarks**(): *void*

*Defined in [measure-performance.ts:53](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L53)*

**Returns:** *void*

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

###  onMeasure

▸ **onMeasure**(`list`: PerformanceObserverEntryList, `observer`: PerformanceObserver): *void*

*Defined in [measure-performance.ts:43](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`list` | PerformanceObserverEntryList |
`observer` | PerformanceObserver |

**Returns:** *void*

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

▸ **start**(`data`: __type): *void*

*Defined in [measure-performance.ts:31](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | __type |  {} |

**Returns:** *void*

___

###  stop

▸ **stop**(`data`: __type): *void*

*Defined in [measure-performance.ts:36](https://github.com/DaNautilus/node-native-helpers/blob/4ff13a1/src/measure-performance.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
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