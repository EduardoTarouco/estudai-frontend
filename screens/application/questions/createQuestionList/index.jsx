import { QuestionListHeader } from "@/components/application/headers/QuestionListHeader";
import { SelectButton } from "@/components/application/SelectButton";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { useState } from "react";

export const CreateQuestionList = () => {

  const { title, color, href } = useLocalSearchParams();

  const [selectedDate, setSelectedDate] =  useState();

  return (
    <View className="flex-1">
      <QuestionListHeader title={title} color={color} />
      <View className="justify-center items-center flex-1 w-full p-4">
        <SelectButton 
          selected={selectedDate}
          setSelected={setSelectedDate}
          title="Data"
          items={["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"]}
        />
      </View>
    </View>
  );
}