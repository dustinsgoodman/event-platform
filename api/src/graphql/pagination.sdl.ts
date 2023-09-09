export const schema = gql`
  input PaginationInput {
    page: Int
    perPage: Int
  }

  type Pagination {
    page: Int
    perPage: Int
    total: Int
    totalPages: Int
  }
`;
