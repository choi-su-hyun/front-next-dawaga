import React from "react";
import SearchInput from "../Input/SearchInput";
import { useForm } from "react-hook-form";

const AddParticipants = () => {
  const { register } = useForm<{ participantsSearch: string }>({
    defaultValues: {
      participantsSearch: "",
    },
  });

  const searchParticipants = () => {
    console.log("참여자 검색 api");
  };

  return (
    <>
      <h3 className="modal__title">참여 인원 추가</h3>
      <SearchInput
        register={register("participantsSearch")}
        name="participants-search"
        searchAction={searchParticipants}
      />
    </>
  );
};

export default AddParticipants;
