import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalWhereInput } from "../inputs/RentalWhereInput";

@TypeGraphQL.InputType("RentalNullableRelationFilter", {})
export class RentalNullableRelationFilter {
  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  is?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  isNot?: RentalWhereInput | undefined;
}
