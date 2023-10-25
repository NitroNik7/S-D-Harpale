import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EHV_projects';

  ngOnInit() {
    if (($(document).attr("documentURI") === "http://localhost:4200/contact-us") == false) {
      $(document).scroll(function () {
        var scrollTop: any = $(window).scrollTop();
        var footerOffset: any = $('.footer').offset();
        var windowHeight: any = window.innerHeight;
        if (scrollTop > (footerOffset.top - windowHeight)) {
          $('.navbar').css('display', 'none');
        }
        else
          $('.navbar').css('display', 'block');
      })
    }
  }
}
