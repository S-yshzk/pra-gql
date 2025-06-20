import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyStaffInput } from "../inputs/RentalCreateManyStaffInput";

@TypeGraphQL.InputType("RentalCreateManyStaffInputEnvelope", {})
export class RentalCreateManyStaffInputEnvelope {
  @TypeGraphQL.Field(_type => [RentalCreateManyStaffInput], {
    nullable: false
  })
  data!: RentalCreateManyStaffInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
