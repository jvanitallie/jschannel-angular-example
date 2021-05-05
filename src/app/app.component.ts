import {
  Component,
  VERSION,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
declare let Channel: any;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;

  @ViewChild("iframe") iframe: ElementRef;

  ngAfterViewInit(): void {
    let doc = this.iframe.nativeElement.contentWindow;
    var chan = Channel.build({
      window: doc,
      origin: "*",
      scope: "testScope"
    });
    chan.call({
      method: "reverse",
      params: "hello world!",
      success: function(v) {
        console.log(v);
      }
    });
  }
}
