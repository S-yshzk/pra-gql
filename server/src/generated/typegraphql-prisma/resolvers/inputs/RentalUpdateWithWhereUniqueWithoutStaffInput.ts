import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalUpdateWithoutStaffInput } from "../inputs/RentalUpdateWithoutStaffInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateWithWhereUniqueWithoutStaffInput", {})
export class RentalUpdateWithWhereUniqueWithoutStaffInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: RentalUpdateWithoutStaffInput;
}
