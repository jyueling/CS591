import { TestBed, async } from '@angular/core/testing';
import { CatComponent } from './cat.component';

describe('OauthComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CatComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CatComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
}
