import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { useLocalSearchParams } from "expo-router";
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { useState, useEffect } from "react";

export const AnswerQuestions = () => {

  const questionListData = [
    {
      "title": "Questão 1 - ENEM 2020",
      "index": 1,
      "discipline": "linguagens",
      "language": "espanhol",
      "year": 2020,
      "context": "**Pablo Pueblo**\n\nRegresa un hombre en silencio  \nDe su trabajo cansado  \nSu paso no lleva prisa  \nSu sombra nunca lo alcanza\n\nLo espera el barrio de siempre  \nCon el farol en la esquina  \nCon la basura allá en frente  \nY el ruido de la cantina\n\nPablo Pueblo  \nllega hasta el zaguán oscuro  \nY vuelve a ver las paredes  \nCon las viejas papeletas  \nQue prometían futuros  \nen lides politiqueras  \nY en su cara se dibuja  \nla decepción de la espera.\n\n**BLADES. R.** DisponíveI em: http://rubenblades.com. _Acesso em: 26 jun. 2012 (fragmento)_",
      "files": [],
      "correctAlternative": "A",
      "alternativesIntroduction": "Rubén Blades é um compositor panamenho de canções socialmente engajadas. O título Pablo Pueblo, associado ao conteúdo da letra da canção, revela uma crítica social ao",
      "alternatives": [
        {
          "letter": "A",
          "text": "Contrapor a individualidade de um sujeito a uma estrutura social marcada pela decepção na atuação política.",
          "file": null,
          "isCorrect": true
        },
        {
          "letter": "B",
          "text": "Demonstrar que o problema sofrido pelo indivíduo atinge toda a comunidade.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Relativizar a importância que se dá ao sofrimento individual em uma estrutura social baseada na exploração.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Descrever a vida de um sujeito que nunca resolve suas inquietações e, por isso, mantém-se silencioso.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Usar um apelido jocoso para designar a atuação de um indivíduo em seu próprio bairro.",
          "file": null,
          "isCorrect": false
        }
      ]
    },
    {
      "title": "Questão 2 - ENEM 2020",
      "index": 2,
      "discipline": "linguagens",
      "language": "espanhol",
      "year": 2020,
      "context": "**Los propietarios de la libertad**\n\nLas palabras cumplen ciclos; las actitudes también. Sin embargo, cuando las palabras designan actitudes, los ciclos se vuelven más complejos. Cuando el hoy tan denostado Sartre puso la palabra compromiso sobre el tapete y hasta Mac Leish publicó un libro sobre la responsabilidad de los intelectuales, estas dos palabras, compromiso y responsabilidad, designaban actitudes que, sin ser gemelas, eran bastante afines. Salvo contadas excepciones, los intelectuales de entonces los hicieron suyas y, equivocados o no, dijeron sin eufemismos por  \nqué empeño se la jugaban.\n\nLos intelectuales latinoamericanos tambiéncomprendieron dónde estaba esta vez el enemigo. Sólo entonces empezó la mala prensa. Los grandes pontífices de la propaganda subrayaron una y otra vez la palabra libertad y denostaron el compromiso. Libertad no era librarse de Batista o de Somoza, sino mantener la prensa libre. Libertad es la emocionada comprobación de que la gran prensa norteamericana es capaz de descubrir que Lumumba o Aliende fueron liquidados por la CIA, sin poner el acento en que eso no sirve para resucitarlos.\n\n¿Y compromiso? Es la actitud que adoptan ciertos intelectuales, cuya carga ideológica perjudica notoriamente su arte. Después de todo, ¿cómo se atrevena frecuentar las provincias del espiritu, si es público y notorio que tales ámbitos son patrimonio exclusivo de los propietarios de la Iibertad?\n\n**BENEDETTI, M**. _Perplejidades de fin de siglo_. Buenos Aires: Sudamericana, 1993 (adaptado)",
      "files": [],
      "correctAlternative": "C",
      "alternativesIntroduction": "Transformar palavras em atitudes tem sido um dos grandes dilemas dos intelectuais. Ao ponderar sobre essa temática, o autor, um dos grandes críticos e literatos latino-americanos da atualidade, leva o leitor a perceber que",
      "alternatives": [
        {
          "letter": "A",
          "text": "O compromisso político afasta o artista da criação.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Os costumes sociais governam a linguagem e as atitudes das pessoas.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "O compromisso ideológico de alguns intelectuais está refletido em suas obras.",
          "file": null,
          "isCorrect": true
        },
        {
          "letter": "D",
          "text": "A complexidade relacionada ao conceito de liberdade impede o compromisso.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Os intelectuais latino-americanos têm um posiciona - mento acrítico perante o poder.",
          "file": null,
          "isCorrect": false
        }
      ]
    },
    {
      "title": "Questão 3 - ENEM 2020",
      "index": 3,
      "discipline": "linguagens",
      "language": "espanhol",
      "year": 2020,
      "context": "**La violencia como bella arte**\n\nPues bien, ‘Relatos Salvajes’, de Damián Szifrón, es  \nsobre todo un brilhante esfuerzo por poner rostro, por  \nfotografiar, a la parte de la violencia que tanto cuesta ver  \nen el cine. De repente, el director argentino coloca la  \nespectador ante el espectáculo, digamos putrefacto, de  \nuna sociedad enferma de su propia indolencia,  \nanestesiada por su ira, incapaz de entender el origen de  \nla insatisfacción que la habita. ¿Cómo se quedan? Sí,  \nestamos delante de la una película vocacionalmente  \nviolenta, obligadamente salvaje, pero, y sobre todo,  \ndeslumbrante en su claridad.  \nMás allá del esplendor sabio de una producción  \nperfecta, lo que más duele, lo que más divierte, lo que  \nmás conmueve es la sensación de reconocimiento. Cada  \nuno de los damnificados, pese a su acento marcadamente  \nargentino, somos nosotros. O, mejor, cada insulto  \nproferido, y no siempre entendido, es nuestro, en algún  \nmomento ha salido de nuestra boca. O saldrá.  \nLa violencia no es sólo eso que tanto desagrada a los  \nprofesionales del buen gusto, a los programadores de  \nópera o a los filósofos de la nada; la violencia, la  \nrealmente insoportable, es también una cuestión de  \nactitud, un simple gesto. Y esa violencia está por todas  \npartes, está dentro. Y Szifrón acierta a retrataria tan  \nfielmente que no queda otra cosa que romper a reír.  \nAunque sólo sea de simple desesperación. Brillante,  \nmagistral incluso.\n\n**MARTÍNEZ, L**. Disponível em: www.elmundo.es. _Acesso em: 13 abr. 2015_ (adaptado).",
      "files": [],
      "correctAlternative": "E",
      "alternativesIntroduction": "Nessa resenha crítica acerca do filme Relatos Salvajes, o autor evidencia o",
      "alternatives": [
        {
          "letter": "A",
          "text": "Cômico como fuga da sociedade diante de situações violentas.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Estado de apatia da sociedade perante a violência rotineira do mundo atual.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Empecilho para o espectador vivenciar a violência bruta na realidade e na ficção.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Sotaque reforçado dos personagens a fim de marca.r o espaço do cinema argentino.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Autorreconhecimento diante dos diversos tipos de comportamento humano frente à violência.",
          "file": null,
          "isCorrect": true
        }
      ]
    },
    {
      "title": "Questão 4 - ENEM 2020",
      "index": 4,
      "discipline": "linguagens",
      "language": "espanhol",
      "year": 2020,
      "context": "Oye, Pito, ésta es: la vida bruta de un boy  \nmis tierras eran  \nnuevo méxico, colorado,  \ncalifornia, arizona, tejas,  \ny muchos otros senderos,  \naún cuando la luz existía  \nsonrientemente  \nen las palabras  \nde mis antepasados…  \nera entonces hombre,  \nmaduro y sencillo  \ncomo los cerros y los peñascos,  \ny mi cultura era el atole,  \nel chaquehue, y los buenos días;  \nmi idioma cantaba  \nversículos  \npor los cañones  \nde tierra roja  \ny tierra amarilla…  \nHoy sí, hoy ya no soy  \nmejicano ni hispano  \nni tampoco americano,  \npero soy — y bien lo siento ser —  \nuna sombra del pasado  \ny un esfuerzo  \nhacia el futuro…\n\n**SÁNCHEZ. R**. Disponível em: www.materialdelectura.unam.mx. _Acesso em: 4 dez. 2017._",
      "files": [],
      "correctAlternative": "E",
      "alternativesIntroduction": "Ao abordar a expropriação de territórios mexicanos pelos Estados Unidos, o eu lírico do poema revela um(a)",
      "alternatives": [
        {
          "letter": "A",
          "text": "Rejeição da língua utilizada por seus antepassados.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Desejo de pertencimento ao espaço estadunidense.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Certeza de manutenção de suas tradições.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Reivindicação de um mundo unificado.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Sentimento de conflito de identidades.",
          "file": null,
          "isCorrect": true
        }
      ]
    },
    {
      "title": "Questão 5 - ENEM 2020",
      "index": 5,
      "discipline": "ciencias-humanas",
      "language": null,
      "year": 2020,
      "context": "Poco después apareció en casa de Elisenda Morales,  \narrastrando su cansancio y las contrariedades de un largo  \ndía que habla dejado su ánimo en ruínas. A pesar de todo,  \nsupo resistirlo, y cuando ella le ofreció una copa de  \nmistela, abandonó su asiento para ir hasta la tienda en  \nbusca de algo más estimulante.  \nAllí, en el corredor dela casa, en taburetes separados,  \nrecibieron los primeros cálidos soplos de la noche. Con su  \nhabitual entereza, Elisenda entró a conectar la luz de la  \nsala, sofocando parte de su reflejo, mientras comentaba  \nque así estarían mejor. Al menos, pensó el tio Camarillo,  \nno habia sacado la lámpara como otras veces, ni le había  \nentregado alguno de sus álbumes, y parecía en cambio  \ndecidida a mantener en ascuas al vecindario. Aquélla fue  \nla primera vez que en mucho tiempo dejaron de lado el  \ntema de las rentas, para entrar con pies de plomo en el  \nespinoso terreno de las confidencias.\n\n**SÁNCHEZ, H. El héroe de la familia. Bogotá. Tercer Mundo, 1988.**",
      "files": [],
      "correctAlternative": "E",
      "alternativesIntroduction": "No texto, no qual é narrada a visita à casa de uma personagem, a expressão “entrar con pies de plomo” é utilizada para se referir ao(à)",
      "alternatives": [
        {
          "letter": "A",
          "text": "Determinação para conduzir discussões pessoais.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Insensibilidade para lidar com temas do passado.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Discrição para administrar questões financeiras.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Disposição para resolver problemas familiares.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Cuidado para tratar de assuntos íntimos.",
          "file": null,
          "isCorrect": true
        }
      ]
    }
  ];

  const { questionListHeaderTitle, color, percentage } = useLocalSearchParams();

  const [question, setQuestion] = useState(questionListData[0]);
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handleAnswer = (letter) => {
    setSelectedAlternative(letter);

    const isCorrect = letter === question.correctAlternative;

    setAnsweredQuestions(prev => ({
      ...prev,
      [question.index]: { chosen: letter, correct: isCorrect }
    }));
  };

  const previousQuestion = () => { };

  const handleNext = () => {
    const nextIndex = question.index;
    if (nextIndex < questionListData.length) {
      setQuestion(questionListData[nextIndex]); // pois index começa em 1
      setSelectedAlternative(null);
    }
  };

  useEffect(() => {
    // console.log("Local search params: ", questionListHeaderTitle, color, percentage);
    if (!question) return;
    console.log("Texto da questão:", question.context);
    console.log("Introdução da questão:", question.alternativesIntroduction);
    console.log("Alternativas da questão:", question.alternatives);
  }, [question]);

  return (
    <ScrollView className="flex-1">
      <QuestionListHeader title={questionListHeaderTitle} color={color} />
      <View className={`flex-1 items-center bg-${color}-400 px-4`}>
        <Progress value={percentage} className="w-full h-2 m-4" >
          <ProgressFilledTrack className="h-1" />
        </Progress>

        <Center className="bg-white rounded-xl p-4 mb-2">
          <Heading className="text-xl font-bold mb-2">{question.title}</Heading>
          <Text className="font-semibold">{question.context}</Text>
          <Divider className="bg-black h-0.5 my-0.5" />
          <Text className="font-semibold">{question.alternativesIntroduction}</Text>
        </Center>

        {question.alternatives.map((alternative) => {
          const isSelected = selectedAlternative === alternative.letter;
          const isCorrect = alternative.isCorrect;

          const showResult = answeredQuestions[question.index];

          let bgColor = "white";
          if (showResult) {
            if (isCorrect) {
              bgColor = "green";
            } else if (isSelected) bgColor = "red";
          } else if (isSelected) {
            bgColor = "blue";
          }
          const bgColors = {
            white: "bg-white",
            red: "bg-red-500",
            green: "bg-green-500",
            blue: "bg-blue-400"
          };

          return (
            <TouchableOpacity
              key={alternative.letter}
              disabled={!!showResult}
              onPress={() => handleAnswer(alternative.letter)}
              className={`w-full flex flex-row items-center ${bgColors[bgColor]} rounded-xl gap-2 p-2 px-4 m-1`}
              activeOpacity={0.8}
            >
              <Text className="font-bold text-lg">
                {alternative.letter})
              </Text>
              <Text className="flex-1 font-medium text-base">
                {alternative.text}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View className="w-full flex flex-row justify-between p-2">
          <Button
            action={"primary"}
            variant={"solid"}
            size={"lg"}
            onPress={previousQuestion}
          >
            <ButtonIcon as={ArrowLeft} className="mr-2" />
            <ButtonText>Questão anterior</ButtonText>
          </Button>

          <Button
            action={"primary"}
            variant={"solid"}
            size={"lg"}
            onPress={handleNext}
          >
            <ButtonText>Próxima questão</ButtonText>
            <ButtonIcon as={ArrowRight} className="ml-2" />
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
