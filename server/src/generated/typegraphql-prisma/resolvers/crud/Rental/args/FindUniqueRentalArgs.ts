import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalWhereUniqueInput } from "../../../inputs/RentalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRentalArgs {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;
}
