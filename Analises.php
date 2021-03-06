<?php
//BUSCANDO A CLASSSE
require_once 'C:/xampp/htdocs/PROJETO_VERSAO_3.0/ClassesDAO/UsuarioDAO.php';
require_once 'C:/xampp/htdocs/PROJETO_VERSAO_3.0/ClassesDAO/FichaDAO.php';

//ESTANCIANDO
$usuarioDAO = new UsuarioDAO();

//VALIDANDO O USUÁRIO
session_start();
if ($_SESSION['logado'] == "logado") {
    $usuarioDAO->queryLogado($_SESSION['usuarioID']);
} else {
    header("location: http://localhost/PROJETO_VERSAO_3.0/index.php");
}

//DESLOGANDO
if (!empty($_GET['sair']) == "sim") {
    $usuarioDAO->querySair();
}


$fichaDAO = new FichaDAO();

$trabalham = 0;
$dependentes = 0;
$atendimentoEspecial = 0;
$moraSozinho = 0;
$mulheres = 0;
$homens = 0;
$qtdAlunos = 0;
?>

<!DOCTYPE HTML>
<html>
    <head>
        <?php require_once 'PHPHeader/Head.php'; ?>
        <title>Área Administrativa</title>
    </head>
    <body style="background-image: url('IMG/backgroundIFF.png');background-repeat: initial;">               
        <header>
            <div class="navbar-fixed green darken-4">
                <nav>
                    <div class="nav-wrapper green darken-4">  
                        <ul class="left">
                            <li>
                                <img src="IMG/copyright.png" class="hide-on-small-only" height="60px">
                                <img src="IMG/copyright.png" class="hide-on-med-and-up" height="50px">
                            </li>                     
                        </ul> 

                        <a class="brand-logo center"><img src="IMG/logo2.png" width="105px" id="tap" onclick="$('.tap-target').tapTarget('open');"></a>

                        <ul class="right">
                            <li><a class='dropdown-trigger' href='#' data-target='dropdown1'><i class="material-icons prefix">menu</i></a></li>                     
                        </ul> 
                    </div>
                </nav>
            </div>

            <!-- Dropdown Structure -->
            <ul id='dropdown1' class='dropdown-content green-text text-darken-4'>
                <li><a href="#!" class="center-align green-text text-darken-4"><b><?= $_SESSION['nomeUsuario'] ?></b></a></li>
                <li class="divider"></li>
                <li><a href="AcompanhamentosGerais.php" class="green-text text-darken-4"><i class="material-icons">home</i>Página Principal</a></li>

                <?php
                if ($_SESSION['permissao'] >= 1) {
                    echo "<li><a href='AreaAdministrativa.php' class='green-text text-darken-4'><i class='material-icons'>security</i>Área Administrativa</a></li>";
                }
                ?>

                <li><a href="?sair=sim" class="green-text text-darken-4"><i class="material-icons">exit_to_app</i>Sair</a></li>
            </ul>

        </header>  

        <div class="row container center">
            <div class="col s12 l12 green darken-2 z-depth-3" style="height: 100px;border-radius: 0px 0px 20px 20px; border-style: solid; border-width: 0px 1px 2px 1px;">
                <img src="IMG/analise.png" class="hide-on-small-only"> 
                <img src="IMG/analise.png" class="hide-on-med-and-up"> 
            </div>
        </div>

        </br>
        <main>
            <div class="row container center green darken-2 z-depth-3" style="border-radius: 0px 0px 20px 20px;border-style: solid; border-width: 1px 1px 2px 1px;">
                <div class="col s12 grey">
                    <ul class="tabs tabs-fixed-width grey">                       
                        <li class="tab"><a class="white-text active" href="#graficos" onclick="renderizarGraficos();">Análises Grafícas</a></li>
                        <li class="tab"><a class="white-text" href="#historico" onclick="renderizarHistorico();">Histórico de Fichas</a></li>
                    </ul>
                </div>
                <div id="historico"></div>
                <div id="graficos">

                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>
                </div>

                <div class="col s12 l12 grey" style="border-radius: 0px 0px 20px 20px;border-style: solid; border-width: 1px 1px 0px 0px; height: 20px;"></div>

            </div>
        </main>

        <div class="col s12 l12 green darken-4 left" style="border-width: 2px 0px 0px 0px; border-style: solid; height: 50px;"></div>


        <!-- Tap Target Structure -->
        <div class="tap-target green darken-4 white-text flow-text" data-target="tap">
            <div class="tap-target-content center-align">
                <p><h5><b>Bem-vindo à Área Admnistrativa.</b></h5></p>
                <p><h6><b>Funcionalidades da Área: </b><u>Inserção, Edição e Exclusão.</u></h6></p>
                <p><h6><u>Tipos de Atividades, Níveis, Modalidades, Cursos, Cidades e Usuários.</u></h6></p>

            </div>
        </div>

        <script type="text/javascript" src="JS/materialize.js"></script>
        <script type="text/javascript" src="JSAjax/ajaxAnalises.js"></script>
        <script>$('.dropdown-trigger').dropdown();</script>
    </body>
</html>
