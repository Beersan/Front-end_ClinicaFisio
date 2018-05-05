import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CadastrarEstagiarioPage } from '../pages/cadastrar-estagiario/cadastrar-estagiario';
import { CadastrarEspecialidadePage } from '../pages/cadastrar-especialidade/cadastrar-especialidade';
import { PreCadastroPage } from '../pages/pre-cadastro/pre-cadastro';
import { ReservarSalaPage } from '../pages/reservar-sala/reservar-sala';
import { FinalizarPreCadastroPage } from '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro';
import { CadastrarProfessorPage } from '../pages/cadastrar-professor/cadastrar-professor';
import { CadastrarGrupoPage } from '../pages/cadastrar-grupo/cadastrar-grupo';
import { SortearPacienteGrupoPage } from '../pages/sortear-paciente-grupo/sortear-paciente-grupo';
import { RelatarProblemaPage } from '../pages/relatar-problema/relatar-problema';
import { CadastrarGrupoEstagiariosPage } from '../pages/cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';
import { ListarEstagiarioPage } from '../pages/listar-estagiario/listar-estagiario';
import { ListarGrupoPage } from '../pages/listar-grupo/listar-grupo';
import { ListarPacientesPage } from '../pages/listar-pacientes/listar-pacientes';
import { ListarProfessoresPage } from '../pages/listar-professores/listar-professores';
import { ListarEspecialidadePage } from '../pages/listar-especialidade/listar-especialidade';
import { ListarGrupoEstagiariosPage } from '../pages/listar-grupo-estagiarios/listar-grupo-estagiarios';
import { FilaDeEsperaPage } from '../pages/fila-de-espera/fila-de-espera';
import firebase from 'firebase';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { CadastroSemestrePage } from '../pages/cadastro-semestre/cadastro-semestre';
import { ListarSemestrePage } from '../pages/listar-semestre/listar-semestre';
import { CadastrarHorarioProfessorPage } from '../pages/cadastrar-horario-professor/cadastrar-horario-professor';
import { ListarReservasPage } from '../pages/listar-reserva-salas/listar-reserva-salas';
import { IncluirExamesTermosPage } from '../pages/incluir-exames-termos/incluir-exames-termos';
import { VincularPacienteEstagiarioPage } from '../pages/vincular-paciente-estagiario/vincular-paciente-estagiario';
import { ListarPacientesAgendadosPage } from '../pages/listar-pacientes-agendados/listar-pacientes-agendados';
import { AgendarAtendimentoPage } from '../pages/agendar-atendimento/agendar-atendimento';
import { ImprimirCronogramaEstagiariosPage } from '../pages/imprimir-cronograma-estagiarios/imprimir-cronograma-estagiarios';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // manter comentado, poderá ser usado para testes futuramente. - Gabriel 09/04 23h
    this.pages = [
      { title: 'Semestre', component: ListarSemestrePage},
      { title: 'Estagiário', component: ListarEstagiarioPage},
      { title: 'Grupo', component: ListarGrupoPage},
      { title: 'Grupo de estagiários', component: ListarGrupoEstagiariosPage},
      { title: 'Pré-cadastro', component: PreCadastroPage},
      { title: 'Lista de pacientes', component: ListarPacientesPage},
      { title: 'Fila de Espera', component: FilaDeEsperaPage},
      { title: 'Especialidade', component: ListarEspecialidadePage},
      { title: 'Professor', component: ListarProfessoresPage},
      { title: 'Ouvidoria', component: RelatarProblemaPage},
      { title: 'Lista de Reservas de Sala', component: ListarReservasPage},
      { title: 'Incluir Exames e Termos', component: IncluirExamesTermosPage},
      { title: 'Vincular Paciente a estagiário', component: VincularPacienteEstagiarioPage},
      //{ title: 'Cadastrar Professsor', component: CadastrarProfessorPage},
      // { title: 'Cadastrar Especialidade', component: CadastrarEspecialidadePage},
      // { title: 'Cadastrar Estagiário', component: CadastrarEstagiarioPage},
      // { title: 'Reservar Sala', component: ReservarSalaPage},
      // { title: 'Cadastrar Grupo', component: CadastrarGrupoPage},
      //{ title: 'Sortear Paciente Grupo', component: SortearPacienteGrupoPage},
      //{ title: 'Cadastrar Grupo Estagiários', component: CadastrarGrupoEstagiariosPage},
      //{ title: 'Finalizar Pré Cadastro', component: FinalizarPreCadastroPage},
      //{ title: 'Cadastrar Semestre', component: CadastroSemestrePage},
      //{ title: 'Cadastrar Horário de Professores', component: CadastrarHorarioProfessorPage}
      { title: 'Lista de Pacientes Agendados', component: ListarPacientesAgendadosPage},
      { title: 'Agendar Atendimento', component: AgendarAtendimentoPage},
      { title: 'Imprimir Cronograma Estagiários', component: ImprimirCronogramaEstagiariosPage}
    ];
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  declarations: [
    MyApp,
    HomePage
     ]
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.push(page.component, {
      rootNavCtrl: this.nav
    });
  }

}
