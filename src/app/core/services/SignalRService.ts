import { Injectable, EventEmitter } from '@angular/core';

declare const $: any;
@Injectable()
export class SignalRService {
  private connectionId: any;
  private authData!: string | null;
  private signalRConnectionId: any;
  private proxy: any;
  private connection: any;
  private tryingToReconnect = false;
  public ExpiredBidStatus: EventEmitter<any>;
  public ActivatedBid: EventEmitter<any>;
  public Notification: EventEmitter<any>;

  constructor() {
    this.ActivatedBid = new EventEmitter<any>();
    this.ExpiredBidStatus = new EventEmitter<any>();
    this.Notification = new EventEmitter<any>();
  }

  public initialize(): void {
    this.connection = $.hubConnection('https://signalrcharpf.azurewebsites.net');
    this.proxy = this.connection.createHubProxy('ChatHub');
    this.setToken();

    this.proxy.on('broadcastExpiredBidStatus', (bidId: any) => {
      this.ExpiredBidStatus.emit(bidId);
    });

    this.proxy.on('broadcastActivatedBid', (bid: any) => {
      console.log('activated bid');
      this.ActivatedBid.emit(bid);
    });

    this.proxy.on('broadcastNotification', (notification: any) => {
      console.log('notification');
      console.log(notification);
      this.Notification.emit(notification);
    });

    this.proxy.on('broadcastTimeOut', () => {
      this.initialize();
    });

    // broadcastMessage
    this.proxy.on('broadcastMessage', () => {
     // alert('Broad Cast Messag is fired');
    });

    this.stopConnection();

    this.connection.start().done((data: any) => {
      console.log('Now connected');
      this.connectionId = this.connection.id;
      this.signalRConnectionId = this.connectionId;
    }).fail((error: any) => {
      console.log('Could not connect ' + error);

    });

    this.connection.reconnecting(() => {
      this.tryingToReconnect = true;
    });

    this.connection.reconnected(() => {
      this.tryingToReconnect = false;
    });
    this.connection.error((error: any) => {
      this.initialize();
    });
    this.connection.disconnected(() => {
      if (this.tryingToReconnect) {
        setTimeout(() => {
          this.initialize();
        }, 5000);

      }
    });

  }

  setToken() {
    this.authData = window.localStorage.getItem('authorizationData');
    if (this.authData) {
     // const token = this.authData.token;
      //$.signalR.ajaxDefaults.headers = { Authorization: 'Bearer ' + token };
    }
  }

  stopConnection() {
    this.connection.stop();
  }

  getConnection() {
    return this.connectionId;
  }
}
