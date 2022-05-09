// Limpa o que tiver antes
console.clear();
//instala a biblioteca prompt-sync
const prompt = require('prompt-sync')()

//objeto onça, nele ha varias propriedades
let onca = 
{
    saude: 80,
    sede: 10,
    fome: 15,


    cacar: function ()
    {
        if(numrandom<=50){
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, e a onça encontra sua presa. Ela se aproxima calmamente e quando faz o ataque,\n sua presa consegue escapar! \ncaçada deu errado! A onça continua com fome e ainda se machucou em uma pedra.")
            onca.fome +=25
            onca.sede += 25
            onca.saude -=25
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e os dados vitais de ', nome,' são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, amanha descobriremos o que essa fera selvagem vai fazer")
            prompt('\n\ndigite ENTER para continuar');
    


        }else{
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, e a onça encontra sua presa. Ela se aproxima calmamente e faz um ataque certeiro!,\n Sua presa não consegue escapar! \n a caçada deu certo! Agora,", nome, " tem que levar sua caça para sua toca e comer em segurança")
            onca.fome =0
            onca.sede += 30
            onca.saude +=5
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas  a onça ja comeu e seus dados vitais são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, amanha descobriremos o que essa fera selvagem irá fazer")
            prompt("\ndigite ENTER para continuar")
            
        }
        
    },


    dormir: function ()
    {
            if(numrandom<=20){
                console.clear()
                console.log("\nJá são: ", hora + 7, " horas, e ",nome," escuta um barulho. Era um grupo de Leões se aproximando\n a onça teve que abandonar sua toca e fugir para não ser atacada pelos Leões")
                onca.fome +=20
                onca.sede += 25
                onca.saude -=10
                console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' encontra um lugar segura para passar a noite, seus dados vitais são: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
                console.log(" \nEstá na hora descansar, amanha tem mais aventura!")
                prompt('\n\ndigite ENTER para continuar');
        
    

            }else{
                console.clear()
                console.log("\nJá são: ", hora + 7, " horas, e a onça conseguiu descansar. \nEstá melhorando sua saúde e se preparando para os proximos desafios!,\n")
                onca.fome +=15
                onca.sede += 10
                onca.saude +=4
                console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas, nossa fera vai se abrigar em sua toca e seus dados vitais são: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
                console.log(" \nEstá na hora descansar, amanha tem mais aventura")
                prompt("\ndigite ENTER para continuar")
                
            }
        
    },


    beberagua: function (){

        if(numrandom<=50){
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, e ",nome," chega no lago. Está um dia muito quente e ela fica na margem \nse refrescando da caminhada que fez, \ndepois de se refrescr ela vai fazer uma longa caminhada de volta para sua toca")
            onca.fome +=10
            onca.sede =0
            onca.saude +=4
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' chega nas proximidades de sua toca. Seus dados vitais são: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, nos encontramos amanhã!")
            prompt('\n\ndigite ENTER para continuar');
    


        }else{
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, a onça chega no lago. \nEstá um dia muito quente e ela vai direto para a margem beber agua\nao chegar ela vê varios jacarés e eles tentam atacar a onça. Ela tem que voltar sem beber agua\n")
            onca.fome +=25
            onca.sede +=25
            onca.saude +=1
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' chega nas proximidades de sua toca. Seus dados vitais são: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, esse dia foi muito perigoso e cansativo!")
            prompt("\ndigite ENTER para continuar")
            
        }
            
        
    },

    cacarzebra: function (){
        if(numrandom<=30){
            console.clear()
            console.log("\nJAgora são: ", hora + 7, " horas, e ",nome," decidiu caçar as zebras. \nEla foi se aproximando devagar, se escondendo atras da vegetação, e rapidamente atacou uma zebra \nmas a zebra era muito forte e acertou um coice na pata da onça que se machucou!")
            onca.fome +=20
            onca.sede +=15
            onca.saude -=25
            console.log('\n-------------------------------------------------------------------------\n já são ', hora + 10, ' horas e ', nome,' está sentindo dor na pata machucada. \nEla volta lentamente para sua toca para se recuperars seus dados vitais: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEla vai dormir triste e com dor, esperamos que amanhã esteja melhor")
            prompt('\n\ndigite ENTER para continuar');
    


        }else{
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, e ",nome, " decidiu caçar as zebras. \nEla se aproxima devagar, se escondendo atras da vegetação, e rapidamente ataca uma zebra, \na zebra é forte e tenta fugir, mas nossa feroz amiga onça vence a batalha com apenas alguns ferimentos leves\n")
            onca.fome =0
            onca.sede +=15
            onca.saude -=5
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' chega nas proximidades de sua toca com sua presa. \nEla vai guardar a carne para comer mais tardes, tem carne para toda a semana. \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, esse dia foi muito perigoso e cansativo!")
            prompt("\ndigite ENTER para continuar")
            
        }
            
    },

    migrar: function (){

        if(numrandom<=30){
            console.clear()
            console.log("\nJAgora são: ", hora + 7, " horas, e ",nome," decidiu se mudar daquela região. \nEla foi para uma região mais segura que fica atrás das montanhas. \nA caminhada é longa e exaustiva. Ainda falta alguns quilômetros")
            onca.fome +=20
            onca.sede +=25
            onca.saude -=4
            console.log('\n-------------------------------------------------------------------------\n já são ', hora + 10, ' horas e ', nome,' está chegando perto do seu destino \nEla anda lentamente procurando um lugar para passar a noite e se recuperar da longa jornada: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nVamos descobrir o que ela vai fazer amanhã...")
            prompt('\n\ndigite ENTER para continuar');
    


        }else{
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, e ",nome, " decidiu se mudar daquela região. \nela foi para uma região mais segura que fica atras das montanhas. \nNo meio do caminha ela se depara com um rio muito grande e cheio de jacares, ela não consegue atravessar, \nmas pelo menos vai beber agua e comer peixes\n")
            onca.fome =0
            onca.sede =0
            onca.saude +=4
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' ainda está caminhando \nEla vai ter que andar a noite toda para pegar um desvio, não da para atravessar o rio. \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, esse dia foi muito perigoso e cansativo!")
            prompt("\ndigite ENTER para continuar")
            
        }
        
    },

    subirnaarvore:  function (){

        console.clear()
        console.log("\nJAgora são: ", hora + 7, " horas, e ",nome,"  subiu bem alto para procurar um lugar para fazer sua nova toca, mas um vento forte a desequilibrou e ela quase caiu! melhor descer logo dessa arvore!!")
        onca.fome +=5
        onca.sede +=5
        onca.saude +=2
        console.log('\n-------------------------------------------------------------------------\n já são ', hora + 10, ' horas e ', nome,' encontrou um lugar no meio das pedras para fazer sua nova toca:\n \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
        console.log(" \nA partir de amanhã ela estará mais segura")
        prompt('\n\ndigite ENTER para continuar');

    },

    perto: function (){
        if(numrandom<=40){
            console.clear()
            console.log("\nJAgora são: ", hora + 7, " horas, e ",nome," chega perto de sua irmã. \nAs duas onças se estranharam e começaram e brigar, uma briga muito feroz. As duas sairam machucadas.")
            onca.fome +=10
            onca.sede +=10
            onca.saude -=15
            console.log('\n-------------------------------------------------------------------------\n já são ', hora + 10, ' horas e ', nome,' está triste e machucada voltando para sua nova toca: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nVamos descobrir o que ela vai fazer amanhã...")
            prompt('\n\ndigite ENTER para continuar');
    


        }else{
            console.clear()
            console.log("\nJá são: ", hora + 7, " horas, e ",nome, " chega perto de sua irmã. \nAs duas se estranharam um pouco, mas aos poucos foram se acalmando, voltaram a ser amigas e foram caçar juntas\n")
            onca.fome =0
            onca.sede =0
            onca.saude +=1
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' ainda está caminhando \nEla vai ter que andar a noite toda para pegar um desvio, não da para atravessar o rio. \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nEstá na hora descansar, esse dia foi muito perigoso e cansativo!")
            prompt("\ndigite ENTER para continuar")
            
        }  
    },

    afastar: function(){
        if(numrandom<=40){
        console.clear()
        console.log("\nJAgora são: ", hora + 7, " horas, e ",nome," está observando o lugar e a outra onça. \nQuando ela percebe que ali é o territorio de caça de sua irmã resolve se afastar antes que sua irmã a veja.")
        onca.fome +=5
        onca.sede +=5
        onca.saude +=1
        console.log('\n-------------------------------------------------------------------------\n já são ', hora + 10, ' horas e ', nome,' está triste por não poder andar e caçar livremente por aquela regiao: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
        console.log(" \nMas amanhã será um novo dia...")
        prompt('\n\ndigite ENTER para continuar');



        }else{
        console.clear()
        console.log("\nJá são: ", hora + 7, " horas, e ",nome, " está observando o lugar e a outra onça. \nQuando ela percebe que ali é o territorio de caça de sua irmã resolve se afastar antes que sua irmã a veja.\n No caminho de volta ela encontra um riacho cheio de peixes e aproveita para fazer um lanchinho\n")
        onca.fome =0
        onca.sede =0
        onca.saude +=1
        console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 10, ' horas e ', nome,' gostou do seu novo lar, tem muita agua e alimentos. \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
        console.log(" \nEstá na hora descansar!")
        prompt("\ndigite ENTER para continuar")
        
        }

    },

    ataca: function (){
        if(numrandom<=50){
            console.clear()
            console.log("\nAgora são: ", hora + 4, " horas, e ",nome," ataca nossa equipe. Temos que fugir e nos proteger. \nNosso trabalho aqui acabou!!! corre!! corre!!")
            prompt('\n\ndigite ENTER para continuar');
    


            }else{
            console.clear()
            console.log("\nJá são: ", hora + 4, " horas, e ",nome, " ataca nossa equipe, mas temos Cães de caça para nos proteger.\n A onça se assusta com eles e se afasta. mas vamos ter que finalizar nosso trabalho por aqui!!\n")
            onca.fome +=5
            onca.sede +=5
            onca.saude +=0
            console.log('\n-------------------------------------------------------------------------\nVamos deixar ',nome, ' em paz! ja incomodamos muito!!. \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            prompt("\ndigite ENTER para continuar")
            
            }   
    },

    feliz: function (){
        if(numrandom<=50){
            console.clear()
            console.log("\nJAgora são: ", hora + 4, " horas, e ",nome," nao se importa de estarmos acompanhando sua jornada, fica feliz e continua fazendo suas atividades!!.")
            onca.fome +=5
            onca.sede +=5
            onca.saude +=0
            console.log('\n-------------------------------------------------------------------------\n já são ', hora + 10, ' horas e vamos deixar a onça em paz!! para ela poder andar e caçar livremente por aquela regiao: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            prompt('\n\ndigite ENTER para continuar');
    


            }else{
            console.clear()
            console.log("\nJá são: ", hora + 4, " horas, e ",nome, "fica feliz com nossa presença, se aproxima e faz amizade com toda a equipe\n")
            onca.fome =0
            onca.sede =0
            onca.saude +=1
            console.log('\n-------------------------------------------------------------------------\nAgora já são ', hora + 6, ' horas e ', nome,' precisa ficar sozinha, não podemos atrapalhar sua vida. \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-------------------------------------------------------------------------')
            console.log(" \nVamos encerrar nosso trabalho por aqui!")
            prompt("\ndigite ENTER para continuar")
            
            }
        }

}


//gera um numero aleatorio de 0 a 100. esse numero é usado com a intenção de definir ações que so acontecem com
//probabilidade se X% se nao estiver dentro dessa probabilidade acontecerá outra coisa
let numrandom = Math.floor((Math.random())*100);
let jogarnovamente

//define uma variavel para exibir a hora do dia para o usuario
let hora = 7

// mensagem de saldação e inicio do jogo
prompt("Vamos iniciar nosso jogo! Vamos acompanhar por 5 dias a vida de uma Onça selvagem!. Tecle ENTER para continuar\n")

//define o jome do personagem
let nome = prompt("Para começar vamos dar um nome para a Onça que vamos acompanha durante essa semana:digite o nome: ").toUpperCase()


// vai fazer rodar o jogo pelo menos uma vez
do

// faz a sequencia de repetição definida
for(let dia=1;dia<=5;dia++){

// primeira sequencia de repetição
if(dia==1){
    console.clear()
    console.log('\nHoje é nosso dia 1, seguda feira. Agora são: ', hora, 'horas da manha'); prompt('\ndigite ENTER para continuar');
    console.log('\nNossa querida onça', nome, 'está acordando. Agora já são: ', hora+2, ' horas e ', nome, ' se levanta'); prompt('\ndigite ENTER para continuar');
    console.clear()
    console.log('\n---------------------------------------------------------------------------\nOs dados vitais de ', nome,' são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-----------------------------------------------------------------------------------------'); prompt('\ndigite ENTER para continuar');
    let escolha1 = prompt("\nHoje a onça está pensando no que vai fazer ao longo do dia. Ela pode 'CACAR' ou 'DORMIR' digite sua escolha: ")
    //se o usuario digitar algo diferente do esperado, vai informar o erro e pedir pra digitar de novo
    while(escolha1!=="dormir" && escolha1!=="cacar"){
        escolha1 = prompt("entrada inválida, digite: cacar ou dormir: ")
    }

    if(escolha1=="cacar"){onca.cacar()}
    if(escolha1=="dormir"){onca.dormir()}

    console.log("teste dia 1 executado")
}



// segunda sequencia de repetição
if(dia==2){
    console.clear()
    console.log('\nHoje é nosso dia 2, terça feira. Agora são: ', hora, 'horas da manha'); prompt('\ndigite ENTER para continuar');
    console.log('\nNossa querida onça', nome, 'ja acordou e está andando pelas proximidades. Agora já são: ', hora+2, ' horas e ', nome, ' continua sua caminhada'); prompt('\ndigite ENTER para continuar');
    console.clear()
    console.log('\n---------------------------------------------------------------------------\nOs dados vitais de ', nome,' são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-----------------------------------------------------------------------------------------'); prompt('\ndigite ENTER para continuar');
    console.log("\nHoje a onça está pensando em ficar nas proximidades de sua toca, está com sede e vai em direção ao lago, \nmas no caminho sente o cheiro de um bando de zebras\nela decide beber agua ou caçar as zebras?")
    let escolha1 = prompt("digite zebra ou agua: ")
    while(escolha1!=="zebra" && escolha1!=="agua"){
        escolha1 = prompt("entrada inválida, digite: zebra ou agua: ")
    }

    if(escolha1=="zebra"){onca.cacarzebra()}
    if(escolha1=="agua"){onca.beberagua()}

    console.log("teste dia 2 executado")

}


// terceira sequencia de repetição
if(dia==3){
    console.clear()
    console.log('\nHoje é nosso dia 3, Quarta feira. Agora são: ', hora, 'horas da manha'); prompt('\ndigite ENTER para continuar');
    console.log( "\n",nome, 'ja acordou e está pensando em sua segurança. sua toca não é muito segura.\n Agora já são: ', hora+2, ' horas e ', nome, ' decide que tem que tomar uma decisão'); prompt('\ndigite ENTER para continuar');
    console.clear()
    console.log('\n---------------------------------------------------------------------------\nOs dados vitais de ', nome,' são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-----------------------------------------------------------------------------------------'); prompt('\ndigite ENTER para continuar');
    console.log("\nEla decide que tem melhorar sua segurança, ou deve procurar uma toca mais segura ou vai precisar migrar para \numa região mais segura para se livrar dos Leões que vivem nas proximidades")
    let escolha1 = prompt("digite toca ou migrar: ")
    while(escolha1!=="toca" && escolha1!=="migrar"){
        escolha1 = prompt("entrada inválida, digite: toca ou migrar: ")
    }

    if(escolha1=="toca"){onca.subirnaarvore()}
    if(escolha1=="migrar"){onca.migrar()}


}



// quarta sequencia de repetição
if(dia==4){
    console.clear()
    console.log('\nHoje é nosso dia 4, Quinta feira. Agora são: ', hora, 'horas da manha'); prompt('\ndigite ENTER para continuar');
    console.log( "\n",nome, 'está andando para conhecer as proximidades de seu novo lar.\n Agora já são: ', hora+2, ' horas e ', nome, ' ve uma outra onça que lhe parece familiar.'); prompt('\ndigite ENTER para continuar');
    console.clear()
    console.log('\n---------------------------------------------------------------------------\nOs dados vitais de ', nome,' são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-----------------------------------------------------------------------------------------'); prompt('\ndigite ENTER para continuar');
    console.log("\nÉ a sua irmã gemea. Os dois animais não se dão bem e ela tem que se afastar ou pode chegar perto.")
    let escolha1 = prompt("digite afastar ou perto: ")
    while(escolha1!=="afastar" && escolha1!=="perto"){
        escolha1 = prompt("entrada inválida, digite: afastar ou perto: ")
    }

    if(escolha1=="afastar"){onca.afastar()}
    if(escolha1=="perto"){onca.perto()}


}



//quinta sequencia de repetição
if(dia==5){
    console.clear()
    console.log('\nHoje é nosso dia 5, Sexta feira. Agora são: ', hora+2, 'horas da manha'); prompt('\ndigite ENTER para continuar');
    console.log('\nEm sua caminhada diária.', nome,' percebeu a presença da nossa equipe de filmagem\n Agora já são: ', hora+4, ' horas e ', nome, ' está incomodada com nossa presença'); prompt('\ndigite ENTER para continuar');
    console.clear()
    console.log('\n---------------------------------------------------------------------------\nOs dados vitais de ', nome,' são os seguintes: \n', onca.fome, ' % de fome; ', onca.sede, ' % de sede; ', onca.saude, ' % de saude.\n-----------------------------------------------------------------------------------------'); prompt('\ndigite ENTER para continuar');
    console.log("\nEla decide nos atacar ou fica feliz com a nossa presença?")
    let escolha1 = prompt("digite atacar ou feliz: ")
    while(escolha1!=="atacar" && escolha1!=="feliz"){
        escolha1 = prompt("entrada inválida, digite: atacar ou feliz: ")
    }

    if(escolha1=="atacar"){onca.ataca()}
    if(escolha1=="feliz"){onca.feliz()}


    // atribui um valor de sim ou não a variavel
    jogarnovamente = prompt("deseja jogar novamente? Digite sim ou nao: ").toUpperCase()
    
}

}

    // se a resposta for sim, o jogo reinicia partindo do "for"
    while (jogarnovamente == "SIM");

