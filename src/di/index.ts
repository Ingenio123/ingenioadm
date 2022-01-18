import IPresenters from "./interfaces/iPresenters";
import infrastructures from "./infrastructures";
import repositories from "./respositories";
import useCases from "./useCases";
import presenters from "./presenters";

const cInfrastructures = infrastructures();
const cRepositorires = repositories(cInfrastructures);
const cUseCases = useCases(cRepositorires);
const cPresenters = presenters(cUseCases);

export default {
  session: cPresenters.session,
  teacher: cPresenters.teacher,
} as IPresenters;
