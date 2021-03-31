/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
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
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
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
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
export const onCreateAllowed = /* GraphQL */ `
  subscription OnCreateAllowed {
    onCreateAllowed {
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
export const onUpdateAllowed = /* GraphQL */ `
  subscription OnUpdateAllowed {
    onUpdateAllowed {
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
export const onDeleteAllowed = /* GraphQL */ `
  subscription OnDeleteAllowed {
    onDeleteAllowed {
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
export const onCreateUsed = /* GraphQL */ `
  subscription OnCreateUsed {
    onCreateUsed {
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
export const onUpdateUsed = /* GraphQL */ `
  subscription OnUpdateUsed {
    onUpdateUsed {
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
export const onDeleteUsed = /* GraphQL */ `
  subscription OnDeleteUsed {
    onDeleteUsed {
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
