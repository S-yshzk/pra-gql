import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StaffOrderByWithRelationInput } from "../../../inputs/StaffOrderByWithRelationInput";
import { StaffWhereInput } from "../../../inputs/StaffWhereInput";
import { StaffWhereUniqueInput } from "../../../inputs/StaffWhereUniqueInput";
import { StaffScalarFieldEnum } from "../../../../enums/StaffScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyStaffArgs {
  @TypeGraphQL.Field(_type => StaffWhereInput, {
    nullable: true
  })
  where?: StaffWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StaffOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StaffOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  cursor?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StaffScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"staff_id" | "first_name" | "last_name" | "address_id" | "picture" | "email" | "store_id" | "active" | "username" | "password" | "last_update"> | undefined;
}
