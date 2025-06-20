import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutRentalInput } from "../inputs/StaffCreateOrConnectWithoutRentalInput";
import { StaffCreateWithoutRentalInput } from "../inputs/StaffCreateWithoutRentalInput";
import { StaffUpdateToOneWithWhereWithoutRentalInput } from "../inputs/StaffUpdateToOneWithWhereWithoutRentalInput";
import { StaffUpsertWithoutRentalInput } from "../inputs/StaffUpsertWithoutRentalInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateOneRequiredWithoutRentalNestedInput", {})
export class StaffUpdateOneRequiredWithoutRentalNestedInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutRentalInput, {
    nullable: true
  })
  create?: StaffCreateWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutRentalInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpsertWithoutRentalInput, {
    nullable: true
  })
  upsert?: StaffUpsertWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateToOneWithWhereWithoutRentalInput, {
    nullable: true
  })
  update?: StaffUpdateToOneWithWhereWithoutRentalInput | undefined;
}
