/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
      id
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
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
      id
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
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
      id
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
