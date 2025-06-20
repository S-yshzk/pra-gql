import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffWhereInput } from "../../inputs/StaffWhereInput";

@TypeGraphQL.ArgsType()
export class StoreCountStaff_staff_store_idTostoreArgs {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;
}
