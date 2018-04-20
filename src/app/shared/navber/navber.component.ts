import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.css']
})
export class NavberComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
