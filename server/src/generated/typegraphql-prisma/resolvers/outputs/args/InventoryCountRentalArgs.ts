import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalWhereInput } from "../../inputs/RentalWhereInput";

@TypeGraphQL.ArgsType()
export class InventoryCountRentalArgs {
  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  where?: RentalWhereInput | undefined;
}
