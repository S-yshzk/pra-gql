import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalCreateInput } from "../../../inputs/RentalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRentalArgs {
  @TypeGraphQL.Field(_type => RentalCreateInput, {
    nullable: false
  })
  data!: RentalCreateInput;
}
