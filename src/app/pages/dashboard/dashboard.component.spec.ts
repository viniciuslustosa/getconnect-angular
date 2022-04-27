import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { FilmMock } from 'src/app/mocks/film.mock';
import { HistoryService } from 'src/app/services/history.service';
import { OmdbService } from 'src/app/services/omdb.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let omdbMock: jasmine.SpyObj<any>;
  let historyMock: jasmine.SpyObj<any>;
  
  beforeEach(waitForAsync(() => {

    omdbMock = jasmine.createSpyObj('OmdbService', [
      'find'
    ]);

    historyMock = jasmine.createSpyObj('HistoryService', [
      'getAll'
    ]);

    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
      declarations: [ DashboardComponent ],
      providers: [
        { provide: OmdbService, useValue: omdbMock },
        { provide: HistoryService, useValue: historyMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    
    omdbMock = TestBed.inject(OmdbService);
    historyMock = TestBed.inject(HistoryService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('tests in ngOnInit', () => {
    it('should load history', () => {
      component.ngOnInit();
      expect(historyMock.getAll).toHaveBeenCalled();
    });
  });

  describe('tests in history', () => {
    it('should render cards on history', () => {
      component.history = [FilmMock, FilmMock]
      fixture.detectChanges();
      
      expect(fixture.debugElement.queryAll(By.css('.card')).length).toEqual(2);
    });
  });
});
