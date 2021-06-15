/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      projectNo
      name
      status
      entries {
        items {
          id
          department
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      allowTimeTechnical
      allowTimeEngineering
      allowTimeCoordination
      allowTimeConstruction
      usedTimeTechnical
      usedTimeEngineering
      usedTimeCoordination
      usedTimeConstruction
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      projectNo
      name
      status
      entries {
        items {
          id
          department
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      allowTimeTechnical
      allowTimeEngineering
      allowTimeCoordination
      allowTimeConstruction
      usedTimeTechnical
      usedTimeEngineering
      usedTimeCoordination
      usedTimeConstruction
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      projectNo
      name
      status
      entries {
        items {
          id
          department
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      allowTimeTechnical
      allowTimeEngineering
      allowTimeCoordination
      allowTimeConstruction
      usedTimeTechnical
      usedTimeEngineering
      usedTimeCoordination
      usedTimeConstruction
      createdAt
      updatedAt
    }
  }
`;
export const createUserProject = /* GraphQL */ `
  mutation CreateUserProject(
    $input: CreateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    createUserProject(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        email
        admin
        status
        createdAt
        updatedAt
      }
      project {
        id
        projectNo
        name
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        allowTimeTechnical
        allowTimeEngineering
        allowTimeCoordination
        allowTimeConstruction
        usedTimeTechnical
        usedTimeEngineering
        usedTimeCoordination
        usedTimeConstruction
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserProject = /* GraphQL */ `
  mutation UpdateUserProject(
    $input: UpdateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    updateUserProject(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        email
        admin
        status
        createdAt
        updatedAt
      }
      project {
        id
        projectNo
        name
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        allowTimeTechnical
        allowTimeEngineering
        allowTimeCoordination
        allowTimeConstruction
        usedTimeTechnical
        usedTimeEngineering
        usedTimeCoordination
        usedTimeConstruction
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserProject = /* GraphQL */ `
  mutation DeleteUserProject(
    $input: DeleteUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    deleteUserProject(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        email
        admin
        status
        createdAt
        updatedAt
      }
      project {
        id
        projectNo
        name
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        allowTimeTechnical
        allowTimeEngineering
        allowTimeCoordination
        allowTimeConstruction
        usedTimeTechnical
        usedTimeEngineering
        usedTimeCoordination
        usedTimeConstruction
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      surname
      department
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      entries {
        items {
          id
          department
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      email
      admin
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      surname
      department
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      entries {
        items {
          id
          department
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      email
      admin
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      surname
      department
      projects {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      entries {
        items {
          id
          department
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
      email
      admin
      status
      createdAt
      updatedAt
    }
  }
`;
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        allowTimeTechnical
        allowTimeEngineering
        allowTimeCoordination
        allowTimeConstruction
        usedTimeTechnical
        usedTimeEngineering
        usedTimeCoordination
        usedTimeConstruction
        createdAt
        updatedAt
      }
      user {
        id
        name
        surname
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        email
        admin
        status
        createdAt
        updatedAt
      }
      department
      date
      description
      time
      createdAt
      updatedAt
    }
  }
`;
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        allowTimeTechnical
        allowTimeEngineering
        allowTimeCoordination
        allowTimeConstruction
        usedTimeTechnical
        usedTimeEngineering
        usedTimeCoordination
        usedTimeConstruction
        createdAt
        updatedAt
      }
      user {
        id
        name
        surname
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        email
        admin
        status
        createdAt
        updatedAt
      }
      department
      date
      description
      time
      createdAt
      updatedAt
    }
  }
`;
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        allowTimeTechnical
        allowTimeEngineering
        allowTimeCoordination
        allowTimeConstruction
        usedTimeTechnical
        usedTimeEngineering
        usedTimeCoordination
        usedTimeConstruction
        createdAt
        updatedAt
      }
      user {
        id
        name
        surname
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        email
        admin
        status
        createdAt
        updatedAt
      }
      department
      date
      description
      time
      createdAt
      updatedAt
    }
  }
`;
