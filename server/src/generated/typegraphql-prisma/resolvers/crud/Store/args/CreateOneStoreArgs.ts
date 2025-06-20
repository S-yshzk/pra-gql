import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreCreateInput } from "../../../inputs/StoreCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneStoreArgs {
  @TypeGraphQL.Field(_type => StoreCreateInput, {
    nullable: false
  })
  data!: StoreCreateInput;
}
