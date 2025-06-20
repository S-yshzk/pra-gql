import * as TypeGraphQL from "type-graphql";

export enum ActorScalarFieldEnum {
  actor_id = "actor_id",
  first_name = "first_name",
  last_name = "last_name",
  last_update = "last_update",
}
TypeGraphQL.registerEnumType(ActorScalarFieldEnum, {
  name: "ActorScalarFieldEnum",
  description: undefined,
});
