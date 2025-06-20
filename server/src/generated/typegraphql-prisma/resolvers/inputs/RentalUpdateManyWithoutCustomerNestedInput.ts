import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyCustomerInputEnvelope } from "../inputs/RentalCreateManyCustomerInputEnvelope";
import { RentalCreateOrConnectWithoutCustomerInput } from "../inputs/RentalCreateOrConnectWithoutCustomerInput";
import { RentalCreateWithoutCustomerInput } from "../inputs/RentalCreateWithoutCustomerInput";
import { RentalScalarWhereInput } from "../inputs/RentalScalarWhereInput";
import { RentalUpdateManyWithWhereWithoutCustomerInput } from "../inputs/RentalUpdateManyWithWhereWithoutCustomerInput";
import { RentalUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/RentalUpdateWithWhereUniqueWithoutCustomerInput";
import { RentalUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/RentalUpsertWithWhereUniqueWithoutCustomerInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateManyWithoutCustomerNestedInput", {})
export class RentalUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [RentalCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: RentalCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: RentalUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: RentalCreateManyCustomerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [RentalUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: RentalUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: RentalUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RentalScalarWhereInput[] | undefined;
}
