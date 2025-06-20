import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InventoryCreateManyInput } from "../../../inputs/InventoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInventoryArgs {
  @TypeGraphQL.Field(_type => [InventoryCreateManyInput], {
    nullable: false
  })
  data!: InventoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
