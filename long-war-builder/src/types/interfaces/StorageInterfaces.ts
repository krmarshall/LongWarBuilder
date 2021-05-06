import { ClassName, MecName } from '../enums/ClassEnums';

interface LocalStorageBuild {
  perks: Array<number | undefined>;
  psi?: Array<number | undefined>;
}

interface LocalStorageClassInterface {
  [key: string]: LocalStorageBuild;
}

interface UrlBuildInterface {
  class: ClassName | MecName;
  build: Array<number | undefined>;
  psi?: Array<number | undefined>;
}

export type { LocalStorageBuild, LocalStorageClassInterface, UrlBuildInterface };
