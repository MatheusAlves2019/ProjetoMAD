materialize();
renderizarTudo();

//RENDERS
function renderizarTudo() {
    renderizarTipoAtividade();
    renderizarCidade();
    renderizarNivel();
    renderizarModalidade();
    renderizarCurso();
    renderizarUsuario();
}

function renderizarTipoAtividade() {
    $("#tipoAtividade").load("PHPBody/AreaAdministrativa/TipoAtividade_AreaAdministrativa.php");
    return false;
}

function renderizarCidade() {
    $("#cidade").load("PHPBody/AreaAdministrativa/Cidade_AreaAdministrativa.php");
    return false;
}

function renderizarNivel() {
    $("#nivel").load("PHPBody/AreaAdministrativa/Nivel_AreaAdministrativa.php");
    return false;
}

function renderizarModalidade() {
    $("#modalidade").load("PHPBody/AreaAdministrativa/Modalidade_AreaAdministrativa.php");
    return false;
}

function renderizarCurso() {
    $("#curso").load("PHPBody/AreaAdministrativa/Curso_AreaAdministrativa.php");
    return false;
}

function renderizarUsuario() {
    $("#usuario").load("PHPBody/AreaAdministrativa/Usuario_AreaAdministrativa.php");
    return false;
}

//PLOTS
function plotarTipoAtividade(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        dataType: "JSON",
        data: "acao=plotarValores&" + "CRUD=TipoAtividade&" + "id=" + id
    }).done(function (data) {
        $("#TipoAtividadeID").val(data.id);
        $("#nomeTipoAtividadeText").val(data.nome);
        $("#descricaoTipoAtividadeText").val(data.descricao);
        $("#cadastrarTipoAtividadeButton").val("Salvar Tipo de Atividade");

        M.toast({html: "Editando Tipo de Atividade ...", classes: 'rounded', displayLength: 3000});
    });
    return false;
}

function plotarCidade(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        dataType: "JSON",
        data: "acao=plotarValores&" + "CRUD=Cidade&" + "id=" + id
    }).done(function (data) {
        $("#cidadeID").val(data.id);
        $("#nomeCidadeText").val(data.nome);
        $("#estadoCidadeText").val(data.estado);
        $("#cadastrarCidadeButton").val("Salvar Cidade");

        M.toast({html: "Editando Cidade ...", classes: 'rounded', displayLength: 3000});
    });
    return false;
}

function plotarNivel(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        dataType: "JSON",
        data: "acao=plotarValores&" + "CRUD=Nivel&" + "id=" + id
    }).done(function (data) {
        $("#nivelID").val(data.id);
        $("#nomeNivelText").val(data.nome);
        $("#cadastrarNivelButton").val("Salvar Nível");

        M.toast({html: "Editando Nível ...", classes: 'rounded', displayLength: 3000});
    });
    return false;
}

function plotarModalidade(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        dataType: "JSON",
        data: "acao=plotarValores&" + "CRUD=Modalidade&" + "id=" + id
    }).done(function (data) {
        $("#ModalidadeID").val(data.id);
        $("#nomeModalidadeText").val(data.nome);
        $("#nivelSelect").val(data.nivel);
        $("#cadastrarModalidadeButton").val("Salvar Modalidade");

        M.toast({html: "Editando Modalidade ...", classes: 'rounded', displayLength: 3000});
    });
    return false;
}

function plotarCurso(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        dataType: "JSON",
        data: "acao=plotarValores&" + "CRUD=Curso&" + "id=" + id
    }).done(function (data) {
        $("#CursoID").val(data.id);
        $("#nomeCursoText").val(data.nome);
        $("#ModalidadeSelect").val(data.modalidade);
        $("#cadastrarCursoButton").val("Salvar Curso");

        M.toast({html: "Editando Curso ...", classes: 'rounded', displayLength: 3000});
    });
    return false;
}

//DELETE
function excluirTipoAtividade(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        data: "acao=Excluir&" + "CRUD=TipoAtividade&" + "id=" + id
    }).done(function (data) {
        if (data === "ok") {
            renderizarTipoAtividade();
            M.toast({html: "Tipo de Atividade excluído", classes: 'rounded', displayLength: 3000});
        } else {
            M.toast({html: "Este tipo de atividade está sendo utilizado. Impossível excluir!", classes: 'rounded', displayLength: 5000});
        }

    });
    return false;
}

function excluirNivel(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        data: "acao=Excluir&" + "CRUD=Nivel&" + "id=" + id
    }).done(function (data) {
        if (data === "ok") {
            renderizarTudo();
            M.toast({html: "Nível excluído", classes: 'rounded', displayLength: 3000});
        } else {
            renderizarTudo();
            M.toast({html: "Este Nível está sendo utilizado. Impossível excluir!", classes: 'rounded', displayLength: 5000});
        }

    });
    return false;
}

function excluirModalidade(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        data: "acao=Excluir&" + "CRUD=Modalidade&" + "id=" + id
    }).done(function (data) {
        if (data === "ok") {
            renderizarTudo();
            M.toast({html: "Modalidade excluída", classes: 'rounded', displayLength: 3000});
        } else {
            renderizarTudo();
            M.toast({html: "Esta Modalidade está sendo utilizado. Impossível excluir!", classes: 'rounded', displayLength: 5000});
        }

    });
    return false;
}

function excluirCurso(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        data: "acao=Excluir&" + "CRUD=Curso&" + "id=" + id
    }).done(function (data) {
        if (data === "ok") {
            renderizarTudo();
            M.toast({html: "Curso Excluído!", classes: 'rounded', displayLength: 3000});
        } else {
            renderizarTudo();
            M.toast({html: "Impossível excluir Curso!", classes: 'rounded', displayLength: 5000});
        }

    });
    return false;
}


function excluirCidade(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        data: "acao=Excluir&" + "CRUD=Cidade&" + "id=" + id
    }).done(function (data) {
        if (data === "ok") {
            renderizarTudo();
            M.toast({html: "Cidade Excluída!", classes: 'rounded', displayLength: 3000});
        } else {
            renderizarTudo();
            M.toast({html: "Impossível excluir Cidade!", classes: 'rounded', displayLength: 5000});
        }

    });
    return false;
}

function excluirUsuario(id) {
    $.ajax({
        url: 'PHPAjax/Request_AreaAdm.php',
        type: 'POST',
        data: "acao=Excluir&" + "CRUD=Usuario&" + "id=" + id
    }).done(function (data) {
        if (data === "ok") {
            renderizarTudo();
            M.toast({html: "Usuário Excluído!", classes: 'rounded', displayLength: 3000});
        } else {
            renderizarTudo();
            M.toast({html: "Impossível excluir Usuário!", classes: 'rounded', displayLength: 5000});
        }

    });
    return false;
}

//FRAMEWORK FUNCTIONS
function materialize() {
    $('.dropdown-button').dropdown({
        container: document.body
    });
    $('.tabs').tabs();
    $('.tap-target').tapTarget();
}