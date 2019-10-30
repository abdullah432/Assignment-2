import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPagePage } from './recipes-page.page';

describe('RecipesPagePage', () => {
  let component: RecipesPagePage;
  let fixture: ComponentFixture<RecipesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
