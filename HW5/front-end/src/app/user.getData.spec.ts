import { TestBed, async } from '@angular/core/testing';
import { UserGetData } from './user.getData';

describe('UserGetData', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserGetData
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UserGetData);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
}
