import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    public serverId:number = 10;
    public serverStatus: string = 'Offline';

    public getServerStatus() {
        return this.serverStatus;
    }
}