import { EventEmitter } from 'events';

export enum MeasureTimestampEvent {
  Measure = 'measure',
}

export interface IMeasureTimestamp {
  duration: number;
}

export interface IMeasureTimestampData {
  start: {};
  stop: {};
}

export interface IMeasureTimestampResponse {
  measure: IMeasureTimestamp;
  data: IMeasureTimestampData;
}

export class MeasureTimestamp extends EventEmitter {
  private startMilliseconds: number;
  private startData: {};

  public start(milliseconds: number, data: {} = {}): void {
    if (!this.isValidMilliseconds(milliseconds)) {
      throw new Error('provided milliseconds is invalid');
    }

    this.startMilliseconds = milliseconds;
    this.startData = data;
  }

  public stop(milliseconds: number, data: {} = {}): void {
    if (!this.isValidMilliseconds(milliseconds)) {
      throw new Error('provided milliseconds is invalid');
    }

    if (!this.isStopMillisecondsGreaterOrEqual(milliseconds)) {
      throw new Error('provided stop milliseconds is not greater or equal than start');
    }

    const getMeasureResponse = this.getMeasureResponse(milliseconds, data);
    this.emit(MeasureTimestampEvent.Measure, getMeasureResponse);
  }

  private getMeasureResponse(stopMilliseconds: number, stopData: {} = {}): IMeasureTimestampResponse {
    const measure = { duration: this.startMilliseconds - stopMilliseconds };
    const data: IMeasureTimestampData = { start: this.startData, stop: stopData };

    return { measure, data };
  }

  private isValidMilliseconds(milliseconds: number): boolean {
    return !isNaN(milliseconds) && milliseconds > 0;
  }

  private isStopMillisecondsGreaterOrEqual(stopMilliseconds: number): boolean {
    return this.isValidMilliseconds(this.startMilliseconds) && stopMilliseconds >= this.startMilliseconds;
  }
}
