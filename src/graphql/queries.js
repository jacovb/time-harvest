/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      projectNo
      name
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
