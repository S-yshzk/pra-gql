import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryWhereInput } from "../../inputs/InventoryWhereInput";

@TypeGraphQL.ArgsType()
export class FilmCountInventoryArgs {
  @TypeGraphQL.Field(_type => InventoryWhereInput, {
    nullable: true
  })
  where?: InventoryWhereInput | undefined;
}
