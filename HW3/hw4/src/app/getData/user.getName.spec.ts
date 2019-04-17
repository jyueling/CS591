import { TestBed, async } from '@angular/core/testing';
import { UserGetName } from './user.getName';

describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserGetName
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(UserGetName);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
}
