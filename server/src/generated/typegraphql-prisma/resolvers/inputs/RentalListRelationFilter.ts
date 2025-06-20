import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalWhereInput } from "../inputs/RentalWhereInput";

@TypeGraphQL.InputType("RentalListRelationFilter", {})
export class RentalListRelationFilter {
  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  every?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  some?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  none?: RentalWhereInput | undefined;
}
