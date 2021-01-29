/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
