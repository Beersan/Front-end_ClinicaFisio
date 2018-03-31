import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PreCadastroPageModule } from '../pages/pre-cadastro/pre-cadastro.module';
import { ReservarSalaPageModule } from '../pages/reservar-sala/reservar-sala.module';
import { CadastrarEspecialidadePage } from '../pages/cadastrar-especialidade/cadastrar-especialidade';
import { CadastrarEspecialidadeProvider } from '../providers/especialidade/especialidade';
import { CadastrarEstagiarioPage } from '../pages/cadastrar-estagiario/cadastrar-estagiario';
import { CadastrarEstagiarioProvider } from '../providers/estagiario/estagiario';
import { FinalizarPreCadastroPageModule } from '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro.module';
import { FinalizarPreCadastroPage } from '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro';
import { CadastrarProfessorPage } from '../pages/cadastrar-professor/cadastrar-professor';
import { CadastrarGrupoPage } from '../pages/cadastrar-grupo/cadastrar-grupo';
import { RelatarProblemaPage } from '../pages/relatar-problema/relatar-problema';
import { SortearPacienteGrupoPage } from '../pages/sortear-paciente-grupo/sortear-paciente-grupo';
import { CadastrarGrupoEstagiariosPage } from '../pages/cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';
import { ListarEstagiarioPage } from '../pages/listar-estagiario/listar-estagiario';
import { ListarPacientesPage } from '../pages/listar-pacientes/listar-pacientes';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { RelatarProblemaProvider } from '../providers/problema/problema';
import { GrupoProvider } from '../providers/grupo/grupo';
import { PreCadastroProvider } from '../providers/pre-cadastro/pre-cadastro';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastrarEstagiarioPage,
    CadastrarEspecialidadePage,
    CadastrarProfessorPage,
    CadastrarGrupoPage,
    RelatarProblemaPage,
    SortearPacienteGrupoPage,
    CadastrarGrupoEstagiariosPage,
    ListarEstagiarioPage,
    ListarPacientesPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PreCadastroPageModule,
    ReservarSalaPageModule,
    FinalizarPreCadastroPageModule,
    HttpClientModule,
    BrMaskerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastrarEstagiarioPage,
    CadastrarEspecialidadePage,
    CadastrarProfessorPage,
    CadastrarGrupoPage,
    RelatarProblemaPage,
    SortearPacienteGrupoPage,
    CadastrarGrupoEstagiariosPage,
    FinalizarPreCadastroPage,
    ListarEstagiarioPage,
    ListarPacientesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastrarEstagiarioProvider,
    CadastrarEspecialidadeProvider,
    RelatarProblemaProvider,
    GrupoProvider,
    PreCadastroProvider
  ]
})
export class AppModule {}
