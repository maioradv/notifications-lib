import { SseClient, SseEvent } from './sse-client';
import { AxiosInstance } from 'axios';
import { ApiHeader } from './types';

export type NotificationsEvents = {
  qrRequired: {
    channelId: number;
    qr: string;
  };
  authenticated: {
    channelId: number;
  };
}

export type NotificationsEvent<K extends keyof NotificationsEvents = keyof NotificationsEvents> = {
  event: K;
  data: NotificationsEvents[K];
  timestamp: number;
}


export class SseHandler {
  private sseClient = new SseClient();

  constructor(private client: AxiosInstance) {}

  private getHeaders(): Record<string, string> {
    const axiosHeaders = this.client.defaults.headers.common;
    return {
      [ApiHeader.Authorization]: axiosHeaders[ApiHeader.Authorization] as string ?? '',
      [ApiHeader.ApiTenant]: axiosHeaders[ApiHeader.ApiTenant] as string ?? '',
    };
  }

   connect(onMessage: (event: NotificationsEvent) => void, onError?: (err: unknown) => void) {
    this.sseClient.connect({
      url: `${this.client.defaults.baseURL}/sse`,
      headers: this.getHeaders(),
      onMessage(event){
        onMessage(JSON.parse(event.data))
      },
      onError,
    });
  }

  disconnect() {
    this.sseClient.disconnect();
  }
}