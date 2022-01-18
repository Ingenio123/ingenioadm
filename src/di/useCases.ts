import Session from "../domains/useCases/Session";
import IRepositories from "./interfaces/IRepositories";
import IUseCases from "./interfaces/iUseCases";
import Teacher from "../domains/useCases/Teacher";

export default (repositories: IRepositories): IUseCases => {
  return {
    session: new Session(repositories.session),
    teacher: new Teacher(repositories.teacher),
  };
};
