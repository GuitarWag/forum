import gql from 'graphql-tag';

const AUTH_QUERY = gql`
  query AUTH {
    auth {
      id
      email
      username
      avatar
      role
      accountDisabled
    }
  }
`;

export default AUTH_QUERY;
