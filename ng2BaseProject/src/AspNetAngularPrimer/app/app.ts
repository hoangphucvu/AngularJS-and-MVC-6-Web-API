﻿import { Component } from "@angular/core";

@Component({
    selector: "app-shell",
    template: `
<div class="container-fluid">
    <nav class="navbar navbar-default">
      <div>
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['home']">Contact Manager</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['contacts']">Contacts</a></li>
            <li><a [routerLink]="['dynamic']">Dynamic</a></li>
          </ul>
      
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div>
        <router-outlet></router-outlet>
    </div>
</div>
`
})
export class App {

}