import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
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
import { ProfessorProvider } from '../providers/professor/professor';
import { ListarGrupoPage } from '../pages/listar-grupo/listar-grupo';
import { ListarProfessoresPage } from '../pages/listar-professores/listar-professores';
import { ListarEspecialidadePage } from '../pages/listar-especialidade/listar-especialidade';
import { ListarGrupoEstagiariosPage } from '../pages/listar-grupo-estagiarios/listar-grupo-estagiarios';
import { GrupoEstagiarioProvider } from '../providers/grupo-estagiario/grupo-estagiario';
import { FilaDeEsperaPageModule } from '../pages/fila-de-espera/fila-de-espera.module';
import { ArquivosProvider } from '../providers/arquivos/arquivos';
import { CadastroSemestrePageModule } from '../pages/cadastro-semestre/cadastro-semestre.module';
import { ListarSemestrePageModule } from '../pages/listar-semestre/listar-semestre.module';
import { ListarPacientesAgendadosPage } from '../pages/listar-pacientes-agendados/listar-pacientes-agendados';
import { SemestreProvider } from '../providers/semestre/semestre';
import { CadastrarHorarioProfessorPageModule } from '../pages/cadastrar-horario-professor/cadastrar-horario-professor.module';
import { ReservaSalaProvider} from '../providers/reserva-sala/reserva-sala';
import { ListarReservasPage } from '../pages/listar-reserva-salas/listar-reserva-salas';
import { ListarReservasPageModule } from '../pages/listar-reserva-salas/listar-reserva-salas.module';
import { IncluirExamesTermosPage } from '../pages/incluir-exames-termos/incluir-exames-termos';
import { VincularPacienteEstagiarioPage } from '../pages/vincular-paciente-estagiario/vincular-paciente-estagiario';
import { ListarPacientesAgendadosPageModule } from '../pages/listar-pacientes-agendados/listar-pacientes-agendados.module';
import { AgendarAtendimentoPageModule } from '../pages/agendar-atendimento/agendar-atendimento.module';
import { AgendaProvider } from '../providers/agenda/agenda';
import { AgendarAtendimentoPage } from '../pages/agendar-atendimento/agendar-atendimento';
import { ImprimirCronogramaEstagiariosPage } from '../pages/imprimir-cronograma-estagiarios/imprimir-cronograma-estagiarios';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { FilaEsperaProvider } from '../providers/fila-espera/fila-espera';
import { CadastrarHorarioProfessorPage } from '../pages/cadastrar-horario-professor/cadastrar-horario-professor';
import { AgendaProfessorProvider } from '../providers/agenda-professor/agenda-professor';


@NgModule({
    declarations: [
        MyApp,
        SideMenuContentComponent,
        HomePage,
        ListPage,
        CadastrarEstagiarioPage,
        CadastrarEspecialidadePage,
        CadastrarProfessorPage,
        CadastrarGrupoPage,
        RelatarProblemaPage,
        SortearPacienteGrupoPage,
        CadastrarGrupoEstagiariosPage,
        ListarPacientesPage,
        ListarEstagiarioPage,
        ListarProfessoresPage,
        ListarGrupoPage,
        ListarEspecialidadePage,
        ListarGrupoEstagiariosPage,
        ListarReservasPage,
        IncluirExamesTermosPage,
        VincularPacienteEstagiarioPage,
        AgendarAtendimentoPage,
        ImprimirCronogramaEstagiariosPage,
        ListarPacientesAgendadosPage,    
        CadastrarHorarioProfessorPage, 

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        PreCadastroPageModule,
        ReservarSalaPageModule,
        FinalizarPreCadastroPageModule,
        HttpClientModule,
        BrMaskerModule,
        FilaDeEsperaPageModule,
        CadastroSemestrePageModule,
        ListarSemestrePageModule,
        //CadastrarHorarioProfessorPageModule
        //ListarReservasPageModule
        ListarSemestrePageModule
        //,
        //ListarReservasPageModule
        //CadastrarHorarioProfessorPageModule,
        //CadastrarHorarioProfessorPage
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
        ListarPacientesPage,
        ListarProfessoresPage,
        ListarGrupoPage,
        ListarEspecialidadePage,
        ListarGrupoEstagiariosPage,
        ListarReservasPage,
        IncluirExamesTermosPage,
        VincularPacienteEstagiarioPage,
        AgendarAtendimentoPage, 
        ImprimirCronogramaEstagiariosPage,
        ListarPacientesAgendadosPage,
        CadastrarHorarioProfessorPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        CadastrarEstagiarioProvider,
        CadastrarEspecialidadeProvider,
        RelatarProblemaProvider,
        GrupoProvider,
        PreCadastroProvider,
        GrupoEstagiarioProvider,
        ProfessorProvider,
        ArquivosProvider,
        SemestreProvider,
        ReservaSalaProvider,
        AgendaProvider,
        FilaEsperaProvider,
        AgendaProfessorProvider
    ]
})
export class AppModule {
    static get(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    static injector: typeof AppModule;
}
