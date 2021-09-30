/* eslint-disable */
import * as graphql from "./graphql";

const documents = {
  "\n  fragment User on User {\n    id\n    name\n  }\n":
    graphql.UserFragmentDoc,
  "\n  query Me {\n    me {\n      ...User\n    }\n  }\n": graphql.MeDocument,
  "\n  query Hello {\n    hello\n  }\n": graphql.HelloDocument,
  "\n  query Random {\n    random\n  }\n": graphql.RandomDocument,
};

export function gql(
  source: "\n  fragment User on User {\n    id\n    name\n  }\n"
): typeof documents["\n  fragment User on User {\n    id\n    name\n  }\n"];
export function gql(
  source: "\n  query Me {\n    me {\n      ...User\n    }\n  }\n"
): typeof documents["\n  query Me {\n    me {\n      ...User\n    }\n  }\n"];
export function gql(
  source: "\n  query Hello {\n    hello\n  }\n"
): typeof documents["\n  query Hello {\n    hello\n  }\n"];
export function gql(
  source: "\n  query Random {\n    random\n  }\n"
): typeof documents["\n  query Random {\n    random\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}
