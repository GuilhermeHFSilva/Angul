import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerTabelaComponent } from './container-tabela.component';

describe('ContainerTabelaComponent', () => {
  let component: ContainerTabelaComponent;
  let fixture: ComponentFixture<ContainerTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerTabelaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title, farm subtitle and all sensor readings', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(component.titulo);
    expect(compiled.querySelector('.subtitulo')?.textContent).toContain(component.fazenda);

    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(component.leituras.length);
    expect(rows[0].textContent).toContain('55%');
    expect(rows[2].querySelector('.badge')?.classList.contains('badge-critico')).toBe(true);
  });
});
