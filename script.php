<?php
// variáveis para armazenar os dados do formulário
// addslashes para evitar problemas com aspas simples
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);

$para = "lucassousa280707@gmail.com";
$assunto = "Contato - Meu Portfólio";

$corpo = "Nome: " . $nome . "Email: $email\n" . "Mensagem: $mensagem\n";

$cabeca = "From: lucassousa280707@gmail.com" . "\n" . "Reply-To: $email" . "\n" . "X-Mailer: PHP/" . phpversion();

if (mail($para, $assunto, $corpo, $cabeca)) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar mensagem.";
}

?>;