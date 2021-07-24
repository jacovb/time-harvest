// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Entry, User, UserProject } = initSchema(schema);

export {
  Project,
  Entry,
  User,
  UserProject
};