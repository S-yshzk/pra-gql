import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreWhereInput } from "../../../inputs/StoreWhereInput";

@TypeGraphQL.ArgsType()
export class StaffStore_store_manager_staff_idTostaffArgs {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
