import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { FilmMock } from 'src/app/mocks/film.mock';
import { HistoryService } from 'src/app/services/history.service';
import { OmdbService } from 'src/app/services/omdb.service';

import { DashboardCardComponent } from './dashboard-card.component';

describe('DashboardCardComponent', () => {
  let component: DashboardCardComponent;
  let fixture: ComponentFixture<DashboardCardComponent>;
  let omdbMock: jasmine.SpyObj<any>;
  let historyMock: jasmine.SpyObj<any>;

  beforeEach(waitForAsync(() => {
    omdbMock = jasmine.createSpyObj('OmdbService', [
      'find'
    ]);

    historyMock = jasmine.createSpyObj('HistoryService', [
      'remove'
    ]);

    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
      declarations: [ DashboardCardComponent ],
      providers: [
        { provide: OmdbService, useValue: omdbMock },
        { provide: HistoryService, useValue: historyMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('tests in remove', () => {
    it('should remove filme from history', () => {
      component.film = FilmMock
      component.remove();

      expect(historyMock.remove).toHaveBeenCalled();
      expect(component.film).toBeUndefined();
    });
  });
});
