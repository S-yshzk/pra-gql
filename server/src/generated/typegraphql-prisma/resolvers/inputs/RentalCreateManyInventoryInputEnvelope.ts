import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyInventoryInput } from "../inputs/RentalCreateManyInventoryInput";

@TypeGraphQL.InputType("RentalCreateManyInventoryInputEnvelope", {})
export class RentalCreateManyInventoryInputEnvelope {
  @TypeGraphQL.Field(_type => [RentalCreateManyInventoryInput], {
    nullable: false
  })
  data!: RentalCreateManyInventoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
