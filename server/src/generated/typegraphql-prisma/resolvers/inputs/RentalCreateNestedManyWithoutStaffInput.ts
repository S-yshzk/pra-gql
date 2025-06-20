import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyStaffInputEnvelope } from "../inputs/RentalCreateManyStaffInputEnvelope";
import { RentalCreateOrConnectWithoutStaffInput } from "../inputs/RentalCreateOrConnectWithoutStaffInput";
import { RentalCreateWithoutStaffInput } from "../inputs/RentalCreateWithoutStaffInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateNestedManyWithoutStaffInput", {})
export class RentalCreateNestedManyWithoutStaffInput {
  @TypeGraphQL.Field(_type => [RentalCreateWithoutStaffInput], {
    nullable: true
  })
  create?: RentalCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: RentalCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  connect?: RentalWhereUniqueInput[] | undefined;
}
