/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        users {
          nextToken
        }
        entries {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
      users {
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
        surname
        department
        email
        admin
        status
        createdAt
        updatedAt
        projects {
          nextToken
        }
        entries {
          nextToken
        }
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
      surname
      department
      email
      admin
      status
      createdAt
      updatedAt
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
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      department
      date
      description
      time
      createdAt
      updatedAt
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
        users {
          nextToken
        }
        entries {
          nextToken
        }
      }
      user {
        id
        name
        surname
        department
        email
        admin
        status
        createdAt
        updatedAt
        projects {
          nextToken
        }
        entries {
          nextToken
        }
      }
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
        department
        date
        description
        time
        createdAt
        updatedAt
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
          surname
          department
          email
          admin
          status
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
