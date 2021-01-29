/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      projectNo
      name
      allowedHours
      usedHours
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
        allowedHours
        usedHours
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
        allowedHours
        usedHours
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
          allowedHours
          usedHours
          status
          createdAt
          updatedAt
        }
        user {
          id
          name
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
