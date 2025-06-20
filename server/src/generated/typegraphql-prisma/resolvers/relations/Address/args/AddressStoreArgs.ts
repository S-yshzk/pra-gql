import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreOrderByWithRelationInput } from "../../../inputs/StoreOrderByWithRelationInput";
import { StoreWhereInput } from "../../../inputs/StoreWhereInput";
import { StoreWhereUniqueInput } from "../../../inputs/StoreWhereUniqueInput";
import { StoreScalarFieldEnum } from "../../../../enums/StoreScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AddressStoreArgs {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StoreOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: StoreOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  cursor?: StoreWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"store_id" | "manager_staff_id" | "address_id" | "last_update"> | undefined;
}
