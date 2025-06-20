import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalCreateInput } from "../../../inputs/RentalCreateInput";
import { RentalUpdateInput } from "../../../inputs/RentalUpdateInput";
import { RentalWhereUniqueInput } from "../../../inputs/RentalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRentalArgs {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalCreateInput, {
    nullable: false
  })
  create!: RentalCreateInput;

  @TypeGraphQL.Field(_type => RentalUpdateInput, {
    nullable: false
  })
  update!: RentalUpdateInput;
}
