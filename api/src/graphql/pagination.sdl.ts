export const schema = gql`
  input PaginationInput {
    page: NonNegativeInt
    perPage: NonNegativeInt
  }

  type Pagination {
    page: NonNegativeInt!
    perPage: NonNegativeInt!
    total: NonNegativeInt!
    totalPages: NonNegativeInt!
  }
`;
