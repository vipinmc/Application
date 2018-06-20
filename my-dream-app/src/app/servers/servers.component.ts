import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created';
  public serverName = 'Sample Server';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  public onCreateServer() {
    this.serverCreationStatus = 'Server event was created and the server name is: ' + this.serverName;
  }
  public onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
