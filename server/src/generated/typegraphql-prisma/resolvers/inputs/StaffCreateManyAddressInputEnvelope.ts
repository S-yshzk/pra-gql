import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateManyAddressInput } from "../inputs/StaffCreateManyAddressInput";

@TypeGraphQL.InputType("StaffCreateManyAddressInputEnvelope", {})
export class StaffCreateManyAddressInputEnvelope {
  @TypeGraphQL.Field(_type => [StaffCreateManyAddressInput], {
    nullable: false
  })
  data!: StaffCreateManyAddressInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
