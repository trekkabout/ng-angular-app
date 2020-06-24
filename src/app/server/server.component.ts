import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus: string;
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test';
  serverCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!  Name is ' + this.serverName;
  }

  onUpdateServer(event: Event) {
    this.serverName = ( event.target as HTMLInputElement).value;
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
