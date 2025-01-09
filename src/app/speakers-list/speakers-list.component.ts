import { Component, OnInit } from '@angular/core';
import { SpeakerListService } from '../service/speaker-list.service';
import { SharedService } from '../service/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css'],
  standalone: false
})
export class SpeakersListComponent implements OnInit {
  speakerData: any | undefined;
  speakerList: any[] | undefined;
  page: number = 1;
  searchText: string | undefined;
  resultNum = 150;
  resPageNum = 1;
  isLoading: boolean = false; 

  constructor(
    private speakerListService: SpeakerListService,
    private sharedService: SharedService,
    private _router: Router,
    private r: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showSpeakers();
  }

  showSpeakers() {
    this.isLoading = true; 

    //LAZY LOADING
    setTimeout(() => {
      this.speakerListService
        .getSpeakersList(this.resultNum, this.resPageNum)
        .subscribe((data) => {
          this.speakerData = data;
          this.speakerList = this.speakerData.results;
          this.isLoading = false; 
        });
    }, 2500); 
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.resPageNum = event; 


    
    this.showSpeakers();
  }

  Search() {
    if (this.searchText !== '') {
      let searchValue = this.searchText?.toLocaleLowerCase();
      this.speakerList = this.speakerList?.filter((record: any) => {
        return (
          record.name.first.toLocaleLowerCase().match(searchValue) ||
          record.name.last.toLocaleLowerCase().match(searchValue)  ||
          record.email.toLocaleLowerCase().match(searchValue)
        );
      });
    } else {
      this.showSpeakers();
    }
  }

  showResult() {}

  setSpeakerData(spData: any) {
    this.sharedService.spObject = spData;
    this._router.navigate(['../details'], { relativeTo: this.r });
  }
}
