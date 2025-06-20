import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalUpdateInput } from "../../../inputs/RentalUpdateInput";
import { RentalWhereUniqueInput } from "../../../inputs/RentalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRentalArgs {
  @TypeGraphQL.Field(_type => RentalUpdateInput, {
    nullable: false
  })
  data!: RentalUpdateInput;

  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;
}
