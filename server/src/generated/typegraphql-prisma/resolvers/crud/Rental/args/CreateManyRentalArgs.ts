import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalCreateManyInput } from "../../../inputs/RentalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRentalArgs {
  @TypeGraphQL.Field(_type => [RentalCreateManyInput], {
    nullable: false
  })
  data!: RentalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
