import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreUpdateInput } from "../../../inputs/StoreUpdateInput";
import { StoreWhereUniqueInput } from "../../../inputs/StoreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStoreArgs {
  @TypeGraphQL.Field(_type => StoreUpdateInput, {
    nullable: false
  })
  data!: StoreUpdateInput;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;
}
