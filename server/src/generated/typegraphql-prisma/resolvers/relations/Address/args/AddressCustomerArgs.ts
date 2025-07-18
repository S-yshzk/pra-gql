import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerOrderByWithRelationInput } from "../../../inputs/CustomerOrderByWithRelationInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
import { CustomerScalarFieldEnum } from "../../../../enums/CustomerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AddressCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustomerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"customer_id" | "store_id" | "first_name" | "last_name" | "email" | "address_id" | "active" | "create_date" | "last_update"> | undefined;
}
