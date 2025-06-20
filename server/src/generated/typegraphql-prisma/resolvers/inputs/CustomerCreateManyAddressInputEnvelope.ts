import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyAddressInput } from "../inputs/CustomerCreateManyAddressInput";

@TypeGraphQL.InputType("CustomerCreateManyAddressInputEnvelope", {})
export class CustomerCreateManyAddressInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManyAddressInput], {
    nullable: false
  })
  data!: CustomerCreateManyAddressInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
