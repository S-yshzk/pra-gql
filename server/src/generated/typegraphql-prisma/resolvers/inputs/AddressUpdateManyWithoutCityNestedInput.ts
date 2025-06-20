import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereWithoutCityInput } from "../inputs/AddressUpdateManyWithWhereWithoutCityInput";
import { AddressUpdateWithWhereUniqueWithoutCityInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutCityInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateManyWithoutCityNestedInput", {})
export class AddressUpdateManyWithoutCityNestedInput {
  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  set?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  delete?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereUniqueInput], {
    nullable: true
  })
  connect?: AddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpdateWithWhereUniqueWithoutCityInput], {
    nullable: true
  })
  update?: AddressUpdateWithWhereUniqueWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressUpdateManyWithWhereWithoutCityInput], {
    nullable: true
  })
  updateMany?: AddressUpdateManyWithWhereWithoutCityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AddressScalarWhereInput[] | undefined;
}
