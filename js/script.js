//Essa funcao só sera ativada quando houver um click no button
function verificar(){

   //criando um objeto
   let data = new Date()
   //getFullYear() serve para pegar o ano atual com os 4 numeros
   let ano = data.getFullYear()
   //pegando o valor digitado pelo usuario do input com #txtano
   let fano = document.getElementById('txtano')
   //variavel da div com #res, responsavelpor mostrar os resultados na tela
   let res = document.getElementById('res')

   if(fano.value.length == 0 || Number(fano.value) > ano){

    window.alert('[ERRO] Verifique os dados e tente novamente!')
    
   }else{

        //pegando o elemento por name do radio (obs: ambos devem ter o mesmo name, e no máximo 1 deve conter o checked)
        let fsex = document.getElementsByName('radsex')
        //subtraindo o ano atual pelo ano de nascimento
        let idade = ano - Number(fano.value)
        //variavel responsavel por receber o genero do usuario. a variavel comeca vazia antes de receber um valor
        let genero = ''
        //criando um elemento img dinamicamente com javascript
        let img = document.createElement('img')
        //inserindo o id='foto' no elemento img
        img.setAttribute('id','foto')

        //essa condicao é executada quando estiver marcado o input-radio na posicao[0](primeira) do DOM que é a que contem o (masculino)
        if(fsex[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade <= 10){
                
                img.setAttribute('src','imagem/foto-crianca-m.jpg')
                res.innerHTML = `Você é um ${genero} com a idade de ${idade} anos`
                
            }else if(idade < 24){

                img.setAttribute('src','imagem/foto-jovem-m.jpg')
                res.innerHTML = `Você é um ${genero} com a idade de ${idade} anos`

            }else if(idade < 51){

                img.setAttribute('src','imagem/foto-adulto-m.jpg')
                res.innerHTML = `Você é um ${genero} com a idade de ${idade} anos`

            }else{
                
                img.setAttribute('src','imagem/foto-idoso-m.jpg')
                res.innerHTML = `Você é um ${genero} com a idade de ${idade} anos`
            }

        //essa condicao é executada quando estiver marcado o input-radio na posicao[1](segunda) do DOM que é a que contem o (feminino)
        }else if(fsex[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade <= 10){

               img.setAttribute('src', 'imagem/foto-crianca-fe.jpg')
               res.innerHTML = `Você é uma ${genero} com a idade de ${idade} anos`

            }else if(idade < 24){

                img.setAttribute('src', 'imagem/foto-jovem-f.jpg')
                res.innerHTML = `Você é uma ${genero} com a idade de ${idade} anos`

            }else if(idade < 51){

                img.setAttribute('src', 'imagem/foto-adulta-fe.jpg')
                res.innerHTML = `Você é uma ${genero} com a idade de ${idade} anos`

            }else{

                img.setAttribute('src', 'imagem/foto-idosa-fe.jpg')
                res.innerHTML = `Você é uma ${genero} com a idade de ${idade} anos`

            }
        }
            //centralizando todos os componentes na saida dos dados
            res.style.textAlign = 'center'
            //mostra a o elemento(foto) filho da variavel(img) na condicao que ela foi chamada
            res.appendChild(img)
   }
  
}