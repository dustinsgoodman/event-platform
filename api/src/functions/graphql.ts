import {
  CurrencyDefinition,
  CurrencyResolver,
  EmailAddressResolver,
  EmailAddressTypeDefinition,
  IPv4Definition,
  IPv4Resolver,
  LocaleDefinition,
  LocaleResolver,
  NonNegativeIntResolver,
  NonNegativeIntTypeDefinition,
  TimeZoneResolver,
  TimeZoneTypeDefinition,
  URLResolver,
  URLTypeDefinition,
  UUIDDefinition,
  UUIDResolver,
} from 'graphql-scalars';

import { createGraphQLHandler } from '@redwoodjs/graphql-server';

import directives from 'src/directives/**/*.{js,ts}';
import sdls from 'src/graphql/**/*.sdl.{js,ts}';
import services from 'src/services/**/*.{js,ts}';

import { db } from 'src/lib/db';
import { logger } from 'src/lib/logger';

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  schemaOptions: {
    typeDefs: [
      CurrencyDefinition,
      EmailAddressTypeDefinition,
      IPv4Definition,
      LocaleDefinition,
      NonNegativeIntTypeDefinition,
      TimeZoneTypeDefinition,
      URLTypeDefinition,
      UUIDDefinition,
    ],
    resolvers: {
      Currency: CurrencyResolver,
      EmailAddress: EmailAddressResolver,
      IPv4: IPv4Resolver,
      Locale: LocaleResolver,
      NonNegativeInt: NonNegativeIntResolver,
      TimeZone: TimeZoneResolver,
      URL: URLResolver,
      UUID: UUIDResolver,
    },
  },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  },
});
