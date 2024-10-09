import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifygamesComponent } from './modifygames.component';

describe('ModifygamesComponent', () => {
  let component: ModifygamesComponent;
  let fixture: ComponentFixture<ModifygamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifygamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifygamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
