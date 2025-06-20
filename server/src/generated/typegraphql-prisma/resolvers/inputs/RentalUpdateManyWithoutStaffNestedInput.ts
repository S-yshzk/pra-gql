import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyStaffInputEnvelope } from "../inputs/RentalCreateManyStaffInputEnvelope";
import { RentalCreateOrConnectWithoutStaffInput } from "../inputs/RentalCreateOrConnectWithoutStaffInput";
import { RentalCreateWithoutStaffInput } from "../inputs/RentalCreateWithoutStaffInput";
import { RentalScalarWhereInput } from "../inputs/RentalScalarWhereInput";
import { RentalUpdateManyWithWhereWithoutStaffInput } from "../inputs/RentalUpdateManyWithWhereWithoutStaffInput";
import { RentalUpdateWithWhereUniqueWithoutStaffInput } from "../inputs/RentalUpdateWithWhereUniqueWithoutStaffInput";
import { RentalUpsertWithWhereUniqueWithoutStaffInput } from "../inputs/RentalUpsertWithWhereUniqueWithoutStaffInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateManyWithoutStaffNestedInput", {})
export class RentalUpdateManyWithoutStaffNestedInput {
  @TypeGraphQL.Field(_type => [RentalCreateWithoutStaffInput], {
    nullable: true
  })
  create?: RentalCreateWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalCreateOrConnectWithoutStaffInput], {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpsertWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  upsert?: RentalUpsertWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalCreateManyStaffInputEnvelope, {
    nullable: true
  })
  createMany?: RentalCreateManyStaffInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  set?: RentalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RentalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  delete?: RentalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  connect?: RentalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpdateWithWhereUniqueWithoutStaffInput], {
    nullable: true
  })
  update?: RentalUpdateWithWhereUniqueWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpdateManyWithWhereWithoutStaffInput], {
    nullable: true
  })
  updateMany?: RentalUpdateManyWithWhereWithoutStaffInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RentalScalarWhereInput[] | undefined;
}
