import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AddressOrderByWithRelationInput } from "../../../inputs/AddressOrderByWithRelationInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
import { AddressScalarFieldEnum } from "../../../../enums/AddressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAddressOrThrowArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AddressOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AddressOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true
  })
  cursor?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"address_id" | "address" | "address2" | "district" | "city_id" | "postal_code" | "phone" | "last_update"> | undefined;
}
