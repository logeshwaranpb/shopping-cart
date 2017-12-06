import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInComponent } from './sign-in/sign-in.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    username: string;
    password: string;

    constructor(public dialog: MatDialog) { }

    openSignInModal(): void {
        let dialogRef = this.dialog.open(SignInComponent, {
            width: '235px',
            data: {
                username: '',
                password: ''
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.username = result.username;
            this.password = result.password;
        });
    }
}
