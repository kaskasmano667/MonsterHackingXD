import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArregloHacksComponent } from './arreglo-hacks.component';

describe('ArregloHacksComponent', () => {
  let component: ArregloHacksComponent;
  let fixture: ComponentFixture<ArregloHacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArregloHacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArregloHacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
