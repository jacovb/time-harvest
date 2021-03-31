/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectNo
        name
        allowedHours {
          id
          technical
          engineering
          coordination
          construction
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
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
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
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
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        project {
          id
          projectNo
          name
          status
          createdAt
          updatedAt
        }
        user {
          id
          name
          department
          createdAt
          updatedAt
        }
        date
        description
        time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAllowed = /* GraphQL */ `
  query GetAllowed($id: ID!) {
    getAllowed(id: $id) {
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
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
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
      createdAt
      updatedAt
    }
  }
`;
export const listAlloweds = /* GraphQL */ `
  query ListAlloweds(
    $filter: ModelAllowedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlloweds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsed = /* GraphQL */ `
  query GetUsed($id: ID!) {
    getUsed(id: $id) {
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
          createdAt
          updatedAt
        }
        usedHours {
          id
          technical
          engineering
          coordination
          construction
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
      createdAt
      updatedAt
    }
  }
`;
export const listUseds = /* GraphQL */ `
  query ListUseds(
    $filter: ModelUsedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUseds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
