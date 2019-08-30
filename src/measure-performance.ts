import { EventEmitter } from 'events';
import { performance, PerformanceObserver, PerformanceObserverEntryList } from 'perf_hooks';
import uuid from 'uuid/v4';

export enum MeasurePerformanceEvent {
  Measure = 'measure',
}

export class MeasurePerformance extends EventEmitter {
  private performanceObserver;
  private startMarker: string;
  private stopMarker: string;

  constructor(id: string = uuid()) {
    super();
    this.performanceObserver = new PerformanceObserver(this.onMeasure.bind(this));
    this.startMarker = `${id}-start`;
    this.stopMarker = `${id}-end`;
  }

  public start(): void {
    performance.mark(this.startMarker);
  }

  public stop(): void {
    performance.mark(this.stopMarker);
    this.performanceObserver.observe({ entryTypes: ['measure'] });
    performance.measure('execution time', this.startMarker, this.stopMarker);
  }

  public onMeasure(list: PerformanceObserverEntryList, observer: PerformanceObserver): void {
    observer.disconnect();
    this.clearMarks();

    const measure = list.getEntries()[0];
    this.emit(MeasurePerformanceEvent.Measure, measure);
  }

  private clearMarks(): void {
    performance.clearMarks(this.startMarker);
    performance.clearMarks(this.stopMarker);
  }
}
