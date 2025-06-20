import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalUpdateManyMutationInput } from "../../../inputs/RentalUpdateManyMutationInput";
import { RentalWhereInput } from "../../../inputs/RentalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRentalArgs {
  @TypeGraphQL.Field(_type => RentalUpdateManyMutationInput, {
    nullable: false
  })
  data!: RentalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  where?: RentalWhereInput | undefined;
}
