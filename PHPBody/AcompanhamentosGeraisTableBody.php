<div class="row">
    <div class="col s12 m12 l12">
        <table cellpadding="1" cellspacing="1" class="table table-hover responsive-table centered highlight z-depth-3" id="tabelaAcompanhamento" style="border-style: solid;border-width: 1px;border-color: black;">
            <tr>
                <td><b>Título</b></td>
                <td><b>Servidor</b></td>
                <td><b>Curso</b></td>
                <td><b>Data Ínicio</b></td>
                <td><b>Data Fim</b></td>
                <td><b>Ação</b></td>
            </tr>
            <tbody resultado>
                <?php foreach ($acompanhamentoDAO->querySelect() as $result) { ?>
                    <tr>
                        <td><?= $result[1] ?></td>
                        <td><?= $result[2] ?></td>
                        <td><?= $result[3] ?></td>
                        <td><?= $result[4] ?></td>
                        <td><?= $result[5] ?></td>
                        <td>
                            <a href="?edita=<?= $result[0] ?>" class="btn tooltipped" data-position="top" data-tooltip="Deletar Acompanhamento" name="btn-deletarAcompanhamento">
                                <i class="material-icons">delete</i>
                            </a>

                            <a href="?excluir=<?= $result[0] ?>" class="btn tooltipped" data-position="bottom" data-tooltip="Visualizar o Acompanhamento" name="btn-selecionarAcompanhamento">
                                <i class="material-icons">edit</i>
                            </a>
                            <a href="?seleciona=<?= $result[0] ?>" class="btn tooltipped" data-position="bottom" data-tooltip="Editar Acompanhamento" name="btn-editarAcompanhamento">
                                <i class="material-icons">send</i>
                            </a>
                        </td>
                    </tr>
                <?php } ?> 
            </tbody>
        </table>
        <br/>
        <div class="col-md-12 center text-center">
            <span class="left" id="total_reg"></span>
            <ul class="pagination pager" id="paginaAcompanhamento"></ul>
        </div>
    </div>
</div>
