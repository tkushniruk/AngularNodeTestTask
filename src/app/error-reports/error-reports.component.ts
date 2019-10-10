import {Component, OnInit} from '@angular/core';
import {ErrorReport} from '../error-report';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-error-reports',
  templateUrl: './error-reports.component.html',
  styleUrls: ['./error-reports.component.css']
})
export class ErrorReportsComponent implements OnInit {
  errorReports: ErrorReport[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readErrorReports()
      .subscribe((errorReports: ErrorReport[]) => this.errorReports = errorReports)
  }
}
