// import { IBoardEntity } from "@domains/aggregates/interfaces/iBoard";
import { ITeacherEntity } from "../domains/aggregates/interfaces/iTeacher";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const teacherList = atom<Array<ITeacherEntity>>({
  key: "teacherList",
  default: [],
});

const teacherListState = selector({
  key: "teacherListState",
  get: ({ get }) => get(teacherList),
});

export const useGetteacherList = () => {
  return useRecoilValue(teacherListState);
};

export const useSetteacherList = () => {
  return useSetRecoilState(teacherList);
};

export const useteacherListState = () => {
  return useRecoilState(teacherList);
};
