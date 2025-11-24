import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import Markdown from "react-native-markdown-display";
import { useLocalSearchParams } from "expo-router";
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { useState, useEffect } from "react";

export const AnswerQuestions = () => {

  const questionListData = [
    {
      "title": "Questão 12 - ENEM 2019",
      "index": 12,
      "discipline": "linguagens",
      "language": null,
      "year": 2019,
      "context": "![](https://enem.dev/2019/questions/12/cbc6cd51-59ad-446d-823e-2bd9c979d5a1.png)\n\n**TEXTO II**\n\n**Quadrinista surda faz sucesso na CCXP com narrativas silenciosas**\n\nA área de artistas independentes da Comic Con Experience (CCXP) deste ano é a maior da história do evento geek, são mais de 450 quadrinistas e ilustradores no Artists’ Alley.\n\nE a diversidade vai além do estilo das HQ. Em uma das mesas na fila F, senta a quadrinista com deficiência auditiva Ju Loyola, com suas histórias que classifica como “narrativas silenciosas”. São histórias que podem ser compreendidas por crianças e adultos, e pessoas de qualquer nacionalidade, pelo simples motivo de não terem uma única palavra.\n\nA artista não escreve roteiros convencionais para suas obras. Sua experiência de ter que entender a comunicação pelo que vê faz com que ela se identifique muito mais com o que observa do que com o que as pessoas dizem.\n\nE basta folhear suas obras que fica claro que elas não são histórias em quadrinhos que perderam as palavras, mas sim que ganharam uma nova perspectiva.\n\n**Disponível em:** https://catracalivre.com.br. Acesso em: 8 dez. 2018 (adaptado).",
      "files": [
        "https://enem.dev/2019/questions/12/cbc6cd51-59ad-446d-823e-2bd9c979d5a1.png"
      ],
      "correctAlternative": "D",
      "alternativesIntroduction": "O Texto I exemplifica a obra de uma artista surda, que promove uma experiência de leitura inovadora, divulgada no Texto II. Independentemente de seus objetivos, ambos os textos",
      "alternatives": [
        {
          "letter": "A",
          "text": "Incentivam a produção de roteiros compostos por imagens.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Colaboram para a valorização de enredos românticos.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Revelam o sucesso de um evento de cartunistas.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Contribuem com o processo de acessibilidade.",
          "file": null,
          "isCorrect": true
        },
        {
          "letter": "E",
          "text": "Questionam o padrão tradicional das HQ.",
          "file": null,
          "isCorrect": false
        }
      ]
    },
    {
      "title": "Questão 13 - ENEM 2019",
      "index": 13,
      "discipline": "linguagens",
      "language": null,
      "year": 2019,
      "context": "HELOÍSA: Faz versos?\n\nPINOTE: Sendo preciso… Quadrinhas… Acrósticos… Sonetos… Reclames.\n\nHELOÍSA: Futuristas?\n\nPINOTE: Não senhora! Eu já fui futurista. Cheguei a acreditar na independência… Mas foi uma tragédia! Começaram a me tratar de maluco. A me olhar de esguelha. A não me receber mais. As crianças choravam em casa. Tenho três filhos. No jornal também não pagavam, devido à crise. Precisei viver de bicos. Ah! Reneguei tudo. Arranjei aquele instrumento (Mostra a faca) e fiquei passadista.\n\n**ANDRADE, O.** _O rei da vela_. São Paulo: Globo, 2003.",
      "files": [],
      "correctAlternative": "B",
      "alternativesIntroduction": "O fragmento da peça teatral de Oswald de Andrade ironiza a reação da sociedade brasileira dos anos 1930 diante de determinada vanguarda europeia. Nessa visão, atribui-se ao público leitor uma postura",
      "alternatives": [
        {
          "letter": "A",
          "text": "Preconceituosa, ao evitar formas poéticas simplificadas.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Conservadora, ao optar por modelos consagrados.",
          "file": null,
          "isCorrect": true
        },
        {
          "letter": "C",
          "text": "Preciosista, ao preferir modelos literários eruditos.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Nacionalista, ao negar modelos estrangeiros.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Eclética, ao aceitar diversos estilos poéticos.",
          "file": null,
          "isCorrect": false
        }
      ]
    },
    {
      "title": "Questão 14 - ENEM 2019",
      "index": 14,
      "discipline": "linguagens",
      "language": null,
      "year": 2019,
      "context": null,
      "files": [],
      "correctAlternative": "E",
      "alternativesIntroduction": "A viagem\nQue coisas devo levar\nnesta viagem em que partes?\nAs cartas de navegação só servem\na quem fica.\nCom que mapas desvendar\num continente\nque falta?\nEstrangeira do teu corpo\ntão comum\nquantas línguas aprender\npara calar-me?\nTambém quem fica\nprocura\num oriente.\nTambém\na quem fica\ncabe uma paisagem nova\ne a travessia insone do desconhecido\ne a alegria difícil da descoberta.\nO que levas do que fica,\no que, do que levas, retiro?\nMARQUES, A. M. In: SANT’ANNA, A (Org.).\nRua Aribau. Porto Alegre: Tag, 2018\n \n\n\n\n\nA viagem e a ausência remetem a um repertório poético tradicional. No poema, a voz lírica dialoga com essa tradição, repercutindo a",
      "alternatives": [
        {
          "letter": "A",
          "text": "Saudade como experiência de apatia.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Presença da fragmentação da identidade.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Negação do desejo como expressão de culpa.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Persistência da memória na valorização do passado.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Revelação de rumos projetada pela vivência da solidão.",
          "file": null,
          "isCorrect": true
        }
      ]
    },
    {
      "title": "Questão 15 - ENEM 2019",
      "index": 15,
      "discipline": "linguagens",
      "language": null,
      "year": 2019,
      "context": null,
      "files": [],
      "correctAlternative": "C",
      "alternativesIntroduction": "O Instituto de Arte de Chicago disponibilizou para visualização on-line, compartilhamento ou download (sob licença Creative Commons), 44 mil imagens de obras de arte em altíssíma resolução, além de livros, estudos e pesquisas sobre a história da arte.\nPara o historiador da arte, Bendor Grosvenor, o sucesso das coleções on-line de acesso aberto, além de democratizar a arte, vem ajudando a formar um novo público museológico. Grosvenor acredita que quanto mais pessoas forem expostas à arte on-line, mais visitas pessoais acontecerão aos museus.\nA coleção está disponível em seis categorias: paisagens urbanas, impressionismo, essenciais, arte africana, moda e animais. Também é possível pesquisar pelo nome da obra, estilo, autor ou período. Para navegar pela imagem em alta definição, basta clicar sobre ela e utilizar a ferramenta de zoom. Para fazer o download, disponível para obras de domínio público, é preciso utilizar a seta localizada do lado inferior direito da imagem.\nDisponível em: www.revistabula.com. Acesso em: 5 dez. 2018 (adaptado).\n \nA função da linguagem que predomina nesse texto se caracteriza por",
      "alternatives": [
        {
          "letter": "A",
          "text": "Evidenciar a subjetividade da reportagem com base na fala do historiador de arte.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Convencer o leitor a fazer o acesso on-line, levando-o a conhecer as obras de arte.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Informar sobre o acesso às imagens por meio da descrição do modo como acessá-las.",
          "file": null,
          "isCorrect": true
        },
        {
          "letter": "D",
          "text": "Estabelecer interlocução com o leitor, orientando-o a fazer o download das obras de arte.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "E",
          "text": "Enaltecer a arte, buscando popularizá-la por meio da possibilidade de visualização on-line.",
          "file": null,
          "isCorrect": false
        }
      ]
    },
    {
      "title": "Questão 16 - ENEM 2019",
      "index": 16,
      "discipline": "linguagens",
      "language": null,
      "year": 2019,
      "context": null,
      "files": [],
      "correctAlternative": "D",
      "alternativesIntroduction": "Ed Mort só vai Mort.\nEd Mort. Detetive particular. Está na plaqueta. Tenho um escritório numa galeria de Copacabana entre um fliperama e uma loja de carimbos. Dá só para o essencial, um telefone mudo e um cinzeiro. Mas insisto numa mesa e numa cadeira. Apesar do protesto das baratas. Elas não vencerão. Comprei um jogo de máscaras. No meu trabalho o disfarce é essencial. Para escapar dos credores. Outro dia entrei na sala e vi a cara do King Kong andando pelo chão. As baratas estavam roubando as máscaras. Espisoteei meia dúzia. As outras atacaram a mesa. Consegui salvar a minha Bic e o jornal. O jornal era novo, tinha só uma semana. Mas elas levaram a agenda. Saí ganhando. A agenda estava em branco. Meu último caso fora com a funcionária do Erótica, a primeira ótica da cidade com balconista topless. Acabara mal. Mort. Ed Mort. Está na plaqueta.\nVERISSIMO, L. F. Ed Mort: todas as histórias. Porto Alegre: L&PM, 1997 (adaptado).\n \nNessa crônica, o efeito de humor é basicamente construído por uma",
      "alternatives": [
        {
          "letter": "A",
          "text": "Segmentação de enunciados baseada na descrição dos hábitos do personagem.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "B",
          "text": "Ordenação dos constituintes oracionais na qual se destaca o núcleo verbal.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "C",
          "text": "Estrutura composicional caracterizada pelo arranjo singular dos períodos.",
          "file": null,
          "isCorrect": false
        },
        {
          "letter": "D",
          "text": "Sequenciação narrativa na qual se articulam eventos absurdos.",
          "file": null,
          "isCorrect": true
        },
        {
          "letter": "E",
          "text": "Seleção lexical na qual predominam informações redundantes.",
          "file": null,
          "isCorrect": false
        }
      ]
    }
  ];

  const { questionListHeaderTitle, color, percentage } = useLocalSearchParams();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionMarkdown, setQuestionMarkdown] = useState("");
  const [question, setQuestion] = useState(questionListData[questionIndex]);
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handleAnswer = (letter) => {
    setSelectedAlternative(letter);

    const isCorrect = letter === question.correctAlternative;

    setAnsweredQuestions(prev => ({
      ...prev,
      [question.index]: {
        chosen: letter,
        correct: isCorrect,
        correctAlternative: question.correctAlternative,
        answeredAt: new Date()
      }
    }));
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(prev => prev - 1);
      setSelectedAlternative(null);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < questionListData.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setSelectedAlternative(null);
    }
  };

  useEffect(() => {
    setQuestion(questionListData[questionIndex]);
  }, [questionIndex]);

  useEffect(() => {
    if (!question) return;

    const markdown = `
${question.context}

**${question.alternativesIntroduction}**
`

    setQuestionMarkdown(markdown);
  }, [question]);

  return (
    <ScrollView className={`flex-1 bg-${color}-400`}>
      <QuestionListHeader title={questionListHeaderTitle} color={color} />
      <View className={`flex-1 items-center px-4`}>
        <Progress value={percentage} className="w-full h-2 m-4" >
          <ProgressFilledTrack className="h-1" />
        </Progress>

        <Center className="bg-white rounded-xl p-4 mb-2">
          <Heading className="text-xl font-bold mb-2">{question.title}</Heading>
          <Markdown>
            {questionMarkdown}
          </Markdown>
        </Center>

        {question.alternatives.map((alternative) => {
          const isSelected = selectedAlternative === alternative.letter;
          const isCorrect = alternative.isCorrect;

          const showResult = answeredQuestions[question.index];

          let bgColor = "white";
          if (showResult) {
            if (isCorrect) {
              bgColor = "green";
            }
            else if (isSelected || showResult.chosen === alternative.letter) {
              bgColor = "red"
            } else {
              bgColor = "gray"
            }
          }

          const bgColors = {
            white: "bg-white",
            red: "bg-red-600",
            green: "bg-green-500",
            gray: "bg-gray-300"
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
                {alternative.letter}
              </Text>
              <Text className="flex-1 font-medium text-base">
                {alternative.text}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View className="w-full flex flex-row justify-between p-2 mt-4">
          <Button
            className={`${questionIndex === 0 ? 'opacity-85' : ''}`}
            disabled={questionIndex === 0}
            action={"primary"}
            variant={"solid"}
            size={"lg"}
            onPress={handlePreviousQuestion}
          >
            <ButtonIcon as={ArrowLeft} className="mr-2" />
            <ButtonText>Voltar</ButtonText>
          </Button>

          <Button
            className={`${questionIndex === questionListData.length - 1 ? 'opacity-85' : ''}`}
            disabled={questionIndex === questionListData.length - 1}
            action={"primary"}
            variant={"solid"}
            size={"lg"}
            onPress={handleNextQuestion}
          >
            <ButtonText>Próximo</ButtonText>
            <ButtonIcon as={ArrowRight} className="ml-2" />
          </Button>
        </View>
      </View>
    </ScrollView >
  );
}
