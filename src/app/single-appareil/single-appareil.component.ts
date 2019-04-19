import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Default';

  constructor(private appareilsService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.appareilsService.getAppareilById(+id).name;
    this.status = this.appareilsService.getAppareilById(+id).status;
  }

}
