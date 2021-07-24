import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Project {
  readonly id: string;
  readonly projectNo?: number;
  readonly name?: string;
  readonly status?: string;
  readonly entries?: (Entry | null)[];
  readonly users?: (UserProject | null)[];
  readonly allowTimeTechnical?: number;
  readonly allowTimeEngineering?: number;
  readonly allowTimeCoordination?: number;
  readonly allowTimeConstruction?: number;
  readonly usedTimeTechnical?: number;
  readonly usedTimeEngineering?: number;
  readonly usedTimeCoordination?: number;
  readonly usedTimeConstruction?: number;
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

export declare class Entry {
  readonly id: string;
  readonly project?: Project;
  readonly user?: User;
  readonly department?: string;
  readonly date?: string;
  readonly description?: string;
  readonly time?: number;
  constructor(init: ModelInit<Entry>);
  static copyOf(source: Entry, mutator: (draft: MutableModel<Entry>) => MutableModel<Entry> | void): Entry;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly surname?: string;
  readonly department?: string;
  readonly projects?: (UserProject | null)[];
  readonly entries?: (Entry | null)[];
  readonly email?: string;
  readonly admin?: boolean;
  readonly status?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class UserProject {
  readonly id: string;
  readonly user?: User;
  readonly project?: Project;
  constructor(init: ModelInit<UserProject>);
  static copyOf(source: UserProject, mutator: (draft: MutableModel<UserProject>) => MutableModel<UserProject> | void): UserProject;
}