import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInventoryOrThrowArgs {
  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: false
  })
  where!: InventoryWhereUniqueInput;
}
