import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyInventoryInputEnvelope } from "../inputs/RentalCreateManyInventoryInputEnvelope";
import { RentalCreateOrConnectWithoutInventoryInput } from "../inputs/RentalCreateOrConnectWithoutInventoryInput";
import { RentalCreateWithoutInventoryInput } from "../inputs/RentalCreateWithoutInventoryInput";
import { RentalScalarWhereInput } from "../inputs/RentalScalarWhereInput";
import { RentalUpdateManyWithWhereWithoutInventoryInput } from "../inputs/RentalUpdateManyWithWhereWithoutInventoryInput";
import { RentalUpdateWithWhereUniqueWithoutInventoryInput } from "../inputs/RentalUpdateWithWhereUniqueWithoutInventoryInput";
import { RentalUpsertWithWhereUniqueWithoutInventoryInput } from "../inputs/RentalUpsertWithWhereUniqueWithoutInventoryInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateManyWithoutInventoryNestedInput", {})
export class RentalUpdateManyWithoutInventoryNestedInput {
  @TypeGraphQL.Field(_type => [RentalCreateWithoutInventoryInput], {
    nullable: true
  })
  create?: RentalCreateWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalCreateOrConnectWithoutInventoryInput], {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpsertWithWhereUniqueWithoutInventoryInput], {
    nullable: true
  })
  upsert?: RentalUpsertWithWhereUniqueWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalCreateManyInventoryInputEnvelope, {
    nullable: true
  })
  createMany?: RentalCreateManyInventoryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [RentalUpdateWithWhereUniqueWithoutInventoryInput], {
    nullable: true
  })
  update?: RentalUpdateWithWhereUniqueWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalUpdateManyWithWhereWithoutInventoryInput], {
    nullable: true
  })
  updateMany?: RentalUpdateManyWithWhereWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RentalScalarWhereInput[] | undefined;
}
