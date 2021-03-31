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
      allowedHours {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        technical
        engineering
        coordination
        construction
        total
        createdAt
        updatedAt
      }
      usedHours {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        technical
        engineering
        coordination
        construction
        total
        createdAt
        updatedAt
      }
      status
      entries {
        items {
          id
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
      allowedHours {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        technical
        engineering
        coordination
        construction
        total
        createdAt
        updatedAt
      }
      usedHours {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        technical
        engineering
        coordination
        construction
        total
        createdAt
        updatedAt
      }
      status
      entries {
        items {
          id
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
      allowedHours {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        technical
        engineering
        coordination
        construction
        total
        createdAt
        updatedAt
      }
      usedHours {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        technical
        engineering
        coordination
        construction
        total
        createdAt
        updatedAt
      }
      status
      entries {
        items {
          id
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
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
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
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
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
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
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
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
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
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
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
          date
          description
          time
          createdAt
          updatedAt
        }
        nextToken
      }
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
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        department
        projects {
          nextToken
        }
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      date
      description
      time
      createdAt
      updatedAt
    }
  }
`;
export const createAllowed = /* GraphQL */ `
  mutation CreateAllowed(
    $input: CreateAllowedInput!
    $condition: ModelAllowedConditionInput
  ) {
    createAllowed(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      technical
      engineering
      coordination
      construction
      total
      createdAt
      updatedAt
    }
  }
`;
export const updateAllowed = /* GraphQL */ `
  mutation UpdateAllowed(
    $input: UpdateAllowedInput!
    $condition: ModelAllowedConditionInput
  ) {
    updateAllowed(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      technical
      engineering
      coordination
      construction
      total
      createdAt
      updatedAt
    }
  }
`;
export const deleteAllowed = /* GraphQL */ `
  mutation DeleteAllowed(
    $input: DeleteAllowedInput!
    $condition: ModelAllowedConditionInput
  ) {
    deleteAllowed(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      technical
      engineering
      coordination
      construction
      total
      createdAt
      updatedAt
    }
  }
`;
export const createUsed = /* GraphQL */ `
  mutation CreateUsed(
    $input: CreateUsedInput!
    $condition: ModelUsedConditionInput
  ) {
    createUsed(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      technical
      engineering
      coordination
      construction
      total
      createdAt
      updatedAt
    }
  }
`;
export const updateUsed = /* GraphQL */ `
  mutation UpdateUsed(
    $input: UpdateUsedInput!
    $condition: ModelUsedConditionInput
  ) {
    updateUsed(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      technical
      engineering
      coordination
      construction
      total
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsed = /* GraphQL */ `
  mutation DeleteUsed(
    $input: DeleteUsedInput!
    $condition: ModelUsedConditionInput
  ) {
    deleteUsed(input: $input, condition: $condition) {
      id
      project {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
          total
          createdAt
          updatedAt
        }
        status
        entries {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      technical
      engineering
      coordination
      construction
      total
      createdAt
      updatedAt
    }
  }
`;
