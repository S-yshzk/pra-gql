import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateManyAddressInput } from "../inputs/StoreCreateManyAddressInput";

@TypeGraphQL.InputType("StoreCreateManyAddressInputEnvelope", {})
export class StoreCreateManyAddressInputEnvelope {
  @TypeGraphQL.Field(_type => [StoreCreateManyAddressInput], {
    nullable: false
  })
  data!: StoreCreateManyAddressInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
