import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './resources/users';
import { PostList, PostEdit, PostCreate } from './resources/posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './providers/authProvider';
// import dataProvider from './providers/dataProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
      <Resource name="posts" create={PostCreate} list={PostList} edit={PostEdit} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);


export default App;