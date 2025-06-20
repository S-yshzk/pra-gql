import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreCreateManyInput } from "../../../inputs/StoreCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStoreArgs {
  @TypeGraphQL.Field(_type => [StoreCreateManyInput], {
    nullable: false
  })
  data!: StoreCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
