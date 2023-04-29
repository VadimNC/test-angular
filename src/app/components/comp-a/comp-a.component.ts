import {Component, Input, OnInit} from '@angular/core';
import {Service1Service} from "../../services/service1.service";
import {filter, map, Observable, Subscription, take, tap} from "rxjs";
import {Post} from "../comp-b/post";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
  title = "abcde";
  name = "Vasiya";
  subscription: Subscription = new Subscription;
  items = [];
  count: number = 0;
  isRed = false;
  @Input() myPost!: Post;

  plus(): void {
    this.count++;
  }

  minus(): void {
    this.count--;
  }

  constructor(private service1Service: Service1Service) {
    // console.log("name=== ", this.name);
  }

  ngOnInit(): void {
    // this.getUsers();
    this.getStubData1();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUsers() {
    this.subscription.add(this.service1Service.getUsers()
      .pipe(
        map(vl => this.items = vl)
      )
      .subscribe(x => console.log('x=', x))
    )
  }

  getStubData1() {
    this.subscription.add(this.service1Service.getData1()
      .pipe(
        map((x) => console.log('Xmap= ', x)),
        // filter((x: string) => {
        //   x != 'Ivan';
        //   console.log('Xfilter= ', x)
        // })
        // take(2)
      )
      .subscribe(x => console.log('X= ', x))
    )
  }


}
