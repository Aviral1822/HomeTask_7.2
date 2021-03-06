import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedCompComponent } from './deleted-comp.component';

describe('DeletedCompComponent', () => {
  let component: DeletedCompComponent;
  let fixture: ComponentFixture<DeletedCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
