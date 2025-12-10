import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import Markdown from "react-native-markdown-display";
import { useSession } from '@/contexts/AuthContext';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { useState, useEffect } from "react";
import axios from "axios";

export const AnswerQuestions = () => {

  const searchParams = useLocalSearchParams();
  const allListData = JSON.parse(searchParams.list);
  const questionList = JSON.parse(searchParams.questionList);
  const { questionListHeaderTitle, color } = searchParams;

  const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;
  const router = useRouter();
  const { getAuthHeaders } = useSession();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionMarkdown, setQuestionMarkdown] = useState("");
  const [question, setQuestion] = useState(questionList[0] ?? null);

  const [selectedAlternative, setSelectedAlternative] = useState(null);

  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const fetchAnsweredQuestions = async () => {
    try {
      const listAnswers = await axios.get(`${baseBackendUrl}/list-answers/list/${allListData.id}`, getAuthHeaders());

      if (!listAnswers.data || listAnswers.data.length === 0) {
        setAnsweredQuestions({});
        return;
      }

      setAnsweredQuestions(listAnswers.data.reduce((acc, answer) => {
          acc[answer.questionId] = answer;
          return acc;
        }, {})
      );
      console.log("Respostas carregadas com sucesso!", listAnswers.data);
    } catch (error) {
      console.error("Erro ao carregar respostas do usuário: ", error);
    }
  }

  const handleAnswer = async (letter) => {
    try {
      const postData = {
        customListId: allListData.id,
        questionId: question.id,
        userAnswer: letter,
        responseTimeSeconds: Math.floor((new Date().getTime() - question.startTime.getTime()) / 1000)
      };
      const listResponse = await axios.post(`${baseBackendUrl}/list-answers`, postData, getAuthHeaders());
      setSelectedAlternative(letter);

      await fetchAnsweredQuestions();
      console.log("Resposta enviada com sucesso!", listResponse.data);
    } catch (error) {
      console.error("Erro ao enviar resposta: ", error);
    }
  };

  useEffect(() => {
    fetchAnsweredQuestions();
  }, []);

  // Atualiza a questão atual quando o índice da questão muda
  useEffect(() => {
    let question = questionList[questionIndex];
    question.startTime = new Date();
    setQuestion(question);
  }, [questionIndex]);

  useEffect(() => {
    if (!question) return;

    console.log("Questão atual =>", question.id);
    console.log("Respondidas =>", Object.keys(answeredQuestions));

    const answer = answeredQuestions[question.id];
    setSelectedAlternative(answer ? answer.userAnswer : null);

    const markdown = `
${question.context}

**${question.alternativesIntroduction}**
`

    setQuestionMarkdown(markdown);
  }, [question, answeredQuestions]);

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(prev => prev - 1);
      setSelectedAlternative(null);
    } else {
      // Se está na primeira questão, volta para a listagem
      router.back();
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex === questionList.length - 1) {
      router.back();
    } else if (questionIndex < questionList.length - 1) {
      setQuestionIndex(prev => prev + 1);
      setSelectedAlternative(null);
    }
  };

  if (question) {
    return (
      <ScrollView className={`flex-1 bg-${color}-400`}>
        <QuestionListHeader title={questionListHeaderTitle} color={color} />
        <View className={`flex-1 items-center px-4 mt-4`}>
          <Center className="bg-white rounded-xl p-4 mb-2">
            <Heading className="text-xl font-bold mb-2">{question.title}</Heading>
            <Markdown>
              {questionMarkdown}
            </Markdown>
          </Center>

          {question.alternatives.map((alternative) => {
            const isSelected = selectedAlternative === alternative.letter;
            const isCorrect = alternative.isCorrect;

            const showResult = answeredQuestions[question.id];

            let bgColor = "white";
            if (showResult) {
              if (isCorrect) {
                bgColor = "green";
              }
              else if (isSelected || showResult.userAnswer === alternative.letter) {
                bgColor = "red"
              } else {
                bgColor = "gray"
              }
            }

            const bgColors = {
              white: "bg-white",
              red: "bg-red-600",
              green: "bg-green-500",
              gray: "bg-gray-200"
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

          <View className="w-full flex flex-row justify-between p-2 my-2">
            <Button
              className={`${questionIndex === 0 ? 'opacity-85' : ''} rounded-3xl border-black border-2 border-b-4`}
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
              className={`${questionIndex === questionList.length - 1 ? 'bg-green-400' : ''} rounded-3xl border-black border-2 border-b-4`}
              action={"primary"}
              variant={"solid"}
              size={"lg"}
              onPress={handleNextQuestion}
            >
              <ButtonText className={`${questionIndex === questionList.length - 1 ? 'text-black' : ''}`}>
                {questionIndex === questionList.length-1 ? "Finalizar" : "Próximo"}
              </ButtonText>
              <ButtonIcon as={ArrowRight} className={`${questionIndex === questionList.length - 1 ? 'text-black ml-2' : 'ml-2'}`} />
            </Button>
          </View>
        </View>
      </ScrollView >
    );
  }
}
