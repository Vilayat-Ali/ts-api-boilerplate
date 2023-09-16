// lib
import { Server } from "socket.io";

import { eventHandlers, type EventHandler } from "./handlers/index";

export class WebSocketHandler {
  private io: Server<any>;

  constructor(io: Server<any>) {
    this.io = io;

    // mapping event handlers
    eventHandlers.map((event: EventHandler) =>
      this.io.on(event.eventName, event.eventHandler)
    );
  }

  public getIO(): Server<any> {
    return this.io;
  }
}
