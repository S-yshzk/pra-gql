import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreWhereUniqueInput } from "../../../inputs/StoreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneStoreArgs {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;
}
