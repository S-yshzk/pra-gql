import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreCreateInput } from "../../../inputs/StoreCreateInput";
import { StoreUpdateInput } from "../../../inputs/StoreUpdateInput";
import { StoreWhereUniqueInput } from "../../../inputs/StoreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStoreArgs {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreCreateInput, {
    nullable: false
  })
  create!: StoreCreateInput;

  @TypeGraphQL.Field(_type => StoreUpdateInput, {
    nullable: false
  })
  update!: StoreUpdateInput;
}
