import { EventEmitter } from 'events';
import { performance, PerformanceObserver, PerformanceObserverEntryList } from 'perf_hooks';
import uuid from 'uuid/v4';

export enum MeasurePerformanceEvent {
  Measure = 'measure',
}

export interface IMeasurePerformanceData {
  start: {};
  stop: {};
}

/**
 * Measures application performance based on Node.js perf_hooks
 */
export class MeasurePerformance extends EventEmitter {
  private performanceObserver;
  private startMarker: string;
  private stopMarker: string;
  private startData: {};
  private stopData: {};

  constructor(id: string = uuid()) {
    super();
    this.performanceObserver = new PerformanceObserver(this.onMeasure.bind(this));
    this.startMarker = `${id}-start`;
    this.stopMarker = `${id}-end`;
  }

  public start(data: {} = {}): void {
    performance.mark(this.startMarker);
    this.startData = data;
  }

  public stop(data: {} = {}): void {
    performance.mark(this.stopMarker);
    this.performanceObserver.observe({ entryTypes: ['measure'] });
    this.stopData = data;
    performance.measure('execution time', this.startMarker, this.stopMarker);
  }

  public onMeasure(list: PerformanceObserverEntryList, observer: PerformanceObserver): void {
    observer.disconnect();
    this.clearMarks();

    const measure = list.getEntries()[0];
    const data: IMeasurePerformanceData = { start: this.startData, stop: this.stopData };

    this.emit(MeasurePerformanceEvent.Measure, { measure, data });
  }

  private clearMarks(): void {
    performance.clearMarks(this.startMarker);
    performance.clearMarks(this.stopMarker);
  }
}
