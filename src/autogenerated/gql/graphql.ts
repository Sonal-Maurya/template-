/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<User>;
  logout?: Maybe<User>;
  register?: Maybe<User>;
};

export type MutationLoginArgs = {
  name: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  name: Scalars["String"];
  password: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hello?: Maybe<Scalars["String"]>;
  me?: Maybe<User>;
  random?: Maybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  id: Scalars["Int"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type UserFragment = { __typename?: "User"; id: number; name: string };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: Maybe<{ __typename?: "User"; id: number; name: string }>;
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: "Query"; hello?: Maybe<string> };

export type RandomQueryVariables = Exact<{ [key: string]: never }>;

export type RandomQuery = { __typename?: "Query"; random?: Maybe<number> };

export const UserFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "User" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserFragment, unknown>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "User" },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const HelloDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Hello" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "hello" } }],
      },
    },
  ],
} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>;
export const RandomDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Random" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "random" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RandomQuery, RandomQueryVariables>;
