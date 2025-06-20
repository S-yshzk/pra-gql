import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreWhereInput } from "../../../inputs/StoreWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyStoreArgs {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
